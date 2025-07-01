import React from 'react';
import { apps } from '../data/apps';
import AppGrid from '../components/AppGrid';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <AppGrid apps={apps} />
    </div>
  );
};

export default HomePage;