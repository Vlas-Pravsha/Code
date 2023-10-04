"use client";
import React, { useState, useMemo } from "react";
import { User } from "../userList/UserList";
import s from "./Category.module.css";

interface CategoryProps {
  handleCategoryClick: (i: number) => void;
  categoryId: number;
  categories: string[];
}

export const Category = ({
  handleCategoryClick,
  categoryId,
  categories,
}: CategoryProps) => {
  return (
    <div className={s.categoriesWrap}>
      {categories.map((item, i) => (
        <div
          onClick={() => handleCategoryClick(i)}
          key={i}
          className={`${categoryId === i ? s.active : s.category}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
