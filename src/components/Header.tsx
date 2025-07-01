import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Home, Search } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <BarChart3 className="w-8 h-8 mr-3" />
            <Link to="/" className="text-2xl font-bold">AppInsight</Link>
          </div>
          
          {!isHome && (
            <Link 
              to="/" 
              className="flex items-center text-white bg-blue-500 bg-opacity-30 hover:bg-opacity-40 px-4 py-2 rounded-md transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              <span>Back to Apps</span>
            </Link>
          )}
        </div>
        
        {isHome && (
          <div className="mt-8 mb-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Mobile App Review Analysis</h1>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Explore sentiment analysis and topic modeling for popular mobile applications
            </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;