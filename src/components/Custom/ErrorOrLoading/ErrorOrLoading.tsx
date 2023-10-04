import React from "react";
import s from "./ErrorOrLoading.module.css";

interface ProblemProps {
  children: React.ReactNode;
  type?: "error" | "loading";
}

export const ErrorOrLoading = ({ children, type }: ProblemProps) => {
  const problemType = type || "error";

  return (
    <div>
      <div className={`${s.wrap} ${s[problemType]}`}>
        <h2 className={s.title}>Поиск</h2>
        <div className={s.text}>{children}</div>
      </div>
    </div>
  );
};
