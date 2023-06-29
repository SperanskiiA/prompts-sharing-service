import SkeletonCardList from '@/components/SkeletonCardList';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const ProfileLoading = () => {
  return (
    <section className="w-full">
      <h1 className="head_text text-center">
        <span className="blue_gradient">Profile</span>
      </h1>
      <Skeleton className="mt-4 w-1/2 bg-slate-300 h-4" />
      <SkeletonCardList />
    </section>
  );
};

export default ProfileLoading;
