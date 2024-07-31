"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-zinc-900 text-zinc-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
              
              {/* Card 1 */}
              <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full dark:bg-zinc-800 bg-slate-300 lg:min-h-[300px] sm:h-[200px] flex flex-col justify-between p-4"
                className=""
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                  <div className="flex-1">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] dark:text-white text-indigo-800">
                      DataBases
                    </h2>
                    <p className="mt-4 text-left text-base/6 dark:text-neutral-200 text-zinc-600">
                      Every project is a full Postgres database, the world's most trusted relational database.
                    </p>
                  </div>
                  <div className="">
                  <img
                    src="/cardimg/postgresql.svg"
                    width={175}
                    height={175}
                    alt="Postgres logo"
                    className="mt-4 lg:mt-0 lg:ml-4 flex-shrink-0 object-contain grayscale filter "
                  />
                  </div>
                </div>
              </WobbleCard>
              
              {/* Card 2 */}
              <WobbleCard
                containerClassName="col-span-1 min-h-[300px] dark:bg-zinc-800 bg-slate-300 flex flex-col justify-between p-4"
                className=""
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                  <div className="flex-1">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] dark:text-white text-indigo-800">
                      Authentication
                    </h2>
                    <p className="mt-4 text-left text-base/6 dark:text-neutral-200 text-zinc-600">
                      Add user sign-ups and logins, securing your data with Row Level Security.
                    </p>
                    </div>
                    <div>
                    <img
                    src="/cardimg/safe-user.svg"
                    width={100}
                    height={100}
                    alt="Postgres logo"
                    className="mt-4 lg:mt-0 lg:ml-4 flex-shrink-0 object-contain grayscale filter"
                  />
                  </div>
                </div>
              </WobbleCard>
              
              {/* Card 3 */}
              <WobbleCard
                containerClassName="col-span-1 dark:bg-zinc-800 bg-slate-300 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] flex flex-col justify-between p-4"
                className=""
              >
                
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                  <div className="flex-1">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] dark:text-white text-indigo-800">
                    Edge Function
                    </h2>
                    <p className="mt-4 text-left text-base/6 dark:text-neutral-200 text-zinc-600">
                    Easily write custom code without deploying or scaling servers.
                    </p>
                    </div>
                    <div>
                    <img
                    src="/cardimg/safe-user.svg"
                    width={100}
                    height={100}
                    alt="Postgres logo"
                    className="mt-4 lg:mt-0 lg:ml-4 flex-shrink-0 object-contain grayscale filter"
                  />
                  </div>
                </div>
              </WobbleCard>
              
              {/* Card 4 */}
              
              <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full dark:bg-zinc-800 bg-slate-300 lg:min-h-[300px] sm:h-[200px] flex flex-col justify-between p-4"
                className=""
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                  <div className="flex-1">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] dark:text-white text-indigo-800">
                    Storage
                    </h2>
                    <p className="mt-4 text-left text-base/6 dark:text-neutral-200 text-zinc-600">
                    Store, organize, and serve large files, from video to images.
                    </p>
                  </div>
                  <img
                    src="/cardimg/storage.svg"
                    width={175}
                    height={175}
                    alt="Postgres logo"
                    className="mt-4 lg:mt-0 lg:ml-4 flex-shrink-0 object-contain grayscale filter"
                  />
                </div>
              </WobbleCard>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
