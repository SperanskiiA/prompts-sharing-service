import React from 'react';
import PromptCard, { PromptProps } from './PromptCard';

type PromptCardListProps = {
  data: PromptProps[];

  handleEdit?: (post: PromptProps) => void;
  handleDelete?: (post: PromptProps) => void;
};

const PromptCardList = ({
  data,

  handleDelete,
  handleEdit,
}: PromptCardListProps) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        //@ts-ignore
        <PromptCard
          key={post._id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          post={post}
        />
      ))}
    </div>
  );
};

export default PromptCardList;
