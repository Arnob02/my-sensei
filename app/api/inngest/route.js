import { db } from "@/lib/prisma"; // ✅ Import the shared Prisma client

// Now you can use `db` as needed in this file
// Example:
export async function GET(req) {
  const users = await db.user.findMany();
  return Response.json(users);
}
