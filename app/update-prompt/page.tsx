'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Form from '@/components/Form';

const UpdatePrompt = () => {
  const [submit, setSubmit] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });
  const router = useRouter();
  const params = useSearchParams();
  const promptId = params.get('id');

  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(`/api/prompt/${promptId}`);
      const data = await res.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) getPost();
  }, [promptId]);

  const updatePrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);

    if (!promptId) return alert('Prompt not found');
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag.split(' '),
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
      type="Edit"
      post={post}
      setPost={setPost}
      submit={submit}
      onSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
