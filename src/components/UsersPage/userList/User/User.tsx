import Image from "next/image";
import React from "react";
import { UserItem } from "../UserList";
import s from "./User.module.css";

const User = ({ photo, name, position, id }: UserItem) => {
  return (
    <div className={s.user}>
      <div className={s.wrap}>
        <Image
          className={s.img}
          src={photo}
          width="50"
          height="50"
          alt="picture"
        />
        <div className={s.textWrap}>
          <span className={s.name}>{name}</span>
          <span className={s.position}>{position}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
