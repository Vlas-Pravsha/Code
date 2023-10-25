"use client";
import React, { useEffect, useMemo, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";
import { UserSkeleton } from "../UserSkeleton/UserSkeleton";
import { Category } from "./Category/Category";
import UserList, { UserItem } from "./userList/UserList";
import "react-loading-skeleton/dist/skeleton.css";

interface UsersPageProps {
  usersData: UserItem[];
  categoryData: string[];
}

const UsersPage = ({ usersData, categoryData }: UsersPageProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("По алфавиту");

  const filteredUsers = useMemo(() => {
    let searchedUsers = [...usersData];

    searchedUsers = searchedUsers.filter((user) => {
      const fullName = user.name + user.email;
      return fullName.toLowerCase().includes(searchValue.toLowerCase());
    });

    if (categoryId !== null && categoryId !== 0) {
      const selectedCategory = categoryData[categoryId];
      searchedUsers = searchedUsers.filter(
        (user) => user.position === selectedCategory
      );
    }

    let newData = [...searchedUsers];
    if (selectedOption === "По алфавиту") {
      newData = newData.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
    } else {
      newData = newData.sort((a, b) => a.position_id - b.position_id);
    }

    return newData;
  }, [usersData, searchValue, categoryId, categoryData, selectedOption]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleSelectedOptionChange = (value: string) => {
    setSelectedOption(value);
  };
  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleCategoryClick = (i: number) => {
    setCategoryId(i);
    setSearchValue("");
  };

  return (
    <div>
      <SkeletonTheme baseColor="#444" highlightColor="#444">
        <div>
          <Label>
            <Input
              handleSelectedOptionChange={handleSelectedOptionChange}
              usersData={filteredUsers}
              placeholder="Введи имя, тег, почту..."
              onChangeSearchValue={onChangeSearchValue}
              searchValue={searchValue}
            />
          </Label>
          <Category
            handleCategoryClick={handleCategoryClick}
            categories={categoryData}
            categoryId={categoryId}
          />
        </div>
        {isLoading ? (
          <UserSkeleton count={13} />
        ) : (
          <UserList usersData={filteredUsers} />
        )}
      </SkeletonTheme>
    </div>
  );
};

export default UsersPage;
