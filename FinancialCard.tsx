import React from 'react';

interface FinancialCardProps {
  franchisees: number;
  change: string;
  target: string;
  current: string;
}

const FinancialCard: React.FC<FinancialCardProps> = ({ 
  franchisees, 
  change, 
  target, 
  current 
}) => {
  return (
    <div className="card h-full">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Financial Wellbeing</h3>
      
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-3xl font-bold">{franchisees}</span>
        <span className="progress-pill positive">{change}</span>
      </div>
      <div className="text-xs text-gray-500 mb-1">Total Franchisees</div>
      
      <div className="mt-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium">Target</span>
          <span className="font-medium">Current</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-semibold">{target}</span>
          <span className="text-xl font-semibold">{current}</span>
        </div>
      </div>
    </div>
  );
};

export default FinancialCard;