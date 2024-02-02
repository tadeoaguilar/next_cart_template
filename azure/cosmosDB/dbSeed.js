import { products, owners, stores, categories } from "./data.js";
import { deleteAllItems, createItems } from "./dbActions.js";

import crypto from "crypto";
const OwnerId = crypto.randomUUID();
const StoreId = crypto.randomUUID();
console.log("Start seed");

await deleteAllItems("webCartDB", "owner");
await deleteAllItems("webCartDB", "product");
await deleteAllItems("webCartDB", "customer");

await createItems("webCartDB", "owner", owners(OwnerId));
await createItems("webCartDB", "owner", stores(StoreId, OwnerId));
await createItems("webCartDB", "product", categories(StoreId));
await createItems("webCartDB", "product", products(StoreId));
