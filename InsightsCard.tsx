import React from 'react';

interface InsightsCardProps {
  percentage: number;
  label: string;
}

const InsightsCard: React.FC<InsightsCardProps> = ({ percentage, label }) => {
  return (
    <div className="card h-full">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Key Insights & Feedback</h3>
      
      <div className="flex flex-col items-center mb-4">
        <span className="text-3xl font-bold mb-1">{percentage}%</span>
        <span className="text-sm text-gray-500">{label}</span>
      </div>
      
      <div className="bg-gray-100 p-3 rounded-md mb-3">
        <h4 className="text-xs uppercase font-medium text-gray-500 mb-2">Feedback</h4>
        <p className="text-sm">Franchisees are requesting more detailed training materials.</p>
      </div>
      
      <button className="btn btn-outline w-full">See Performance</button>
    </div>
  );
};

export default InsightsCard;