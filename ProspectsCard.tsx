import React from 'react';
import { Prospect } from '../../types';

interface ProspectsCardProps {
  prospects: Prospect[];
}

const ProspectsCard: React.FC<ProspectsCardProps> = ({ prospects }) => {
  return (
    <div className="card h-full">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Prospect Leads</h3>
      
      <div className="space-y-3">
        {prospects.map((prospect) => (
          <div key={prospect.id} className="flex items-center">
            <img
              src={prospect.avatar}
              alt={`${prospect.name}'s avatar`}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              <p className="text-sm font-medium">{prospect.name}</p>
              <p className="text-xs text-gray-500">Stage: {prospect.stage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProspectsCard;