import { testConnection } from "@/controllers/DBConnection";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = await testConnection();
    return NextResponse.json({ message: response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error?.message }, { status: 400 });
  }
};
