import { NextResponse } from "next/server";
import { data, orderSchema } from "../lib/databaseStructure";

export async function GET() {

    const order = orderSchema.parse(data);
    console.log(order); 


return NextResponse.json(order);
}