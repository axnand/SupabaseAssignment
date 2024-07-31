import React from 'react';
import Hero from '../components/Hero';
import { BackgroundBeams } from '../ui/BackgroundBeams';
import { WobbleCardDemo } from '../components/Cards';
import { InfiniteMovingCardsDemo } from '../components/MovingCards';


const HomePage = () => {

  const imageSources = {
    mozilla: '../../public/logo/mozilla.svg',
    password: '../../public/logo/1password.svg',
    pwc: '../../public/logo/pwc.svg',
    pika: '../../public/logo/pika.svg',
    humata: '../../public/logo/humata.svg',
    krea: '../../public/logo/krea.svg',
    udio: '../../public/logo/udio.svg',
    langchain: '../../public/logo/langchain.svg',
    resend: '../../public/logo/resend.svg',
    loops: '../../public/logo/loops.svg',
    mobbin: '../../public/logo/mobbin.svg',
    gopuff: '../../public/logo/gopuff.svg',
    chatbase: '../../public/logo/chatbase.svg',
    betashares: '../../public/logo/betashares.svg',
  };

  return (
    <div className="relative">
      <BackgroundBeams className="z-0" />
    <div className="bg-gray-100 dark:bg-zinc-900 text-zinc-900 dark:text-gray-100 ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative ">
        <Hero/>
      </div>
      </div>
      <div className="py-12 pb:14 lg:pb-24">
        <div className="max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-5 lg:px-12">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-5 lg:gap-x-8 lg:gap-y-7 overflow-hidden">
            {Object.entries(imageSources).map(([alt, src], index) => (
              <div key={index}>
                <img
                  alt={alt}
                  fetchpriority="high"
                  width="32"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  className="w-16 lg:w-24 max-h-4 lg:max-h-5"
                  style={{ color: 'transparent' }}
                  srcSet={`${src}?w=32&q=75 1x, ${src}?w=64&q=75 2x`}
                  src={`${src}?w=64&q=75`}
                />
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
      <div className="bg-gray-100 dark:bg-zinc-900 text-zinc-900 dark:text-gray-100 ">
      <WobbleCardDemo/>
      <InfiniteMovingCardsDemo />
      </div>
    </div>
    
    </div>
  );
};

export default HomePage;
