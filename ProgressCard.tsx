import React from 'react';
import CircularProgress from './CircularProgress';

interface ProgressCardProps {
  title: string;
  percentage: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ title, percentage }) => {
  return (
    <div className="card h-full">
      <h3 className="text-sm font-medium text-gray-700 mb-4">{title}</h3>
      <div className="flex items-center justify-center pt-2">
        <CircularProgress percentage={percentage} />
      </div>
    </div>
  );
};

export default ProgressCard;