'use client';

import { useEffect, useState } from 'react';

import PromptCardList from './PromptCardList';
import { PromptProps } from './PromptCard';

import SkeletonCardList from './SkeletonCardList';

const Feed = () => {
  const [prompts, setPrompts] = useState<PromptProps[]>([]);
  const [searchQuery, setQuery] = useState('');

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPrompts(data);
    };
    fetchPrompts();
  }, []);

  const filteredPrompts = prompts
    ? prompts.filter(({ tag, prompt }) => {
        const concated = tag.join(' ').concat(prompt);
        return concated.toLowerCase().includes(searchQuery.toLowerCase());
      })
    : [];

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="type your query here..."
          value={searchQuery}
          onChange={(e) => setQuery(e.target.value)}
          className="search_input peer"
        />
      </form>
      {filteredPrompts.length ? (
        <PromptCardList data={filteredPrompts} />
      ) : (
        <SkeletonCardList />
      )}
    </section>
  );
};

export default Feed;
