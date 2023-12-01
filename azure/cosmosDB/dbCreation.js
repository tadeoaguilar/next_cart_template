// Get Identity Client
import { DefaultAzureCredential } from "@azure/identity";

// Get Cosmos Client
import { CosmosClient } from "@azure/cosmos";
import { dot } from "node:test/reporters";
import { configDotenv } from "dotenv";
// Provide required connection from environment variables
// Endpoint format: https://YOUR-RESOURCE-NAME.documents.azure.com:443/
configDotenv();
const CosmosEndpoint = "https://nextcartcosmosdb.documents.azure.com:443/";
console.log(CosmosEndpoint)
// Set Database name and container name with unique timestamp
const cosmosSecret = process.env.COSMOS_SECRET;
const databaseName = 'webCartDB';
const containerName = ['customer','product'];

// Authenticate to Azure Cosmos DB
const cosmosClient = new CosmosClient(cosmosSecret);


const partitionKeyPath = [`/id`];
const { database } = await cosmosClient.databases.createIfNotExists({
    id: databaseName,
  });
  const { container } = await database.containers.createIfNotExists({
    id: containerName,
    partitionKey: {
      paths: partitionKeyPath,
    },
  });
  
  const {resources} = await container.items.query("SELECT * FROM c").fetchAll()
  
  for (const resource of resources) {
       const item = await container.item(resource.id, resource.id).delete();
       console.log ("Item deleted:" , item.item.id)
  }
    
     
    
    
  
  
  

