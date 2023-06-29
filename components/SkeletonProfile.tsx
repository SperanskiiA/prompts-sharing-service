import React from 'react';
import { Skeleton } from './ui/skeleton';
import SkeletonCardList from './SkeletonCardList';

const SkeletonProfile = () => {
  return (
    <section className="w-full">
      <h1 className="head_text text-center">
        <span className="blue_gradient">Load Profile ...</span>
      </h1>
      <div className="w-full flex items-center justify-center">
        <Skeleton className=" w-1/2 h-6 bg-slate-300 mt-4" />
      </div>
      <SkeletonCardList />
    </section>
  );
};

export default SkeletonProfile;
