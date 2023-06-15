'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

export type PromptProps = {
  _id: string;
  prompt: string;
  tag: string[];
};

type PromptCardProps = {
  prompt: PromptProps;
  handleTagClick: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
};

const PromptCard = ({
  prompt,
  handleTagClick,
  handleDelete,
  handleEdit,
}: PromptCardProps) => {
  return <></>;
};

export default PromptCard;
