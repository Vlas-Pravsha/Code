import React from "react";
import Skeleton from "react-loading-skeleton";
import s from "./UserSkeleton.module.css";

interface UserSkeletonProps {
  count: number;
}
export const UserSkeleton = ({ count }: UserSkeletonProps) => {
  const skeletonItems = Array(count)
    .fill(0)
    .map((_, i) => (
      <div className={s.wrapper} key={i}>
        <div>
          <Skeleton circle width={70} height={70} />
        </div>
        <div>
          <Skeleton width={200} height={10} />
          <Skeleton width={100} height={8} />
        </div>
      </div>
    ));

  return <>{skeletonItems}</>;
};
