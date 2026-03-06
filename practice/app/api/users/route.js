import { users } from "@/lib/users";

export async function GET() {
  return Response.json(users);
};

// export async function GET()