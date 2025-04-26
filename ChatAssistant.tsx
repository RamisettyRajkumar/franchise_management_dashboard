import React, { useState } from 'react';
import { SendHorizontal } from 'lucide-react';

const ChatAssistant: React.FC = () => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission - would be connected to a real backend
    console.log('Message submitted:', message);
    setMessage('');
  };
  
  return (
    <div className="card">
      <div className="flex items-center justify-center mb-4">
        <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M20 10H4V22H20V10Z" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
        <h3 className="text-xl font-medium">Welcome to the AI Chat Assistant</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Ask your question here..."
          className="w-full py-3 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button 
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-500"
        >
          <SendHorizontal size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatAssistant;