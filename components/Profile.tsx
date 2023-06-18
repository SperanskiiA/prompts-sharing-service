import React from 'react';
import PromptCard, { PromptProps } from './PromptCard';
import PromptCardList from './PromptCardList';

type ProfileProps = {
  name: string;
  desc: string;
  data: PromptProps[];
  handleEdit: () => void;
  handleDelete: () => void;
};

const Profile = ({
  name,
  desc,
  data,
  handleDelete,
  handleEdit,
}: ProfileProps) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="mt-4 desc text-left">{desc}</p>
      <PromptCardList
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </section>
  );
};

export default Profile;
