import React from 'react';

interface StatCardProps {
  title: string;
  value: number | string;
  change?: {
    value: string;
    positive: boolean;
  };
  showAvatars?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, showAvatars = false }) => {
  return (
    <div className="card h-full">
      <h3 className="text-sm font-medium text-gray-700 mb-2">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold">{value}</span>
        {change && (
          <span className={`progress-pill ${change.positive ? 'positive' : 'neutral'}`}>
            {change.value}
          </span>
        )}
      </div>
      
      {showAvatars && (
        <div className="mt-4">
          <div className="flex -space-x-2">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="User avatar"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://randomuser.me/api/portraits/men/41.jpg"
              alt="User avatar"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://randomuser.me/api/portraits/women/43.jpg"
              alt="User avatar"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://randomuser.me/api/portraits/men/54.jpg"
              alt="User avatar"
            />
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white">
              <span className="text-xs font-medium text-gray-500">+3</span>
            </span>
          </div>
        </div>
      )}

      {/* Progress bar (only for Total Franchisees) */}
      {title === "Total Franchisees Onboard" && (
        <div className="mt-4 grid grid-cols-3 gap-1">
          <div className="h-2 bg-primary-500 rounded"></div>
          <div className="h-2 bg-primary-300 rounded"></div>
          <div className="h-2 bg-primary-100 rounded"></div>
        </div>
      )}
    </div>
  );
};

export default StatCard;