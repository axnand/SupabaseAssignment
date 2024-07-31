// pages/pricing.js

import React from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const PricingPage = () => {
  return (

        <div className="flex min-h-screen bg-zinc-900 text-white">
          <aside className="w-64 p-4 border-r border-gray-700">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <nav className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold">Projects</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm">All projects</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Organizations</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm">axnand's Org</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Account</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm">Preferences</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">Access Tokens</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">Security</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">Audit Logs</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Documentation</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm">Guides</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">API Reference</a>
                  </li>
                </ul>
              </div>
              <div>
                <a href="#" className="text-sm">Log out</a>
              </div>
            </nav>
          </aside>
          <main className="flex-1 p-6">
            <header className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Projects</h2>
              <div className="flex items-center space-x-4">
                <Button variant="primary">New project</Button>
                <Button variant="secondary">New organization</Button>
                <Input type="search" placeholder="Search for a project" className="w-64 bg-gray-800 border border-gray-700" />
                <Button variant="secondary">
                  <FilterIcon className="h-5 w-5" />
                </Button>
              </div>
            </header>
            <section className="flex flex-col items-center justify-center h-full">
              <h3 className="text-2xl font-semibold mb-2">No projects</h3>
              <p className="text-gray-400 mb-4">Get started by creating a new project.</p>
              <Button variant="primary">+ New Project</Button>
            </section>
          </main>
          <div className="absolute top-4 right-4 flex space-x-4">
            <Button variant="secondary">Feedback</Button>
            <Button variant="secondary">
              <BellIcon className="h-5 w-5" />
            </Button>
            <Button variant="secondary">
              <UserIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
     
  );
};

export default PricingPage;

function BellIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function FilterIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
