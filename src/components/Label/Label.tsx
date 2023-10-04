import React, { ReactNode } from "react";
import s from "./Label.module.css";
interface LabelProps {
  children: ReactNode;
}

export const Label = ({ children }: LabelProps) => {
  return (
    <label>
      <h1 className={s.title}>Поиск</h1>
      {children}
    </label>
  );
};
