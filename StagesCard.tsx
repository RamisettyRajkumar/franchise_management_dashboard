import React from 'react';
import { StageItem } from '../../types';
import { Check, Circle } from 'lucide-react';

interface StagesCardProps {
  title: string;
  stages: StageItem[];
}

const StagesCard: React.FC<StagesCardProps> = ({ title, stages }) => {
  return (
    <div className="card h-full">
      <h3 className="text-sm font-medium text-gray-700 mb-4">{title}</h3>
      <div className="space-y-2">
        {stages.map((stage) => (
          <div key={stage.id} className="flex items-center p-2 bg-gray-50 rounded">
            <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full ${
              stage.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
            }`}>
              {stage.completed ? <Check size={14} /> : <Circle size={14} />}
            </div>
            <span className="ml-2 text-sm">{stage.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StagesCard;