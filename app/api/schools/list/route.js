import { connectDB } from "../../db";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const db = await connectDB();
    const [rows] = await db.execute("SELECT * FROM school");

    return NextResponse.json({ school: rows });
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
