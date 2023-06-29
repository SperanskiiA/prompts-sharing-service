import Feed from '@/components/Feed';
import React from 'react';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Dive into <br className="max-md:hidden" />
        <span className="blue_gradient text-center">
          AI-Powered Prompt- <br className="max-md:hidden" /> Ocean{' '}
        </span>
      </h1>
      <p className="desc text-center">
        Prompt Ocean is a beautiful tool to explore and share AI-powered prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
