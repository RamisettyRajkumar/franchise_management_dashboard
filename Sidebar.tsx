import React from 'react';
import { NavItem } from '../../types';
import SidebarLink from './SidebarLink';
import { 
  Home, 
  ClipboardCheck, 
  Upload, 
  Star, 
  Layers, 
  Target, 
  BarChart, 
  Settings, 
  MessageSquare,
  LogOut
} from 'lucide-react';

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Stages & Checklist', path: '/stages' },
  { name: 'Upload Docs', path: '/docs' },
  { name: 'Preferred Vendors', path: '/vendors' },
  { name: 'Tech Stack', path: '/tech' },
  { name: 'Targets', path: '/targets' },
  { name: 'Per Sales Targets', path: '/sales-targets' },
  { name: 'MUI Settings', path: '/settings' },
  { name: 'Pending Questions', path: '/questions', badge: 2 },
];

const getIcon = (name: string) => {
  switch (name) {
    case 'Home': return <Home size={18} />;
    case 'Stages & Checklist': return <ClipboardCheck size={18} />;
    case 'Upload Docs': return <Upload size={18} />;
    case 'Preferred Vendors': return <Star size={18} />;
    case 'Tech Stack': return <Layers size={18} />;
    case 'Targets': return <Target size={18} />;
    case 'Per Sales Targets': return <BarChart size={18} />;
    case 'MUI Settings': return <Settings size={18} />;
    case 'Pending Questions': return <MessageSquare size={18} />;
    default: return <Home size={18} />;
  }
};

const Sidebar: React.FC = () => {
  return (
    <div className="bg-primary-700 text-white flex flex-col h-full w-64">
      <div className="px-6 py-6">
        <h1 className="text-xl font-semibold">Franchise Portal</h1>
      </div>
      
      <nav className="flex-1 space-y-1 px-4 py-2">
        {navItems.map((item) => (
          <SidebarLink
            key={item.name}
            item={item}
            icon={getIcon(item.name)}
            isActive={item.name === 'Home'}
          />
        ))}
      </nav>
      
      <div className="border-t border-primary-600 p-4">
        <button className="sidebar-link w-full justify-start text-white hover:bg-primary-600">
          <LogOut size={18} className="mr-2" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;