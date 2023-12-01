import { NextResponse } from "next/server";
import { QueueServiceClient } from "@azure/storage-queue";
import { DefaultAzureCredential } from "@azure/identity";
import { data, orderSchema } from "../lib/databaseStructure";
import { error } from "console";
export async function GET() {


const account = process.env.ACCOUNT_NAME || "nextcartstorage105858896";
// Create a new queue
const queueName = "ordersqueue105858896";

const defaultAzureCredential = new DefaultAzureCredential();
// Creates an instance of the EnvironmentCredential class and decides what credential to use depending on the available environment variables.
//
// Required environment variables:
// - `AZURE_TENANT_ID`: The Microsoft Entra tenant (directory) ID.
// - `AZURE_CLIENT_ID`: The client (application) ID of an App Registration in the tenant.
// - `AZURE_CLIENT_SECRET`: A client secret that was generated for the App Registration.
const queueServiceClient = new QueueServiceClient(
`https://${account}.queue.core.windows.net/`,
defaultAzureCredential,
);

const queueClient = queueServiceClient.getQueueClient(queueName);
console.log("Queues:");
for await (const item of queueServiceClient.listQueues()) {
console.log(`- ${item.name}`);
}
const order = orderSchema.safeParse(data);





//const enqueueQueueResponse = await queueClient.sendMessage(btoa("Hola BTOA with E-commerce AZURE and NEXTJS queue 1058"));
if (!order.success) 
    
    return NextResponse.json(order.error);
else{
    try{
        const enqueueQueueResponse = await queueClient.sendMessage(btoa(JSON.stringify(order.data)));
        return NextResponse.json(enqueueQueueResponse.messageId);   
    }
    catch(error){
        return NextResponse.json(error);
    }   
    
    
}


}