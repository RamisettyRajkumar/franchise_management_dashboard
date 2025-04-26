import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="hidden md:flex md:flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto">
        <main>
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;