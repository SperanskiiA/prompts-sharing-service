import React from 'react';
import PromptCard, { PromptProps } from './PromptCard';

type PromptCardListProps = {
  data: PromptProps[];
  handleTagClick?: (tag: string) => void;
  handleEdit?: () => void;
  handleDelete?: () => void;
};

const PromptCardList = ({
  data,
  handleTagClick,
  handleDelete,
  handleEdit,
}: PromptCardListProps) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        //@ts-ignore
        <PromptCard
          key={post._id}
          handleTagClick={() => handleTagClick && handleTagClick(post._id)}
          handleDelete={() => handleDelete && handleDelete()}
          handleEdit={() => handleEdit && handleEdit()}
          post={post}
        />
      ))}
    </div>
  );
};

export default PromptCardList;
