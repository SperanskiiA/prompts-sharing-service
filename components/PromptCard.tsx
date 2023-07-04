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

  handleEdit?: (post: PromptProps) => void;
  handleDelete?: (post: PromptProps) => void;
};

const PromptCard = ({
  post,

  handleDelete,
  handleEdit,
}: PromptCardProps) => {
  const [copied, setCopied] = useState('');
  const pathName = usePathname();
  const { data: session } = useSession();
  const router = useRouter();

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(''), 3500);
  };

  const handleTagClick = (tag: string) => {
    router.push(`/tag/${tag}`);
  };

  const handleUserClick = (userName: string) => {
    const mail = userName.split('@');
    console.log(mail);
    router.push(`/profile/${mail[0]}`);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-around items-start gap-4">
        <div
          className="flex flex-1 justify-start items-center gap-3 cursor-pointer"
          onClick={() => handleUserClick(post.creator.email)}
        >
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
      <div className="flex flex-raw gap-2 flex-wrap">
        {post.tag.map((item) => (
          <span
            onClick={() => handleTagClick(item)}
            className="font-inter text-sm blue_gradient cursor-pointer font-semibold"
          >
            {item[0] === '#' ? item : '#' + item}
          </span>
        ))}
      </div>

      {
        //@ts-expect-error
        session?._id === post.creator._id && pathName === '/profile' && (
          <div className="flex justify-end items-center gap-5 mt-5 border-t border-gray-200 pt-3">
            <p
              className="font-inter text-sm green_gradient cursor-pointer"
              onClick={() => handleEdit && handleEdit(post)}
            >
              Edit
            </p>
            <p
              className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={() => handleDelete && handleDelete(post)}
            >
              Delete
            </p>
          </div>
        )
      }
    </div>
  );
};

export default PromptCard;
