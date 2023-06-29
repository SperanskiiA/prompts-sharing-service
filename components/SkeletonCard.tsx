import React from 'react';
import { Skeleton } from './ui/skeleton';

const SKeletonCard = () => {
  return (
    <div className="prompt_card w-40">
      <div className="flex justify-around items-start gap-4 flex-col">
        <div className="flex flex-1 justify-start items-center gap-3 cursor-pointer">
          <Skeleton className="rounded-full object-contain  w-12 h-12 bg-slate-300" />

          <div className="flex flex-col">
            <Skeleton className="h-4 w-28 mb-1 bg-slate-300" />

            <Skeleton className="h-4 w-32 bg-slate-300" />
          </div>
        </div>
        <div className="my-4 w-full">
          <Skeleton className="h-4 w-60 my-1 bg-slate-300" />
          <Skeleton className="h-4 w-72 bg-slate-300" />
          <Skeleton className="h-4 w-52  my-1 bg-slate-300" />
        </div>

        <div className="flex flex-raw gap-4 justify-between w-full">
          {[...Array(5)].map((index) => (
            <Skeleton key={index} className="h-4 w-10 bg-slate-300" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SKeletonCard;
