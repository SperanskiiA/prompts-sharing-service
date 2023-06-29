import React from 'react';
import PromptCard, { PromptProps } from './PromptCard';
import PromptCardList from './PromptCardList';

type ProfileProps = {
  name: string;
  desc: string;
  data: PromptProps[];
  handleEdit?: (post: PromptProps) => void;
  handleDelete?: (post: PromptProps) => void;
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
      <h1 className="head_text text-center">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <div className="w-full flex items-center justify-center">
        <p className="mt-4 desc text-center">{desc}</p>
      </div>
      <PromptCardList
        data={data}
        handleDelete={handleDelete && handleDelete}
        handleEdit={handleEdit && handleEdit}
      />
    </section>
  );
};

export default Profile;
