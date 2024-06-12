import getAllUsers from "@/lib/getAllUsers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User page",
  description: "show all users availabe",
};

export default async function UsersPage() {
  const usersData: Promise<> = await getAllUsers();

  console.log(usersData);

  return (
    <div>
      <h1>All users page</h1>
    </div>
  );
}
