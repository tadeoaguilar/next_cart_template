import { NextResponse, NextRequest } from "next/server";
import { fetchAllEntries } from "@/app/lib/cosmosDB";
import { Product, Order, OrderDetail } from "@/app/lib/databaseStructure";
import { auth } from "@/auth";
import { data, orderSchema } from "@/app/lib/databaseStructure";
import { QueueServiceClient } from "@azure/storage-queue";
import { DefaultAzureCredential } from "@azure/identity";

export async function GET(request: NextRequest) {
  const data = await fetchAllEntries<Product>("PRODUCT", "product");

  return NextResponse.json(data);
}
export async function POST(request: NextRequest) {
  console.log("API CART POST");
  const data = (await request.json()) as OrderDetail[];
  const session = await auth();

  const preorder = {
    orderId: crypto.randomUUID().toString(),
    storeId: process.env.STORE_ID || "defaultStore",
    userId: session?.user?.email,
    status: "PENDING",
    type: "CART",
    total: 0.0,
    purcharseDays: 0,
    orderDate: new Date(),
    detail: [...data],
  } as Order;
  const order = orderSchema.safeParse(preorder);

  if (!order.success) return NextResponse.json(order);
  else {
    const account = process.env.ACCOUNT_NAME || "nextcartstorage105858896";
    const queueName = "ordersqueue105858896";
    const defaultAzureCredential = new DefaultAzureCredential();
    const queueServiceClient = new QueueServiceClient(
      `https://${account}.queue.core.windows.net/`,
      defaultAzureCredential,
    );
    const queueClient = queueServiceClient.getQueueClient(queueName);
    const enqueueQueueResponse = await queueClient.sendMessage(
      btoa(JSON.stringify(order.data)),
    );
    console.log(
      `Sent message successfully, service assigned message Id: ${enqueueQueueResponse.messageId}, service assigned request Id: ${enqueueQueueResponse.requestId}`,
    );
    return NextResponse.json({
      queue: enqueueQueueResponse.messageId,
      orderBody: order.data,
    });
  }
}
