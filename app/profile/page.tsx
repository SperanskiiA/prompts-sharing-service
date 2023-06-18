'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@/components/Profile';

const ProfilePage = () => {
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  const handleEdit = () => {};

  const handleDelete = async () => {};

  useEffect(() => {
    const fetchPrompts = async () => {
      //@ts-expect-error
      const response = await fetch(`/api/users/${session?._id}/posts`);
      const data = await response.json();

      setPosts(data);
    };
    fetchPrompts();
  }, []);

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
