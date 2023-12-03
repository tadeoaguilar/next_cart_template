import { NextResponse } from "next/server";
import { fetchAllEntries } from "../lib/cosmosDB";
import { Product } from "../lib/databaseStructure";

export async function GET() {

    const data = await fetchAllEntries<Product>("PRODUCT","product");
    console.log(data); 


return NextResponse.json(data);
}