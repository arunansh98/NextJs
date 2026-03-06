import { users } from "@/lib/users";

export async function GET(request, context) {
  const params = await context.params;
  const id = Number(params.id);

  const user = users.users.find((item) => item.id === id);

  return Response.json(user);
}

export async function PUT(request, context) {
  const params = await context.params;
  const id = Number(params.id);

  const body = await request.json();

  const userIndex = users.users.findIndex((user) => user.id === id);

  users.users[userIndex] = {
    ...users.users[userIndex],
    ...body,
  };

  return Response.json(users.users[userIndex]);
}

export async function DELETE(request, context) {
  const params = await context.params;
  const id = Number(params.id);

  const userIndex = users.users.findIndex((user) => user.id === id);

  let message = "";
  if(userIndex !== -1){
    users.users.splice(userIndex, 1);
    message = "deleted";
  }
  else {
    message = "User to be deleted not found !"
  }
  
  return Response.json(message);

} 
