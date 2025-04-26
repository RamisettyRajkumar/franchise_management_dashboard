import React from 'react';
import ProgressCard from '../components/Dashboard/ProgressCard';
import StatCard from '../components/Dashboard/StatCard';
import StagesCard from '../components/Dashboard/StagesCard';
import FinancialCard from '../components/Dashboard/FinancialCard';
import ProspectsCard from '../components/Dashboard/ProspectsCard';
import QuestionsCard from '../components/Dashboard/QuestionsCard';
import ChatAssistant from '../components/Dashboard/ChatAssistant';
import InsightsCard from '../components/Dashboard/InsightsCard';
import StageDataItem from '../components/Dashboard/StageDataItem';
import { completedStages, remainingStages, prospects, questions, stageData } from '../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProgressCard title="Account Progress" percentage={85} />
        
        <div>
          <StatCard 
            title="Total Franchisees Onboard" 
            value={14} 
            change={{ value: "+7.1%", positive: true }}
            showAvatars={true}
          />
          <div className="mt-4">
            {stageData.map((item, index) => (
              <StageDataItem 
                key={index} 
                stage={item.stage} 
                count={item.count} 
              />
            ))}
          </div>
        </div>
        
        <InsightsCard percentage={10} label="Sales Growth" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StagesCard title="Stages Completed" stages={completedStages} />
        <StagesCard title="Stages Remaining" stages={remainingStages} />
        <FinancialCard 
          franchisees={20} 
          change="+3.1%" 
          target="$500,000" 
          current="$450,000" 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <ProspectsCard prospects={prospects} />
        </div>
        <div className="md:col-span-2">
          <QuestionsCard questions={questions} />
        </div>
      </div>
      
      <div>
        <ChatAssistant />
      </div>
    </div>
  );
};

export default Dashboard;