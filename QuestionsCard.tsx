import React from 'react';
import { Question } from '../../types';

interface QuestionsCardProps {
  questions: Question[];
}

const QuestionsCard: React.FC<QuestionsCardProps> = ({ questions }) => {
  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-700">Pending Questions</h3>
        <span className="inline-flex items-center justify-center w-5 h-5 text-xs bg-primary-500 text-white rounded-full">
          {questions.length}
        </span>
      </div>
      
      <div className="space-y-4">
        {questions.map((question) => (
          <div key={question.id} className="border-l-2 border-primary-500 pl-3 py-1">
            <div className="flex items-center mb-1">
              <img
                src={question.user.avatar}
                alt={`${question.user.name}'s avatar`}
                className="w-6 h-6 rounded-full mr-2"
              />
              <span className="text-sm font-medium">{question.user.name}</span>
              <span className="ml-2 text-xs text-gray-500">{question.timeAgo}</span>
            </div>
            <p className="text-sm">{question.question}</p>
            <p className="text-xs text-gray-500 mt-1">{question.user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsCard;