// components/ui/collapsible.js

import React, { useState } from 'react';

export const Collapsible = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isOpen, setIsOpen });
        }
        return child;
      })}
    </div>
  );
};

export const CollapsibleTrigger = ({ children, isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="collapsible-trigger flex items-center justify-between w-full px-4 py-2 dark:text-white text-zinc-90 text rounded"
    >
      {children}
      <ChevronRightIcon
        className={`h-5 w-5 transition-transform duration-200 ${
          isOpen ? 'rotate-90' : 'rotate-0'
        }`}
      />
    </button>
  );
};

export const CollapsibleContent = ({ children, isOpen }) => {
  return (
    <div
      className={`collapsible-content overflow-hidden bg-gray-200 dark:bg-zinc-900 rounded-2xl transition-max-height duration-500 ease-in-out ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}
    >
      {isOpen && <div className="p-4 ">{children}</div>}
    </div>
  );
};

const ChevronRightIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default { Collapsible, CollapsibleTrigger, CollapsibleContent };
