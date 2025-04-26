import React from 'react';
import { NavItem } from '../../types';

interface SidebarLinkProps {
  item: NavItem;
  icon: React.ReactNode;
  isActive: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ item, icon, isActive }) => {
  return (
    <a
      href={item.path}
      className={`sidebar-link ${isActive ? 'bg-primary-600' : 'text-primary-100 hover:bg-primary-600'}`}
    >
      <span className="mr-3">{icon}</span>
      <span>{item.name}</span>
      
      {item.badge && (
        <span className="ml-auto inline-flex items-center justify-center w-5 h-5 text-xs bg-white text-primary-700 rounded-full">
          {item.badge}
        </span>
      )}
    </a>
  );
};

export default SidebarLink;