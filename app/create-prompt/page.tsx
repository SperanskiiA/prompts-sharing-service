'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@/components/Form';

const CreatePrompt = () => {
  const { data: session } = useSession();
  const [submit, setSubmit] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });
  const router = useRouter();

  useEffect(() => {
    //@ts-expect-error
    console.log(session._id);
  }, [session]);

  const createPrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
    console.log(session);
    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag.split(' '),
          //@ts-expect-error
          userId: session._id,
        }),
      });

      if (response.ok) router.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setSubmit(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submit={submit}
      onSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
