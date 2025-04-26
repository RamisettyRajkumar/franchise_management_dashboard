export interface NavItem {
  name: string;
  path: string;
  badge?: number;
}

export interface StageItem {
  id: string;
  name: string;
  completed: boolean;
}

export interface Prospect {
  id: string;
  name: string;
  avatar: string;
  stage: string;
}

export interface Question {
  id: string;
  user: {
    name: string;
    avatar: string;
    role: string;
  };
  question: string;
  timeAgo: string;
}