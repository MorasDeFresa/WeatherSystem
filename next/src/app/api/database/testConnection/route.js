import { testConnection, syncDataBase } from "@/controllers/DBConnection";
import { NextResponse } from "next/server";
const {CreateInitialData} = require("@/controllers/CreateInitialData")

export const GET = async () => {
  try {
    const response = await testConnection();
    const response2 = await syncDataBase();
    CreateInitialData();
    return NextResponse.json({ message: response + response2 }, { status: 200 });
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({ message: error?.message }, { status: 400 });
  }
};


