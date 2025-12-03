export const runtime = "nodejs";
import { connectDB } from "../../db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const data = await req.formData();

    const name = data.get("name");
    const address = data.get("address");
    const city = data.get("city");
    const state = data.get("state");
    const contact = data.get("contact");
    const email = data.get("email_id");
    const image = data.get("image");

    if (!image || typeof image === "string") {
      return NextResponse.json(
        { message: "Image not received!" },
        { status: 400 }
      );
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const imageName = Date.now() + "-" + image.name;
    // const imgPath = path.join(uploadDir, imageName);
    // fs.writeFileSync(imgPath, buffer);

    const uploadDir = path.join(process.cwd(), "public/schoolImages");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    const filePath = path.join(uploadDir, imageName); // this MUST be string

    fs.writeFileSync(filePath, buffer);

    console.log("image", image);
    console.log("Image name:", image.name);
    console.log("Upload path:", uploadDir);
    console.log("Final path:", filePath);
    const db = await connectDB();

    // Check if email already existsshu
    const [existing] = await db.execute(
      "SELECT * FROM school WHERE email_id = ?",
      [email]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        { message: "Email already exists. Use a different email." },
        { status: 400 }
      );
    }

    await db.execute(
      "INSERT INTO school(name, address, city, state, contact, email_id, image) VALUES(?,?,?,?,?,?,?)",
      [name, address, city, state, contact, email, imageName]
    );

    return NextResponse.json({ message: "School Added!" });
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
