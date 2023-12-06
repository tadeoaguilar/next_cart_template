import { NextResponse, NextRequest } from "next/server";
import { fetchAllEntries } from "@/app/lib/cosmosDB";
import { Product, Order,OrderDetail } from "@/app/lib/databaseStructure";


export async function GET(request: NextRequest ) {
    
    const data = await fetchAllEntries<Product>("PRODUCT","product");
    


return NextResponse.json(data)}