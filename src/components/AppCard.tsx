import React from 'react';
import { Link } from 'react-router-dom';
import { App } from '../types';
import { getAppIcon } from '../data/apps';

interface AppCardProps {
  app: App;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const IconComponent = getAppIcon(app.id);

  return (
    <Link 
      to={`/app/${app.id}`}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      <div className="p-6 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
          <IconComponent className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{app.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{app.category}</p>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 mt-auto">
        <span className="text-xs font-medium text-white">View Analysis</span>
      </div>
    </Link>
  );
};

export default AppCard;