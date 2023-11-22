import { NextResponse } from "next/server";
import { QueueServiceClient } from "@azure/storage-queue";
import { DefaultAzureCredential } from "@azure/identity";
export async function GET() {
const STORAGE_CONNECTION_STRING =
process.env.STORAGE_CONNECTION_STRING ||
"DefaultEndpointsProtocol=https;AccountName=nextcartstorage;AccountKey=r9IR3dkywwx4VXJm7CVwRbcl1PhK0QxYplRnpA6NlWmORMWkCS4SuFRguHmk1QmCuhGA6vDXKdh6+AStofS43g==;EndpointSuffix=core.windows.net";
// Note - Account connection string can only be used in node.
//const queueServiceClient = QueueServiceClient.fromConnectionString(STORAGE_CONNECTION_STRING);
const AZURE_TENANT_ID = process.env.AZURE_TENANT_ID;
const AZURE_CLIENT_ID = process.env.AZURE_CLIENT_ID;
const AZURE_CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET;
//const account = process.env.ACCOUNT_NAME || "nextcartstorage"
const account = process.env.ACCOUNT_NAME || "nextcartstorage669553314";
// Create a new queue
const queueName = "ordersqueue669553314";

const defaultAzureCredential = new DefaultAzureCredential();

const queueServiceClient = new QueueServiceClient(
`https://${account}.queue.core.windows.net/`,
defaultAzureCredential,
);

const queueClient = queueServiceClient.getQueueClient(queueName);
const createQueueResponse = await queueClient.create();
console.log("Queues:");
for await (const item of queueServiceClient.listQueues()) {
console.log(`- ${item.name}`);
}

const enqueueQueueResponse = await queueClient.sendMessage(btoa("Hola BTOA with E-commerce AZURE"));
return NextResponse.json(enqueueQueueResponse.messageId);
}