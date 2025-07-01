import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews, fetchTopicData, fetchAppStats } from '../services/api';
import { Review, TopicData, AppStats as AppStatsType } from '../types';
import { apps, getAppIcon } from '../data/apps';
import ReviewList from '../components/ReviewList';
import SentimentChart from '../components/SentimentChart';
import TopicChart from '../components/TopicChart';
import WordCloud from '../components/WordCloud';
import AppStats from '../components/AppStats';

const AppDetailPage: React.FC = () => {
  const { appId } = useParams<{ appId: string }>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [topicData, setTopicData] = useState<TopicData[]>([]);
  const [stats, setStats] = useState<AppStatsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const app = apps.find(a => a.id === appId);
  const IconComponent = appId ? getAppIcon(appId) : null;

  useEffect(() => {
    const loadData = async () => {
      if (!appId) return;
      
      setLoading(true);
      try {
        const [reviewsData, topicData, statsData] = await Promise.all([
          fetchReviews(appId),
          fetchTopicData(appId),
          fetchAppStats(appId)
        ]);
        
        setReviews(reviewsData);
        setTopicData(topicData);
        setStats(statsData);
        setError(null);
      } catch (err) {
        console.error('Error loading app data:', err);
        setError('Failed to load app data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, [appId]);

  if (!app) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">App Not Found</h2>
        <p className="text-gray-600">The app you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading app data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {IconComponent && (
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <IconComponent className="w-10 h-10 text-blue-600" />
            </div>
          )}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800">{app.name}</h1>
            <p className="text-gray-500">{app.category}</p>
          </div>
        </div>
      </div>

      {stats && <AppStats stats={stats} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <WordCloud words={stats?.topWords || []} />
        <SentimentChart 
          positive={stats?.sentimentDistribution.positive || 0} 
          negative={stats?.sentimentDistribution.negative || 0} 
        />
      </div>

      <div className="mt-8">
        <TopicChart topicData={topicData} />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Reviews</h2>
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};

export default AppDetailPage;