"use client";
import Link from "next/link";
import React from "react";
import User from "./User/User";
import s from "./UserList.module.css";

interface UserListProps {
  usersData: UserItem[];
}
export interface UserItem {
  photo: string;
  name: string;
  position: string;
  id: number;
  email: string;
  position_id: number;
  filteredUsers: UserItem[];
}

const UserList = ({ usersData }: UserListProps) => {
  return (
    <div className={s.wrapper}>
      {usersData.map((item: UserItem) => (
        <Link href={`/about/${item.id}`} key={item.id}>
          <User {...item} />
        </Link>
      ))}
    </div>
  );
};
export default UserList;
