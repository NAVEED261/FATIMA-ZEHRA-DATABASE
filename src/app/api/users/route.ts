// import { db,sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//     // Method one api check by sql
//     // const users = await sql`SELECT * FROM users;`;
//     // Method two api check by db with sql
//     let client=await db.connect()
//     let users=await client.query(`SELECT * FROM users;`)

//     return NextResponse.json(users.rows);
//   }
// api check by drizzle query
import { db, UsersTable } from "@/app/lib/drizzle";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  let users = await db.select().from(UsersTable);

  return NextResponse.json(users);
}

export async function POST(request: Request) {
  let body = await request.json();
  let users = await db.select().from(UsersTable);
  await db.insert(UsersTable).values(body);

  return NextResponse.json(users);
}
export async function PUT(request: Request) {
    let body = await request.json();
    let users = await db.select().from(UsersTable);
    await db.update(UsersTable)
  .set(body)
  .where(eq(UsersTable._id,body._id));

  
    return NextResponse.json(users);
  }
