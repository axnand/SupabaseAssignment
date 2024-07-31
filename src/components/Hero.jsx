import React from 'react';
import { TypewriterEffect } from '../ui/typewriter-effect';
import { BackgroundBeams } from '../ui/BackgroundBeams';

const Hero = () => {
  const words = [
    { text: 'Backend', className: 'text-indigo-600' }
  ];

  return (
    <>
    
    <div className="bg-gray-100 dark:bg-zinc-900 text-zinc-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 dark:text-indigo-400 uppercase">Supabase</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Build your own <TypewriterEffect words={words} className="inline mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl text-indigo-600 dark:text-indigo-500" cursorClassName="my-cursor-class" />
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
            Start building faster with less code.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-sm text-gray-500 dark:text-gray-300">
            Supabase is an open-source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="bg-indigo-500 hover:bg-indigo-900 transition text-white px-6 py-3 rounded-md text-lg font-medium ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Hero;
