import React from "react";
import s from "./NotFound.module.css";
import Loop from "../../assets/img/Loop.png";
import Image from "next/image";

export const NotFound = () => {
  return (
    <div className={s.center}>
      <div className={s.wrap}>
        <Image src={Loop} alt="Loop" className={s.loop} />
        <h3 className={s.title}>Мы никого не нашли</h3>
        <span className={s.text}>Попробуй скорректировать запрос</span>
      </div>
    </div>
  );
};
