import SKeletonCardList from '@/components/SkeletonCardList';
import React from 'react';

const TagsLoading = () => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        Tag: <span className="blue_gradient">tag</span>
      </h1>
      <p className="desc text-left mt-4">
        Check out all posts with tag:
        <span className="blue_gradient font-semibold">tag</span>
      </p>
      <SKeletonCardList />
    </section>
  );
};

export default TagsLoading;
