"use client";

import { useEffect, useState } from "react";

// async function fetchUsers() {
//   const response = await fetch("https://dummyjson.com/users");
//   if (!response.ok) {
//     throw new Error("Failed to fetch users...");
//   }
//   return response.json();
// }

// async function fetchUsersFromInternalAPI() {
//   const response = await fetch("http://localhost:3000/api/users");
//   if (!response.ok) {
//     throw new Error("Failed to fetch users...");
//   }
//   return response.json();
// }

export default function UsersPage() {
  //   const { users } = await fetchUsersFromInternalAPI();

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const json  = await response.json();
    setUsers(json.users);
  };

  const deleteUser = async () => {
    const userId = 2;
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method:"DELETE"
    });
    if(!response.ok){
        throw new Error(`Failed to delete user with user id ${userId}`);
    }
    const json = await response.json();
    fetchUsers();
    console.log({json});
  }

  const editUser = async () => {
    const userId = 4;
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: "PUT",
        body: JSON.stringify({
            name: "John Cena"
        })
    });
    const json = await response.json();
    if(!response.ok){
        throw new Error(`Failed to update user with user id ${userId}`);
    }
    fetchUsers();
    console.log({json});
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main
      style={{
        marginTop: "1rem",
      }}
    >
      Users:
      <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      </ul>
      <button onClick={deleteUser}>Delete User</button>
      <button onClick={editUser}>Edit User</button>
    </main>
  );
}
