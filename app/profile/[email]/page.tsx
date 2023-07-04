'use client';
import Profile from '@/components/Profile';
import { PromptProps } from '@/components/PromptCard';
import SkeletonProfile from '@/components/SkeletonProfile';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type User = {
  _id: string;
  username: string;
  email: string;
  image: string;
};

const UserProfile = ({ params: { email } }: { params: { email: string } }) => {
  const [user, setUser] = useState<User>();
  const [posts, setPosts] = useState<PromptProps[]>([]);
  const { data: session } = useSession();
  const router = useRouter();
  const mail = email + '@gmail.com';

  useEffect(() => {
    //@ts-expect-error
    if (session?.email === mail) router.push('/profile');
    const fetchUser = async () => {
      const res = await fetch(`/api/users/user/${mail}`);
      const user = await res.json();

      setUser(user[0]);
    };

    const fetchPrompts = async () => {
      //@ts-expect-error
      const response = await fetch(`/api/users/${session?._id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (!user) fetchUser();
    if (user) fetchPrompts();
  }, [user]);

  console.log(user);
  const userName = user?.username
    ? `${user.username[0].toUpperCase()}${user.username.slice(
        1,
        user.username.length - 1
      )}`
    : '';
  return (
    <div>
      {user?.username ? (
        <Profile
          name={`${userName}'s `}
          desc={`You can reach all posts by ${user?.username} here!`}
          data={posts}
        />
      ) : (
        <SkeletonProfile />
      )}
    </div>
  );
};

export default UserProfile;
