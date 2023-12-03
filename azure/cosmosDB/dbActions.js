// Get Identity Client
import { DefaultAzureCredential } from "@azure/identity";

// Get Cosmos Client
import { CosmosClient } from "@azure/cosmos";
import { dot } from "node:test/reporters";
import { configDotenv } from "dotenv";
// Provide required connection from environment variables
// Endpoint format: https://YOUR-RESOURCE-NAME.documents.azure.com:443/
configDotenv();

export const deleteAllItems = async (databaseName, containerName) => {
const CosmosEndpoint = process.env.COSMOS_ENDPOINT;

// Set Database name and container name with unique timestamp
const cosmosSecret = process.env.COSMOS_SECRET || "";
const cosmosClient = new CosmosClient(cosmosSecret);
const { database } = await cosmosClient.databases.createIfNotExists({
  id: databaseName,
});
// Authenticate to Azure Cosmos DB


  const { container } = await database.containers.createIfNotExists({
    id: containerName
  });
  
  console.log("Delete items in to database '" + databaseName + "' and container '" + containerName + "'");
  const {resources} = await container.items.query("SELECT * FROM c").fetchAll()
  
  var item = {}
  for (const resource of resources) {
      switch (containerName) {
          case "owner":
             item = await container.item(resource.id, resource.ownerId).delete();
              break;
          case "customer":
             item = await container.item(resource.id,[resource.storeId,resource.customerId]).delete();
              break;
          case "product":
            item = await container.item(resource.id,[resource.storeId,resource.categoryId]).delete();
              break;
          
          default:
              break;
       
       console.log ("Item deleted:" , item.item.id)
  }
    
     
}    }
    
export const createItems = async (databaseName, containerName , objectArray) => {
  
  
  // Set Database name and container name with unique timestamp
  const cosmosSecret = process.env.COSMOS_SECRET || "";
  
  // Authenticate to Azure Cosmos DB
  const cosmosClient = new CosmosClient(cosmosSecret);
  
  const { database } = await cosmosClient.databases.createIfNotExists({
    id: databaseName,
  });
  
    const { container } = await database.containers.createIfNotExists({
      id: containerName
    });
    
    console.log("Insert items in to database '" + databaseName + "' and container '" + containerName + "'");

    await Promise.all(objectArray.map((itemDef) => {
      
      container.items.create(itemDef)
    }));
    console.log(objectArray.length + " items created");
  
    console.log("List items in container '" + container.id + "'");
    const { resources } = await container.items.readAll().fetchAll();
     
       
  }      
  
