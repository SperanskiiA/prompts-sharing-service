'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

export type PromptProps = {
  _id: string;
  prompt: string;
  tag: string[];
  creator: {
    image: string;
    username: string;
    _id: string;
    email: string;
  };
};

type PromptCardProps = {
  post: PromptProps;
  handleTagClick?: (tag: string) => void;
  handleEdit?: () => void;
  handleDelete?: () => void;
};

const PromptCard = ({
  post,
  handleTagClick,
  handleDelete,
  handleEdit,
}: PromptCardProps) => {
  const [copied, setCopied] = useState('');
  console.log(post);

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(''), 3500);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-around items-start gap-4">
        <div className="flex flex-1 justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post?.creator?.image}
            alt={'user_image'}
            width={45}
            height={45}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-grey-900">
              {'@' + post.creator.username}
            </h3>
            <p className="font-inter text-sm text-grey-500">
              {post.creator.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? '/assets/icons/tick.svg'
                : '/assets/icons/copy.svg'
            }
            alt="copy-button"
            width={16}
            height={16}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm">{post.prompt}</p>
      <div className="flex flex-raw gap-2">
        {post.tag.map((item) => (
          <span
            onClick={() => handleTagClick && handleTagClick(item)}
            className="font-inter text-sm blue_gradient cursor-pointer font-semibold"
          >
            {item[0] === '#' ? item : '#' + item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PromptCard;
