'use client';
import { PromptProps } from '@/components/PromptCard';
import PromptCardList from '@/components/PromptCardList';
import SKeletonCard from '@/components/SkeletonCard';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const TagPage = ({ params: { tag } }: { params: { tag: string } }) => {
  const [filteredPosts, setFilteredPosts] = useState<PromptProps[]>([]);
  const router = useRouter();

  const handleTagClick = (tag: string) => {
    router.push(`/tag/${tag}`);
  };

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch('/api/prompt');
      const data: PromptProps[] = await response.json();
      const filtered = data.filter((prompt) => {
        return prompt.tag.includes(tag);
      });

      setFilteredPosts(filtered);
    };
    fetchPrompts();
  }, []);

  return (
    <section className="w-full">
      <h1 className="head_text text-center">
        Tag: <span className="blue_gradient">{tag}</span>
      </h1>
      <div className="w-full flex items-center justify-center">
        <p className="desc text-center mt-4">
          Check out all posts with tag:{' '}
          <span className="blue_gradient font-semibold">{tag}</span>
        </p>
      </div>
      <PromptCardList data={filteredPosts} />
    </section>
  );
};

export default TagPage;
