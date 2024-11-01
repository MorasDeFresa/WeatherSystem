import { testConnection, syncDataBase } from "@/controllers/DBConnection";
import { NextResponse } from "next/server";
import { headers } from 'next/headers';
const {CreateInitialData} = require("@/controllers/CreateInitialData")

const validateApiKey = (apiKey) => {
  const VALID_API_KEY = process.env.API_KEY;
  return apiKey === VALID_API_KEY;
};


export const GET = async (req) => {
  try {
    const headersList = await headers();
    const apiKey = headersList.get('x-api-key');
    
    if (!apiKey) {
      return NextResponse.json(
        { message: 'API key no proporcionada' },
        { status: 401 }
      );
    }
    if (!validateApiKey(apiKey)) {
      return NextResponse.json(
        { message: 'API key inválida' },
        { status: 403 }
      );
    }
    const response = await testConnection();
    const response2 = await syncDataBase();
    CreateInitialData();
    return NextResponse.json({ message: response + response2 }, { status: 200 });
  } catch (error) {
    console.log(error?.message);
    
    return NextResponse.json({ message: error?.message }, { status: 400 });
  }
};


