'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@/components/Profile';
import { PromptProps } from '@/components/PromptCard';

const ProfilePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [posts, setPosts] = useState([]);

  const handleEdit = (post: PromptProps) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  //   const handleTagClick = (tag: string) => {
  //     router.push(`/tag/${tag}`);
  //   };

  const handleDelete = async (post: PromptProps) => {
    const confirmed = confirm(
      'Are you sure you want to delete this prompt? Keep in mind prompt will be deleted permanently.'
    );

    if (confirmed) {
      try {
        await fetch(`/api/prompt/${post._id}`, {
          method: 'DELETE',
        });

        const filteredPosts = posts.filter(
          (p: PromptProps) => p._id !== post._id
        );

        setPosts(filteredPosts);
      } catch (error) {
        console.warn(error);
      }
    }
  };

  useEffect(() => {
    const fetchPrompts = async () => {
      //@ts-expect-error
      const response = await fetch(`/api/users/${session?._id}/posts`);
      const data = await response.json();

      setPosts(data);
    };
    //@ts-expect-error
    if (session?._id) fetchPrompts();
  }, [session]);

  return (
    <div>
      <Profile
        name="My"
        desc="Welcome to your personalized profile page!"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default ProfilePage;
