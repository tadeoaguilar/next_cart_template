// Get Identity Client
import { DefaultAzureCredential } from "@azure/identity";

// Get Cosmos Client
import { CosmosClient, PartitionKeyDefinitionVersion, PartitionKeyKind } from "@azure/cosmos";
import { dot } from "node:test/reporters";
import { configDotenv } from "dotenv";
import { map } from "zod";
// Provide required connection from environment variables
// Endpoint format: https://YOUR-RESOURCE-NAME.documents.azure.com:443/
configDotenv();
const CosmosEndpoint = process.env.COSMOS_ENDPOINT;

// Set Database name and container name with unique timestamp
const cosmosSecret = process.env.COSMOS_SECRET;
const databaseName = 'webCartDB';
const containersMetaData = [{container:'customer'
                            ,partitionKeyPath:['/storeId','/customerId']},
                            {container:'product',
                            partitionKeyPath:['/storeId','/categoryId']},
                            {container:'owner',
                            partitionKeyPath:['/ownerId']
                          }
                          ]
                            ;

// Authenticate to Azure Cosmos DB
const cosmosClient = new CosmosClient(cosmosSecret);




const { database } = await cosmosClient.databases.createIfNotExists({
    id: databaseName,
  });
  console.log("database",database.id)
  containersMetaData.map( async(containerData) => {
    
  const { container } = await database.containers.createIfNotExists({
    id: containerData.container,
    partitionKey: {
      paths: containerData.partitionKeyPath,
      version:PartitionKeyDefinitionVersion.V2,
      kind: PartitionKeyKind.MultiHash,
    }});
    console.log("container",container.id)
  
})

    
     
    
    
  
  
  

