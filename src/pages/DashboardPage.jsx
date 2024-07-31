// pages/Dashboard.js

import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen dark:bg-zinc-900 bg-gray-100 dark:text-white hover:text-zinc-900 ">

      <aside className={`fixed inset-y-0 left-0 w-64 p-4 border-r border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden absolute top-4 left-4 text-gray-600 dark:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <nav className="space-y-4">
  
          <div>
            <h2 className="text-lg font-semibold">Projects</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm dark:text-indigo-400 text-zinc-400 hover:dark:text-indigo-700 hover:text-zinc-900 ">All projects</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Organizations</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm dark:text-indigo-400 text-zinc-400 hover:dark:text-indigo-700 hover:text-zinc-900 ">axnand's Org</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Account</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm dark:text-indigo-400 text-zinc-400 hover:dark:text-indigo-700 hover:text-zinc-900 ">Preferences</a></li>
              <li><a href="#" className="text-sm dark:text-indigo-400 text-zinc-400 hover:dark:text-indigo-700 hover:text-zinc-900 ">Access Tokens</a></li>
              <li><a href="#" className="text-sm dark:text-indigo-400 text-zinc-400 hover:dark:text-indigo-700 hover:text-zinc-900 ">Security</a></li>
              <li><a href="#" className="text-sm dark:text-indigo-400 text-zinc-400 hover:dark:text-indigo-700 hover:text-zinc-900 ">Audit Logs</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Documentation</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm dark:text-indigo-400 text-zinc-400 hover:dark:text-indigo-700 hover:text-zinc-900 ">Guides</a></li>
              <li><a href="#" className="text-sm dark:text-indigo-400 text-zinc-400 hover:dark:text-indigo-700 hover:text-zinc-900 ">API Reference</a></li>
            </ul>
          </div>
          <div>
            <a href="#" className="text-sm dark:text-indigo-400 text-zinc-400 hover:dark:text-indigo-700 hover:text-zinc-900 ">Log out</a>
          </div>
        </nav>
      </aside>

      
      <main className="flex-1 p-6 ml-0 ">
  <header className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0">
    <h2 className="text-xl font-semibold">Projects</h2>
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <Button variant="default" className="w-full sm:w-auto">New project</Button>
      <Button variant="secondary" className="w-full sm:w-auto">New organization</Button>
      <Input type="search" placeholder="Search for a project" className="w-full sm:w-64 bg-gray-800 border border-gray-700" />
      <Button variant="secondary" className="w-full sm:w-auto">
        <FilterIcon className="h-5 w-5" />
      </Button>
    </div>
  </header>
  <section className="flex flex-col items-center justify-center lg:h-full">
    <h3 className="text-2xl font-semibold mb-2">No projects</h3>
    <p className="text-gray-400 mb-4">Get started by creating a new project.</p>
    <Button variant="default">+ New Project</Button>
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

export default DashboardPage;

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
