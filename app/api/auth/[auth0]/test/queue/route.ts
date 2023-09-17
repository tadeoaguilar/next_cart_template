import { NextResponse } from "next/server";
const { QueueServiceClient } = require("@azure/storage-queue");
export async function GET() {
  const STORAGE_CONNECTION_STRING =
    process.env.STORAGE_CONNECTION_STRING ||
    "DefaultEndpointsProtocol=https;AccountName=nextcartstorage;AccountKey=r9IR3dkywwx4VXJm7CVwRbcl1PhK0QxYplRnpA6NlWmORMWkCS4SuFRguHmk1QmCuhGA6vDXKdh6+AStofS43g==;EndpointSuffix=core.windows.net";
  // Note - Account connection string can only be used in node.
  const queueServiceClient = QueueServiceClient.fromConnectionString(
    STORAGE_CONNECTION_STRING,
  );

  // Create a new queue
  const queueName = `newqueue${new Date().getTime()}`;
  const queueClient = queueServiceClient.getQueueClient(queueName);
  const createQueueResponse = await queueClient.create();
  console.log(
    `Created queue ${queueClient.name} successfully, service assigned request ID: ${createQueueResponse.requestId}`,
  );

  const message = {
    queue: queueClient.name,
  };

  return NextResponse.json(message);
}
