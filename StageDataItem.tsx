import React from 'react';

interface StageDataItemProps {
  stage: string;
  count: string;
}

const StageDataItem: React.FC<StageDataItemProps> = ({ stage, count }) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
        <span className="text-xs">{stage}</span>
      </div>
      <span className="text-xs font-medium">{count}</span>
    </div>
  );
};

export default StageDataItem;