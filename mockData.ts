import { NavItem, StageItem, Prospect, Question } from '../types';

export const completedStages: StageItem[] = [
  { id: '1', name: 'Profile Setup', completed: true },
  { id: '2', name: 'Initial Training', completed: true },
  { id: '3', name: 'Legal Documents', completed: true },
];

export const remainingStages: StageItem[] = [
  { id: '4', name: 'Financial Integration', completed: false },
  { id: '5', name: 'Final Review', completed: false },
];

export const stageData = [
  { stage: 'Stage 1 (Initial Inquiry)', count: '02' },
  { stage: 'Stage 2 (Document Submission)', count: '07' },
  { stage: 'Stage 3 (Training)', count: '05' },
];

export const prospects: Prospect[] = [
  { 
    id: '1', 
    name: 'Wade Warren', 
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg', 
    stage: 'Initial Inquiry' 
  },
  { 
    id: '2', 
    name: 'Ava Wright', 
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg', 
    stage: 'Initial Inquiry' 
  },
  { 
    id: '3', 
    name: 'Cody Fisher', 
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg', 
    stage: 'Initial Inquiry' 
  },
];

export const questions: Question[] = [
  {
    id: '1',
    user: {
      name: 'Phoenix Baker',
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
      role: '@phoenix',
    },
    question: 'What are the requirements for opening a new store?',
    timeAgo: '5min ago',
  },
  {
    id: '2',
    user: {
      name: 'Kenny Okumura',
      avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
      role: '@kenny',
    },
    question: 'How do I manage inventory effectively?',
    timeAgo: '4hr ago',
  },
];