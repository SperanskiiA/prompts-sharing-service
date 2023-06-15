'use client';

import { useEffect, useState } from 'react';
import PromptCard from './PromptCard';
import PromptCardList from './PromptCardList';

const Feed = () => {
  const [prompts, setPrompts] = useState([]);
  const [searchQuery, setQuery] = useState('');

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPrompts(data);
    };
    fetchPrompts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="What U R looking for?"
          value={searchQuery}
          onChange={(e) => setQuery(e.target.value)}
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={prompts ? prompts : []}
        handleTagClick={() => console.log('tag was clicked')}
      />
    </section>
  );
};

export default Feed;
