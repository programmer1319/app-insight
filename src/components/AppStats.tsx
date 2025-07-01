import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import { AppStats as AppStatsType } from '../types';

interface AppStatsProps {
  stats: AppStatsType;
}

const AppStats: React.FC<AppStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
        <div className="rounded-full bg-blue-100 p-3 mr-4">
          <MessageCircle className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Reviews</p>
          <p className="text-2xl font-bold text-gray-800">{stats.totalReviews.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
        <div className="rounded-full bg-yellow-100 p-3 mr-4">
          <Star className="w-6 h-6 text-yellow-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Average Rating</p>
          <div className="flex items-center">
            <p className="text-2xl font-bold text-gray-800 mr-2">{stats.averageRating.toFixed(1)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.round(stats.averageRating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2">Sentiment Ratio</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-green-500 h-2.5 rounded-full" 
              style={{ width: `${stats.sentimentDistribution.positive}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span>{stats.sentimentDistribution.positive}% Positive</span>
            <span>{stats.sentimentDistribution.negative}% Negative</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStats;