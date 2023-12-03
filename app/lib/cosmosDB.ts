
import { Product,Category,Store,Order,User } from "./databaseStructure";
import { DefaultAzureCredential } from "@azure/identity";

// Get Cosmos Client
import { CosmosClient } from "@azure/cosmos";


type CosmosContainers  = "product" | "customer" | "owner" 
type CosmosContainersValidTypes  = "PRODUCT" | "PRODUCTCATEGORY" | "STORE" | "OWNER" 
type CosmosEntityTypes  = Product | Category | Store | Order | User

export async function fetchAllEntries<T extends CosmosEntityTypes>(
containerType: CosmosContainersValidTypes,
cosmosContainer: CosmosContainers
): Promise<T[]> {
 

// Provide required connection from environment variables
// Endpoint format: https://YOUR-RESOURCE-NAME.documents.azure.com:443/





// Set Database name and container name with unique timestamp
const cosmosSecret = process.env.COSMOS_SECRET || "";
const cosmosClient = new CosmosClient(cosmosSecret);
const { database } = await cosmosClient.databases.createIfNotExists({
  id: "webCartDB",
});
// Authenticate to Azure Cosmos DB


  const { container } = await database.containers.createIfNotExists({
    id:cosmosContainer
  });
  
  
  const {resources} = await container.items.query(`SELECT * FROM c where c.type ='${containerType}'`).fetchAll()
  
return (resources as T[])
  
}
















 