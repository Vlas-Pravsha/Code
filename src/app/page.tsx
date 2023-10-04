import { getData } from "@/api/getData";
import UsersPage from "@/components/UsersPage/UsersPage";
import React from "react";

const categoryData = [
  "All",
  "Designer",
  "Security",
  "Content manager",
  "Lawyer",
];
export default async function Home() {
  const usersData = await getData();

  return (
    <main>
      <div className="container">
        <UsersPage usersData={usersData} categoryData={categoryData} />
      </div>
    </main>
  );
}
