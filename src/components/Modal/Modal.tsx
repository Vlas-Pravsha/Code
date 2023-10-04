"use client";
import React, { useState } from "react";
import { RadioInput } from "../Custom/RadioInput/RadioInput";
import { User } from "../UsersPage/userList/UserList";
import s from "./Modal.module.css";

const data = [
  {
    value: "По алфавиту",
    id: 1,
  },
  {
    value: "По дню рождения",
    id: 2,
  },
];

interface ModalProps {
  toggle: () => void;
  handleSelectedOptionChange: (value: string) => void; // Pass the selected option back to the parent component
}

export const Modal = ({ toggle, handleSelectedOptionChange }: ModalProps) => {
  const [selectedOption, setSelectedOption] = useState("По алфавиту");

  const handleOptionChange = (value: string): void => {
    setSelectedOption(value);
  };

  function handle() {
    handleSelectedOptionChange(selectedOption); // Pass the selected option to the parent
    toggle();
  }

  return (
    <div className={s.modal}>
      <div className={s.overlay} onClick={handle}></div>
      <div className={s.wrap}>
        <div className={s.wrapTitle}>
          <h2 className={s.title}>Сортировка</h2>
          <svg
            onClick={handle}
            className={s.svgClose}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 16 16"
            fill="none"
          >
            {/* ... Your SVG path here ... */}
          </svg>
        </div>
        <RadioInput
          data={data}
          selectedValue={selectedOption}
          onChange={handleOptionChange}
        />
      </div>
    </div>
  );
};
