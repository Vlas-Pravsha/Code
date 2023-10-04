import { getData } from "@/api/getData";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const users = await getData();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json({ data: "Hello", users });
}
