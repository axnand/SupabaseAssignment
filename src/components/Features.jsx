import React from 'react';

const features = [
  {
    name: 'Feature One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Feature Two',
    description: 'Pellentesque efficitur nulla nec dapibus lacinia.',
  },
  {
    name: 'Feature Three',
    description: 'Suspendisse potenti. Phasellus non quam vel turpis aliquet fermentum.',
  },
];

const Features = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            All the tools you need
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide a wide range of tools to help you build your application faster.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <p className="text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
