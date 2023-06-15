import React from 'react';
import PromptCard, { PromptProps } from './PromptCard';

type PromptCardListProps = {
  data: PromptProps[];
  handleTagClick: () => void;
};

const PromptCardList = ({ data, handleTagClick }: PromptCardListProps) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => (
        <PromptCard key={prompt._id} />
      ))}
    </div>
  );
};

export default PromptCardList;
