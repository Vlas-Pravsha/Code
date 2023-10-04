import React from "react";
import { User } from "../UserList";
import s from "./User.module.css";

const User = ({ photo, name, position, id }: User) => {
  return (
    <div className={s.user}>
      <div className={s.wrap}>
        <img
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
