import mysql from "mysql2/promise";



export async function connectDB() {
  try{
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vishu",
    database: "mydb",
  });
  return db;
  }catch(error){
    console.log("database conn failed", error.message)

  }

}