"use client";
import { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";
import { User } from "../UsersPage/userList/UserList";
import s from "./Input.module.css";

interface InputProps {
  placeholder?: string;
  searchValue?: string;
  onChangeSearchValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  usersData: User[];
  handleSelectedOptionChange: (value: string) => void;
}

export const Input = ({
  placeholder,
  searchValue,
  onChangeSearchValue,
  handleSelectedOptionChange,
}: InputProps) => {
  const [checked, setChecked] = useState(false);

  const toggle = () => {
    setChecked(!checked);
  };

  return (
    <div className={s.wrap}>
      <div className={s.search}></div>
      <input
        type="text"
        className={s.input}
        placeholder={placeholder}
        onChange={onChangeSearchValue}
        value={searchValue}
      />
      {checked ? (
        <>
          <div onClick={toggle} className={s.list}></div>
          <Modal
            toggle={toggle}
            handleSelectedOptionChange={handleSelectedOptionChange}
          />
        </>
      ) : (
        <div onClick={toggle} className={s.list}></div>
      )}
    </div>
  );
};
