import React from 'react';

import SKeletonCard from './SkeletonCard';

const SkeletonCardList = () => {
  return (
    <div className="mt-16 prompt_layout">
      {[...Array(6)].map((index) => {
        return <SKeletonCard key={index + 11} />;
      })}
    </div>
  );
};

export default SkeletonCardList;
