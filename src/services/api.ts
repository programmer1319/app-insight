import { Facebook } from 'lucide-react';
import { Review, TopicData, AppStats } from '../types';

// Base URL for the backend API
const API_BASE_URL = 'http://localhost:8000/api';

// Fetch reviews for a specific app
export const fetchReviews = async (appId: string): Promise<Review[]> => {
  try {
    // In a real implementation, this would fetch from your backend
    // For now, we'll simulate the response with mock data
    return mockReviewsData[appId] || [];
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

// Fetch topic data for a specific app
export const fetchTopicData = async (appId: string): Promise<TopicData[]> => {
  try {
    // In a real implementation, this would fetch from your backend
    // For now, we'll simulate the response with mock data
    return mockTopicData[appId] || [];
  } catch (error) {
    console.error('Error fetching topic data:', error);
    throw error;
  }
};

// Fetch app statistics
export const fetchAppStats = async (appId: string): Promise<AppStats> => {
  try {
    // In a real implementation, this would fetch from your backend
    // For now, we'll simulate the response with mock data
    return mockAppStats[appId] || defaultAppStats;
  } catch (error) {
    console.error('Error fetching app statistics:', error);
    throw error;
  }
};

// Mock data for development
const defaultAppStats: AppStats = {
  totalReviews: 0,
  averageRating: 0,
  sentimentDistribution: {
    positive: 0,
    negative: 0
  },
  topWords: []
};

// Mock app statistics data
const mockAppStats: Record<string, AppStats> = {
  amazon: { totalReviews: 13887, averageRating: 2.83, sentimentDistribution: { positive: 11.88, negative: 88.12 }, topWords: [ { text: 'privacy', value: 85 }, { text: 'friends', value: 72 }, { text: 'shopping', value: 66 }, { text: 'delivery', value: 60 }, { text: 'notifications', value: 53 }, { text: 'items', value: 49 }, { text: 'deals', value: 45 }, { text: 'returns', value: 41 }, { text: 'wishlist', value: 37 }, { text: 'interface', value: 32 } ] },
  candycrush: { totalReviews: 12939, averageRating: 2.9, sentimentDistribution: { positive: 19.82, negative: 80.18 }, topWords: [ { text: 'ads', value: 80 }, { text: 'gameplay', value: 72 }, { text: 'rewards', value: 65 }, { text: 'levels', value: 59 }, { text: 'lives', value: 52 }, { text: 'graphics', value: 48 }, { text: 'sound', value: 45 }, { text: 'match', value: 42 }, { text: 'boosters', value: 39 }, { text: 'events', value: 35 } ] },
  cashapp: { totalReviews: 14223, averageRating: 3.78, sentimentDistribution: { positive: 11.28, negative: 88.72 }, topWords: [ { text: 'money', value: 90 }, { text: 'send', value: 85 }, { text: 'account', value: 75 }, { text: 'transfer', value: 68 }, { text: 'security', value: 64 }, { text: 'issues', value: 60 }, { text: 'fraud', value: 57 }, { text: 'support', value: 54 }, { text: 'app', value: 52 }, { text: 'notifications', value: 50 } ] },
  facebook: { totalReviews: 12110, averageRating: 3.2, sentimentDistribution: { positive: 25.04, negative: 74.96 }, topWords: [ { text: 'feed', value: 84 }, { text: 'notifications', value: 78 }, { text: 'ads', value: 71 }, { text: 'interface', value: 67 }, { text: 'videos', value: 62 }, { text: 'friends', value: 58 }, { text: 'chat', value: 54 }, { text: 'login', value: 50 }, { text: 'update', value: 45 }, { text: 'security', value: 41 } ] },
  instagram: { totalReviews: 11662, averageRating: 4.2, sentimentDistribution: { positive: 78, negative: 22 }, topWords: [ { text: 'photos', value: 92 }, { text: 'stories', value: 85 }, { text: 'filters', value: 76 }, { text: 'reels', value: 68 }, { text: 'explore', value: 62 }, { text: 'followers', value: 58 }, { text: 'likes', value: 55 }, { text: 'hashtags', value: 48 }, { text: 'ads', value: 42 }, { text: 'interface', value: 38 } ] },
  twitter: { totalReviews: 13621, averageRating: 3.9, sentimentDistribution: { positive: 70, negative: 30 }, topWords: [ { text: 'tweets', value: 88 }, { text: 'trending', value: 75 }, { text: 'follow', value: 68 }, { text: 'retweet', value: 62 }, { text: 'timeline', value: 58 }, { text: 'news', value: 52 }, { text: 'politics', value: 48 }, { text: 'threads', value: 45 }, { text: 'notifications', value: 42 }, { text: 'ads', value: 38 } ] },
  youtube: { totalReviews: 12940, averageRating: 3.96, sentimentDistribution: { positive: 33.31, negative: 66.69 }, topWords: [ { text: 'videos', value: 95 }, { text: 'channels', value: 82 }, { text: 'subscribe', value: 75 }, { text: 'comments', value: 68 }, { text: 'recommendations', value: 62 }, { text: 'ads', value: 58 }, { text: 'playlists', value: 52 }, { text: 'streaming', value: 48 }, { text: 'quality', value: 45 }, { text: 'content', value: 42 } ] },
  coursera: { totalReviews: 13819, averageRating: 4.12, sentimentDistribution: { positive: 14.69, negative: 85.31 }, topWords: [ { text: 'courses', value: 88 }, { text: 'learning', value: 81 }, { text: 'verification', value: 72 }, { text: 'certificate', value: 67 }, { text: 'platform', value: 60 }, { text: 'videos', value: 56 }, { text: 'useful', value: 53 }, { text: 'camera', value: 49 }, { text: 'education', value: 45 }, { text: 'subjects', value: 42 } ] },
  disneyplus: { totalReviews: 13914, averageRating: 2.5, sentimentDistribution: { positive: 9.38, negative: 90.62 }, topWords: [ { text: 'shows', value: 86 }, { text: 'movies', value: 78 }, { text: 'content', value: 70 }, { text: 'tv', value: 66 }, { text: 'hdr', value: 60 }, { text: 'features', value: 54 }, { text: 'subscription', value: 49 }, { text: 'issues', value: 45 }, { text: 'update', value: 41 }, { text: 'support', value: 38 } ] },
  dropbox: { totalReviews: 13572, averageRating: 3.8, sentimentDistribution: { positive: 16.47, negative: 83.53 }, topWords: [ { text: 'files', value: 84 }, { text: 'upload', value: 78 }, { text: 'sync', value: 72 }, { text: 'storage', value: 66 }, { text: 'cloud', value: 62 }, { text: 'slow', value: 58 }, { text: 'interface', value: 55 }, { text: 'easy', value: 52 }, { text: 'account', value: 48 }, { text: 'documents', value: 45 } ] },
  duolingo: { totalReviews: 13290, averageRating: 4.47, sentimentDistribution: { positive: 27.71, negative: 72.29 }, topWords: [ { text: 'language', value: 91 }, { text: 'lessons', value: 85 }, { text: 'practice', value: 80 }, { text: 'Spanish', value: 75 }, { text: 'Duo', value: 70 }, { text: 'grammar', value: 65 }, { text: 'fun', value: 60 }, { text: 'learning', value: 58 }, { text: 'daily', value: 55 }, { text: 'vocabulary', value: 50 } ] },
  messenger: { totalReviews: 12110, averageRating: 3.4, sentimentDistribution: { positive: 20.12, negative: 79.88 }, topWords: [ { text: 'chat', value: 82 }, { text: 'calls', value: 75 }, { text: 'video', value: 70 }, { text: 'friends', value: 65 }, { text: 'messages', value: 60 }, { text: 'interface', value: 58 }, { text: 'update', value: 55 }, { text: 'voice', value: 50 }, { text: 'slow', value: 48 }, { text: 'connection', value: 45 } ] },
  facebook_lite: { totalReviews: 12111, averageRating: 3.1, sentimentDistribution: { positive: 22.45, negative: 77.55 }, topWords: [ { text: 'lightweight', value: 84 }, { text: 'data', value: 78 }, { text: 'interface', value: 72 }, { text: 'fast', value: 68 }, { text: 'messaging', value: 65 }, { text: 'lag', value: 60 }, { text: 'features', value: 57 }, { text: 'images', value: 52 }, { text: 'speed', value: 48 }, { text: 'notifications', value: 45 } ] },
  gmail: { totalReviews: 13156, averageRating: 3.75, sentimentDistribution: { positive: 27.14, negative: 72.86 }, topWords: [ { text: 'email', value: 91 }, { text: 'spam', value: 85 }, { text: 'notifications', value: 78 }, { text: 'search', value: 70 }, { text: 'filter', value: 66 }, { text: 'inbox', value: 60 }, { text: 'compose', value: 58 }, { text: 'sync', value: 55 }, { text: 'labels', value: 52 }, { text: 'organize', value: 48 } ] },
  snapchat: { totalReviews: 12800, averageRating: 3.6, sentimentDistribution: { positive: 22.5, negative: 77.5 }, topWords: [ { text: 'filters', value: 88 }, { text: 'chat', value: 80 }, { text: 'stories', value: 76 }, { text: 'camera', value: 70 }, { text: 'streaks', value: 66 }, { text: 'updates', value: 60 }, { text: 'interface', value: 56 }, { text: 'memories', value: 52 }, { text: 'snap', value: 49 }, { text: 'friends', value: 45 } ] },
  netflix: { totalReviews: 14050, averageRating: 3.9, sentimentDistribution: { positive: 28.2, negative: 71.8 }, topWords: [ { text: 'shows', value: 90 }, { text: 'movies', value: 85 }, { text: 'episodes', value: 78 }, { text: 'content', value: 70 }, { text: 'download', value: 66 }, { text: 'streaming', value: 60 }, { text: 'subscription', value: 58 }, { text: 'watch', value: 54 }, { text: 'recommendations', value: 50 }, { text: 'account', value: 47 } ] },
  spotify: { totalReviews: 13740, averageRating: 4.3, sentimentDistribution: { positive: 32.7, negative: 67.3 }, topWords: [ { text: 'music', value: 92 }, { text: 'playlist', value: 86 }, { text: 'songs', value: 80 }, { text: 'offline', value: 74 }, { text: 'albums', value: 70 }, { text: 'premium', value: 65 }, { text: 'shuffle', value: 60 }, { text: 'recommendation', value: 56 }, { text: 'ads', value: 52 }, { text: 'interface', value: 48 } ] },
  telegram: { totalReviews: 12750, averageRating: 4.1, sentimentDistribution: { positive: 35.1, negative: 64.9 }, topWords: [ { text: 'chat', value: 90 }, { text: 'channels', value: 82 }, { text: 'groups', value: 76 }, { text: 'stickers', value: 70 }, { text: 'privacy', value: 65 }, { text: 'media', value: 62 }, { text: 'cloud', value: 58 }, { text: 'interface', value: 55 }, { text: 'backup', value: 50 }, { text: 'bots', value: 47 } ] },
  linkedin: { totalReviews: 12320, averageRating: 3.7, sentimentDistribution: { positive: 30.2, negative: 69.8 }, topWords: [ { text: 'jobs', value: 88 }, { text: 'profile', value: 82 }, { text: 'connections', value: 76 }, { text: 'networking', value: 70 }, { text: 'business', value: 66 }, { text: 'posts', value: 62 }, { text: 'search', value: 58 }, { text: 'recruiters', value: 55 }, { text: 'skills', value: 52 }, { text: 'updates', value: 48 } ] },
  uber: { totalReviews: 14000, averageRating: 4.0, sentimentDistribution: { positive: 29.4, negative: 70.6 }, topWords: [ { text: 'ride', value: 92 }, { text: 'driver', value: 85 }, { text: 'fare', value: 78 }, { text: 'time', value: 74 }, { text: 'support', value: 70 }, { text: 'map', value: 66 }, { text: 'tracking', value: 62 }, { text: 'location', value: 58 }, { text: 'booking', value: 54 }, { text: 'wait', value: 50 } ] },
  pinterest: { totalReviews: 12200, averageRating: 4.1, sentimentDistribution: { positive: 34.2, negative: 65.8 }, topWords: [ { text: 'ideas', value: 88 }, { text: 'designs', value: 82 }, { text: 'images', value: 76 }, { text: 'inspiration', value: 70 }, { text: 'boards', value: 66 }, { text: 'content', value: 62 }, { text: 'interface', value: 58 }, { text: 'art', value: 54 }, { text: 'photos', value: 50 }, { text: 'projects', value: 48 } ] },
  reddit: { totalReviews: 12550, averageRating: 3.8, sentimentDistribution: { positive: 28.5, negative: 71.5 }, topWords: [ { text: 'posts', value: 90 }, { text: 'comments', value: 84 }, { text: 'threads', value: 78 }, { text: 'subs', value: 72 }, { text: 'content', value: 66 }, { text: 'community', value: 62 }, { text: 'moderation', value: 58 }, { text: 'updates', value: 54 }, { text: 'interface', value: 50 }, { text: 'ads', value: 47 } ] },
  tiktok: { totalReviews: 14500, averageRating: 4.4, sentimentDistribution: { positive: 36.6, negative: 63.4 }, topWords: [ { text: 'videos', value: 92 }, { text: 'music', value: 85 }, { text: 'effects', value: 80 }, { text: 'trending', value: 75 }, { text: 'dance', value: 70 }, { text: 'likes', value: 66 }, { text: 'filters', value: 62 }, { text: 'viral', value: 58 }, { text: 'comments', value: 54 }, { text: 'share', value: 50 } ] },
  zoom: { totalReviews: 13900, averageRating: 3.95, sentimentDistribution: { positive: 31.8, negative: 68.2 }, topWords: [ { text: 'meetings', value: 90 }, { text: 'video', value: 84 }, { text: 'audio', value: 78 }, { text: 'connection', value: 72 }, { text: 'screen', value: 66 }, { text: 'share', value: 62 }, { text: 'chat', value: 58 }, { text: 'quality', value: 54 }, { text: 'interface', value: 50 }, { text: 'features', value: 48 } ] },
  googlemaps: { totalReviews: 13300, averageRating: 4.6, sentimentDistribution: { positive: 39.5, negative: 60.5 }, topWords: [ { text: 'navigation', value: 92 }, { text: 'location', value: 86 }, { text: 'routes', value: 80 }, { text: 'traffic', value: 75 }, { text: 'directions', value: 70 }, { text: 'places', value: 66 }, { text: 'map', value: 62 }, { text: 'search', value: 58 }, { text: 'voice', value: 54 }, { text: 'explore', value: 50 } ] },
  whatsapp: { totalReviews: 15000, averageRating: 4.5, sentimentDistribution: { positive: 40.2, negative: 59.8 }, topWords: [ { text: 'messages', value: 90 }, { text: 'voice', value: 85 }, { text: 'video', value: 80 }, { text: 'status', value: 75 }, { text: 'chat', value: 70 }, { text: 'calls', value: 65 }, { text: 'backup', value: 60 }, { text: 'privacy', value: 55 }, { text: 'groups', value: 50 }, { text: 'notifications', value: 45 } ] },
  microsoftword: { totalReviews: 11800, averageRating: 4.3, sentimentDistribution: { positive: 38.4, negative: 61.6 }, topWords: [ { text: 'documents', value: 88 }, { text: 'editing', value: 82 }, { text: 'text', value: 76 }, { text: 'formatting', value: 70 }, { text: 'files', value: 66 }, { text: 'save', value: 62 }, { text: 'share', value: 58 }, { text: 'templates', value: 54 }, { text: 'fonts', value: 50 }, { text: 'print', value: 46 } ] },
 powerpoint: {
  totalReviews: 11300,
  averageRating: 4.2,
  sentimentDistribution: { positive: 37.5, negative: 62.5 },
  topWords: [
    { text: 'slides', value: 90 },
    { text: 'presentation', value: 84 },
    { text: 'templates', value: 78 },
    { text: 'themes', value: 72 },
    { text: 'design', value: 68 },
    { text: 'animations', value: 64 },
    { text: 'charts', value: 60 },
    { text: 'content', value: 56 },
    { text: 'text', value: 52 },
    { text: 'transitions', value: 48 }
  ]
}
};


// Mock review data
const mockReviewsData: Record<string, Review[]> = {
  amazon: [
    { reviewId: '1', content: 'Great app for shopping deals and fast delivery.', score: 5, cleaned_content_bert: 'great app shopping deals fast delivery', cleaned_content_lda: 'great app shopping deals fast delivery' },
    { reviewId: '2', content: 'Too many ads and slow performance.', score: 2, cleaned_content_bert: 'many ads slow performance', cleaned_content_lda: 'many ads slow performance' },
    { reviewId: '3', content: 'Good notifications and product tracking.', score: 4, cleaned_content_bert: 'good notifications product tracking', cleaned_content_lda: 'good notifications product tracking' },
    { reviewId: '4', content: 'App crashes frequently when opening items.', score: 1, cleaned_content_bert: 'app crashes frequently opening items', cleaned_content_lda: 'app crashes frequently opening items' },
    { reviewId: '5', content: 'Fast checkout and wishlist feature is helpful.', score: 5, cleaned_content_bert: 'fast checkout wishlist feature helpful', cleaned_content_lda: 'fast checkout wishlist feature helpful' }
  ],
  instagram: [
    { reviewId: '1', content: 'Photos and stories look amazing.', score: 5, cleaned_content_bert: 'photos stories look amazing', cleaned_content_lda: 'photos stories look amazing' },
    { reviewId: '2', content: 'Too many sponsored posts now.', score: 3, cleaned_content_bert: 'many sponsored posts now', cleaned_content_lda: 'many sponsored posts now' },
    { reviewId: '3', content: 'Love the new filters and interface.', score: 4, cleaned_content_bert: 'love new filters interface', cleaned_content_lda: 'love new filters interface' },
    { reviewId: '4', content: 'Reels are very engaging.', score: 5, cleaned_content_bert: 'reels very engaging', cleaned_content_lda: 'reels very engaging' },
    { reviewId: '5', content: 'Explore page shows repeated content.', score: 2, cleaned_content_bert: 'explore page repeated content', cleaned_content_lda: 'explore page repeated content' }
  ],
    twitter: [
    { reviewId: '1', content: 'Great for following news and trends.', score: 4, cleaned_content_bert: 'great following news trends', cleaned_content_lda: 'great following news trends' },
    { reviewId: '2', content: 'The character limit is frustrating.', score: 3, cleaned_content_bert: 'character limit frustrating', cleaned_content_lda: 'character limit frustrating' },
    { reviewId: '3', content: 'Too much political content lately.', score: 2, cleaned_content_bert: 'too much political content', cleaned_content_lda: 'too much political content' },
    { reviewId: '4', content: 'I like the threads feature a lot.', score: 4, cleaned_content_bert: 'like threads feature lot', cleaned_content_lda: 'like threads feature lot' },
    { reviewId: '5', content: 'Good for quick updates and sharing.', score: 4, cleaned_content_bert: 'good quick updates sharing', cleaned_content_lda: 'good quick updates sharing' }
  ],
  facebook:[
{
reviewId: "1",
content: "Its a good working app Better than fb lite",
score: 3,
cleaned_content_bert: "good working app better fb lite",
cleaned_content_lda: "good working app better fb lite"
},
{
reviewId: "2",
content: "This app is very good 🙂",
score: 5,
cleaned_content_bert: "app very good",
cleaned_content_lda: "app very good"
},
{
reviewId: "3",
content: "A best social media platform... But unsafe a bit...",
score: 3,
cleaned_content_bert: "best social media platform unsafe bit",
cleaned_content_lda: "best social media platform unsafe bit"
},
{
reviewId: "4",
content: "Great app. Fully recommended!!!",
score: 4,
cleaned_content_bert: "great app fully recommended",
cleaned_content_lda: "great app fully recommended"
},
{
reviewId: "5",
content: "Very boring 😞 app Facebook is... Time waste and no more some specials 😞",
score: 2,
cleaned_content_bert: "boring app facebook time waste specials",
cleaned_content_lda: "boring app facebook time waste specials"
}
],
cashapp:[
{
reviewId: "1",
content: "Easy to use and fast transactions.",
score: 4,
cleaned_content_bert: "easy use fast transactions",
cleaned_content_lda: "easy use fast transactions"
},
{
reviewId: "2",
content: "Love the instant transfer feature!",
score: 5,
cleaned_content_bert: "love instant transfer feature",
cleaned_content_lda: "love instant transfer feature"
},
{
reviewId: "3",
content: "Sometimes the customer support is slow.",
score: 3,
cleaned_content_bert: "customer support slow",
cleaned_content_lda: "customer support slow"
},
{
reviewId: "4",
content: "Great for sending money to friends and family.",
score: 4,
cleaned_content_bert: "great sending money friends family",
cleaned_content_lda: "great sending money friends family"
},
{
reviewId: "5",
content: "Fees can be a bit high for some transactions.",
score: 3,
cleaned_content_bert: "fees high transactions",
cleaned_content_lda: "fees high transactions"
}
],
  youtube: [
    { reviewId: '1', content: 'Best platform for video content.', score: 5, cleaned_content_bert: 'best platform video content', cleaned_content_lda: 'best platform video content' },
    { reviewId: '2', content: 'Too many ads during videos.', score: 2, cleaned_content_bert: 'many ads during videos', cleaned_content_lda: 'many ads during videos' },
    { reviewId: '3', content: 'Great recommendation engine!', score: 5, cleaned_content_bert: 'great recommendation engine', cleaned_content_lda: 'great recommendation engine' },
    { reviewId: '4', content: 'Love the variety of content.', score: 5, cleaned_content_bert: 'love variety content', cleaned_content_lda: 'love variety content' },
    { reviewId: '5', content: 'Comment section is entertaining.', score: 4, cleaned_content_bert: 'comment section entertaining', cleaned_content_lda: 'comment section entertaining' }
  ],
  coursera: [
    { reviewId: '1', content: 'Courses are well-structured and informative.', score: 5, cleaned_content_bert: 'courses well structured informative', cleaned_content_lda: 'courses well structured informative' },
    { reviewId: '2', content: 'Difficult to verify my identity with the camera.', score: 2, cleaned_content_bert: 'difficult verify identity camera', cleaned_content_lda: 'difficult verify identity camera' },
    { reviewId: '3', content: 'Platform is good but needs more topics.', score: 3, cleaned_content_bert: 'platform good needs more topics', cleaned_content_lda: 'platform good needs more topics' },
    { reviewId: '4', content: 'Certification helped me get a job.', score: 5, cleaned_content_bert: 'certification helped get job', cleaned_content_lda: 'certification helped get job' },
    { reviewId: '5', content: 'Video quality could be improved.', score: 3, cleaned_content_bert: 'video quality could be improved', cleaned_content_lda: 'video quality could be improved' }
  ],
  disneyplus: [
    { reviewId: '1', content: 'Great shows and content for kids.', score: 5, cleaned_content_bert: 'great shows content kids', cleaned_content_lda: 'great shows content kids' },
    { reviewId: '2', content: 'Frequent buffering and app crashes.', score: 2, cleaned_content_bert: 'frequent buffering app crashes', cleaned_content_lda: 'frequent buffering app crashes' },
    { reviewId: '3', content: 'Subscription too expensive for features.', score: 3, cleaned_content_bert: 'subscription expensive features', cleaned_content_lda: 'subscription expensive features' },
    { reviewId: '4', content: 'Love the Marvel content!', score: 5, cleaned_content_bert: 'love marvel content', cleaned_content_lda: 'love marvel content' },
    { reviewId: '5', content: 'TV app version is buggy.', score: 2, cleaned_content_bert: 'tv app version buggy', cleaned_content_lda: 'tv app version buggy' }
  ],
  dropbox: [
    { reviewId: '1', content: 'Easily upload and sync files.', score: 5, cleaned_content_bert: 'easily upload sync files', cleaned_content_lda: 'easily upload sync files' },
    { reviewId: '2', content: 'Sometimes it’s slow to load folders.', score: 3, cleaned_content_bert: 'sometimes slow load folders', cleaned_content_lda: 'sometimes slow load folders' },
    { reviewId: '3', content: 'Great for cloud storage.', score: 4, cleaned_content_bert: 'great cloud storage', cleaned_content_lda: 'great cloud storage' },
    { reviewId: '4', content: 'Not enough free space.', score: 2, cleaned_content_bert: 'not enough free space', cleaned_content_lda: 'not enough free space' },
    { reviewId: '5', content: 'Syncs well with my devices.', score: 5, cleaned_content_bert: 'syncs well devices', cleaned_content_lda: 'syncs well devices' }
  ],
  duolingo: [
    { reviewId: '1', content: 'Fun way to learn new languages.', score: 5, cleaned_content_bert: 'fun way learn new languages', cleaned_content_lda: 'fun way learn new languages' },
    { reviewId: '2', content: 'Annoying owl notifications.', score: 2, cleaned_content_bert: 'annoying owl notifications', cleaned_content_lda: 'annoying owl notifications' },
    { reviewId: '3', content: 'Daily practice keeps me motivated.', score: 4, cleaned_content_bert: 'daily practice keeps motivated', cleaned_content_lda: 'daily practice keeps motivated' },
    { reviewId: '4', content: 'Needs better grammar explanations.', score: 3, cleaned_content_bert: 'needs better grammar explanations', cleaned_content_lda: 'needs better grammar explanations' },
    { reviewId: '5', content: 'Love the XP system and leaderboards.', score: 5, cleaned_content_bert: 'love xp system leaderboards', cleaned_content_lda: 'love xp system leaderboards' }
  ],
  messenger: [
    { reviewId: '1', content: 'Video calls are smooth and reliable.', score: 5, cleaned_content_bert: 'video calls smooth reliable', cleaned_content_lda: 'video calls smooth reliable' },
    { reviewId: '2', content: 'Too many updates breaking things.', score: 2, cleaned_content_bert: 'too many updates breaking things', cleaned_content_lda: 'too many updates breaking things' },
    { reviewId: '3', content: 'Chat interface is clean and fast.', score: 4, cleaned_content_bert: 'chat interface clean fast', cleaned_content_lda: 'chat interface clean fast' },
    { reviewId: '4', content: 'Group chats are very useful.', score: 4, cleaned_content_bert: 'group chats very useful', cleaned_content_lda: 'group chats very useful' },
    { reviewId: '5', content: 'Push notifications sometimes fail.', score: 3, cleaned_content_bert: 'push notifications sometimes fail', cleaned_content_lda: 'push notifications sometimes fail' }
  ],
  facebook_lite: [
    { reviewId: '1', content: 'Lightweight and fast loading.', score: 5, cleaned_content_bert: 'lightweight fast loading', cleaned_content_lda: 'lightweight fast loading' },
    { reviewId: '2', content: 'Lacks many features from main app.', score: 3, cleaned_content_bert: 'lacks many features main app', cleaned_content_lda: 'lacks many features main app' },
    { reviewId: '3', content: 'Great for low bandwidth areas.', score: 4, cleaned_content_bert: 'great low bandwidth areas', cleaned_content_lda: 'great low bandwidth areas' },
    { reviewId: '4', content: 'Frequent crashes on login.', score: 2, cleaned_content_bert: 'frequent crashes login', cleaned_content_lda: 'frequent crashes login' },
    { reviewId: '5', content: 'Simple interface and fast messages.', score: 4, cleaned_content_bert: 'simple interface fast messages', cleaned_content_lda: 'simple interface fast messages' }
  ],
  gmail: [
    { reviewId: '1', content: 'Clean layout and organized inbox.', score: 5, cleaned_content_bert: 'clean layout organized inbox', cleaned_content_lda: 'clean layout organized inbox' },
    { reviewId: '2', content: 'Spam filter needs improvement.', score: 3, cleaned_content_bert: 'spam filter needs improvement', cleaned_content_lda: 'spam filter needs improvement' },
    { reviewId: '3', content: 'Search works well.', score: 4, cleaned_content_bert: 'search works well', cleaned_content_lda: 'search works well' },
    { reviewId: '4', content: 'Email sync is unreliable sometimes.', score: 2, cleaned_content_bert: 'email sync unreliable sometimes', cleaned_content_lda: 'email sync unreliable sometimes' },
    { reviewId: '5', content: 'Labels and categories are helpful.', score: 5, cleaned_content_bert: 'labels categories helpful', cleaned_content_lda: 'labels categories helpful' }
  ],
  snapchat: [
    { reviewId: '1', content: 'Love the filters and lenses.', score: 5, cleaned_content_bert: 'love filters lenses', cleaned_content_lda: 'love filters lenses' },
    { reviewId: '2', content: 'App crashes often on camera use.', score: 2, cleaned_content_bert: 'app crashes camera use', cleaned_content_lda: 'app crashes camera use' },
    { reviewId: '3', content: 'Fun to keep streaks with friends.', score: 4, cleaned_content_bert: 'fun keep streaks friends', cleaned_content_lda: 'fun keep streaks friends' },
    { reviewId: '4', content: 'Notifications delay sometimes.', score: 3, cleaned_content_bert: 'notifications delay sometimes', cleaned_content_lda: 'notifications delay sometimes' },
    { reviewId: '5', content: 'Stories interface is slick.', score: 4, cleaned_content_bert: 'stories interface slick', cleaned_content_lda: 'stories interface slick' }
  ],
  netflix: [
    { reviewId: '1', content: 'Excellent variety of shows.', score: 5, cleaned_content_bert: 'excellent variety shows', cleaned_content_lda: 'excellent variety shows' },
    { reviewId: '2', content: 'Subscription is pricey now.', score: 3, cleaned_content_bert: 'subscription pricey now', cleaned_content_lda: 'subscription pricey now' },
    { reviewId: '3', content: 'Streaming quality is smooth.', score: 4, cleaned_content_bert: 'streaming quality smooth', cleaned_content_lda: 'streaming quality smooth' },
    { reviewId: '4', content: 'No download option on some content.', score: 2, cleaned_content_bert: 'no download option some content', cleaned_content_lda: 'no download option some content' },
    { reviewId: '5', content: 'Good recommendations engine.', score: 5, cleaned_content_bert: 'good recommendations engine', cleaned_content_lda: 'good recommendations engine' }
  ],
  spotify: [
    { reviewId: '1', content: 'Great sound and playlists.', score: 5, cleaned_content_bert: 'great sound playlists', cleaned_content_lda: 'great sound playlists' },
    { reviewId: '2', content: 'Too many ads in free version.', score: 3, cleaned_content_bert: 'many ads free version', cleaned_content_lda: 'many ads free version' },
    { reviewId: '3', content: 'Love the offline mode.', score: 4, cleaned_content_bert: 'love offline mode', cleaned_content_lda: 'love offline mode' },
    { reviewId: '4', content: 'App drains battery fast.', score: 2, cleaned_content_bert: 'app drains battery fast', cleaned_content_lda: 'app drains battery fast' },
    { reviewId: '5', content: 'Music quality is top-notch.', score: 5, cleaned_content_bert: 'music quality top notch', cleaned_content_lda: 'music quality top notch' }
  ],
  telegram: [
    { reviewId: '1', content: 'The best chat app with privacy-focused features.', score: 5, cleaned_content_bert: 'best chat app privacy features', cleaned_content_lda: 'best chat app privacy features' },
    { reviewId: '2', content: 'Too many bots in groups.', score: 3, cleaned_content_bert: 'many bots groups', cleaned_content_lda: 'many bots groups' },
    { reviewId: '3', content: 'Smooth interface and fast uploads.', score: 4, cleaned_content_bert: 'smooth interface fast uploads', cleaned_content_lda: 'smooth interface fast uploads' },
    { reviewId: '4', content: 'No end-to-end encryption for groups.', score: 2, cleaned_content_bert: 'no end to end encryption groups', cleaned_content_lda: 'no end to end encryption groups' },
    { reviewId: '5', content: 'Stickers and media sharing is fun.', score: 5, cleaned_content_bert: 'stickers media sharing fun', cleaned_content_lda: 'stickers media sharing fun' }
  ],
  linkedin: [
    { reviewId: '1', content: 'Great for finding job opportunities.', score: 5, cleaned_content_bert: 'great finding job opportunities', cleaned_content_lda: 'great finding job opportunities' },
    { reviewId: '2', content: 'Feed is filled with irrelevant posts.', score: 3, cleaned_content_bert: 'feed filled irrelevant posts', cleaned_content_lda: 'feed filled irrelevant posts' },
    { reviewId: '3', content: 'Good platform for networking.', score: 4, cleaned_content_bert: 'good platform networking', cleaned_content_lda: 'good platform networking' },
    { reviewId: '4', content: 'Too many notifications and ads.', score: 2, cleaned_content_bert: 'many notifications ads', cleaned_content_lda: 'many notifications ads' },
    { reviewId: '5', content: 'Easy to build a professional profile.', score: 5, cleaned_content_bert: 'easy build professional profile', cleaned_content_lda: 'easy build professional profile' }
  ],
  uber: [
    { reviewId: '1', content: 'Quick and reliable service.', score: 5, cleaned_content_bert: 'quick reliable service', cleaned_content_lda: 'quick reliable service' },
    { reviewId: '2', content: 'App sometimes fails to detect location.', score: 3, cleaned_content_bert: 'app fails detect location', cleaned_content_lda: 'app fails detect location' },
    { reviewId: '3', content: 'Drivers cancel too often.', score: 2, cleaned_content_bert: 'drivers cancel too often', cleaned_content_lda: 'drivers cancel too often' },
    { reviewId: '4', content: 'Fare prices are reasonable.', score: 4, cleaned_content_bert: 'fare prices reasonable', cleaned_content_lda: 'fare prices reasonable' },
    { reviewId: '5', content: 'Helpful support when needed.', score: 4, cleaned_content_bert: 'helpful support needed', cleaned_content_lda: 'helpful support needed' }
  ],
  pinterest: [
    { reviewId: '1', content: 'Great inspiration for art and design.', score: 5, cleaned_content_bert: 'great inspiration art design', cleaned_content_lda: 'great inspiration art design' },
    { reviewId: '2', content: 'Too many ads lately.', score: 2, cleaned_content_bert: 'too many ads lately', cleaned_content_lda: 'too many ads lately' },
    { reviewId: '3', content: 'Boards are fun to organize.', score: 4, cleaned_content_bert: 'boards fun organize', cleaned_content_lda: 'boards fun organize' },
    { reviewId: '4', content: 'App is slow sometimes.', score: 3, cleaned_content_bert: 'app slow sometimes', cleaned_content_lda: 'app slow sometimes' },
    { reviewId: '5', content: 'Lots of creative ideas.', score: 5, cleaned_content_bert: 'lots creative ideas', cleaned_content_lda: 'lots creative ideas' }
  ],
  reddit: [
    { reviewId: '1', content: 'Great for discussions and news.', score: 5, cleaned_content_bert: 'great discussions news', cleaned_content_lda: 'great discussions news' },
    { reviewId: '2', content: 'Toxic comments in some threads.', score: 2, cleaned_content_bert: 'toxic comments some threads', cleaned_content_lda: 'toxic comments some threads' },
    { reviewId: '3', content: 'Subreddits are well organized.', score: 4, cleaned_content_bert: 'subreddits well organized', cleaned_content_lda: 'subreddits well organized' },
    { reviewId: '4', content: 'App crashes when opening links.', score: 3, cleaned_content_bert: 'app crashes opening links', cleaned_content_lda: 'app crashes opening links' },
    { reviewId: '5', content: 'Content variety is great.', score: 5, cleaned_content_bert: 'content variety great', cleaned_content_lda: 'content variety great' }
  ],
  tiktok: [
    { reviewId: '1', content: 'Addictive short videos and trends.', score: 5, cleaned_content_bert: 'addictive short videos trends', cleaned_content_lda: 'addictive short videos trends' },
    { reviewId: '2', content: 'Sometimes inappropriate content.', score: 2, cleaned_content_bert: 'sometimes inappropriate content', cleaned_content_lda: 'sometimes inappropriate content' },
    { reviewId: '3', content: 'Great music and filters.', score: 4, cleaned_content_bert: 'great music filters', cleaned_content_lda: 'great music filters' },
    { reviewId: '4', content: 'Too many repeated videos.', score: 3, cleaned_content_bert: 'too many repeated videos', cleaned_content_lda: 'too many repeated videos' },
    { reviewId: '5', content: 'Easy to share and like videos.', score: 5, cleaned_content_bert: 'easy share like videos', cleaned_content_lda: 'easy share like videos' }
  ],
  zoom: [
    { reviewId: '1', content: 'Excellent for virtual meetings.', score: 5, cleaned_content_bert: 'excellent virtual meetings', cleaned_content_lda: 'excellent virtual meetings' },
    { reviewId: '2', content: 'Occasional connection issues.', score: 3, cleaned_content_bert: 'occasional connection issues', cleaned_content_lda: 'occasional connection issues' },
    { reviewId: '3', content: 'Screen sharing is useful.', score: 4, cleaned_content_bert: 'screen sharing useful', cleaned_content_lda: 'screen sharing useful' },
    { reviewId: '4', content: 'Audio lags during calls.', score: 2, cleaned_content_bert: 'audio lags during calls', cleaned_content_lda: 'audio lags during calls' },
    { reviewId: '5', content: 'Great video quality.', score: 5, cleaned_content_bert: 'great video quality', cleaned_content_lda: 'great video quality' }
  ],
  googlemaps: [
    { reviewId: '1', content: 'Best app for directions.', score: 5, cleaned_content_bert: 'best app directions', cleaned_content_lda: 'best app directions' },
    { reviewId: '2', content: 'Traffic updates are not real-time.', score: 2, cleaned_content_bert: 'traffic updates not real time', cleaned_content_lda: 'traffic updates not real time' },
    { reviewId: '3', content: 'Search and explore are great.', score: 4, cleaned_content_bert: 'search explore great', cleaned_content_lda: 'search explore great' },
    { reviewId: '4', content: 'Voice navigation needs improvement.', score: 3, cleaned_content_bert: 'voice navigation needs improvement', cleaned_content_lda: 'voice navigation needs improvement' },
    { reviewId: '5', content: 'Accurate location tracking.', score: 5, cleaned_content_bert: 'accurate location tracking', cleaned_content_lda: 'accurate location tracking' }
  ],



  whatsapp: [
    { reviewId: '1', content: 'Reliable and fast messaging app.', score: 5, cleaned_content_bert: 'reliable fast messaging app', cleaned_content_lda: 'reliable fast messaging app' },
    { reviewId: '2', content: 'Sometimes fails to backup chats.', score: 3, cleaned_content_bert: 'fails backup chats', cleaned_content_lda: 'fails backup chats' },
    { reviewId: '3', content: 'Love the voice call quality.', score: 4, cleaned_content_bert: 'love voice call quality', cleaned_content_lda: 'love voice call quality' },
    { reviewId: '4', content: 'Too many notification bugs lately.', score: 2, cleaned_content_bert: 'many notification bugs lately', cleaned_content_lda: 'many notification bugs lately' },
    { reviewId: '5', content: 'Status feature is amazing.', score: 5, cleaned_content_bert: 'status feature amazing', cleaned_content_lda: 'status feature amazing' }
  ],
  microsoftword: [
    { reviewId: '1', content: 'Perfect for editing and saving documents.', score: 5, cleaned_content_bert: 'perfect editing saving documents', cleaned_content_lda: 'perfect editing saving documents' },
    { reviewId: '2', content: 'Sometimes formatting gets messy.', score: 3, cleaned_content_bert: 'formatting gets messy', cleaned_content_lda: 'formatting gets messy' },
    { reviewId: '3', content: 'Great template options.', score: 4, cleaned_content_bert: 'great template options', cleaned_content_lda: 'great template options' },
    { reviewId: '4', content: 'Crashes when working with large files.', score: 2, cleaned_content_bert: 'crashes working large files', cleaned_content_lda: 'crashes working large files' },
    { reviewId: '5', content: 'Easy to use and intuitive interface.', score: 5, cleaned_content_bert: 'easy use intuitive interface', cleaned_content_lda: 'easy use intuitive interface' }
  ],
  powerpoint: [
    { reviewId: '1', content: 'Ideal for creating presentations.', score: 5, cleaned_content_bert: 'ideal creating presentations', cleaned_content_lda: 'ideal creating presentations' },
    { reviewId: '2', content: 'Transitions and animations are smooth.', score: 4, cleaned_content_bert: 'transitions animations smooth', cleaned_content_lda: 'transitions animations smooth' },
    { reviewId: '3', content: 'Sometimes lags on slide design.', score: 3, cleaned_content_bert: 'sometimes lags slide design', cleaned_content_lda: 'sometimes lags slide design' },
    { reviewId: '4', content: 'Exporting to PDF is quick.', score: 5, cleaned_content_bert: 'exporting pdf quick', cleaned_content_lda: 'exporting pdf quick' },
    { reviewId: '5', content: 'Missing some design flexibility.', score: 3, cleaned_content_bert: 'missing design flexibility', cleaned_content_lda: 'missing design flexibility' }
  ],
};
// Mock topic data
const mockTopicData: Record<string, TopicData[]> = {
  amazon: [
    { topic_id: 1, mapped_quality_attribute: 'reliability', count: 17.30 },
    { topic_id: 2, mapped_quality_attribute: 'maintainability', count: 14.70 },
    { topic_id: 3, mapped_quality_attribute: 'efficiency', count: 10.85 },
    { topic_id: 4, mapped_quality_attribute: 'compatibility', count: 9.17 },
    { topic_id: 5, mapped_quality_attribute: 'performance', count: 9.07 },
    { topic_id: 6, mapped_quality_attribute: 'usability', count: 8.64 },
    { topic_id: 7, mapped_quality_attribute: 'functionality', count: 8.56 },
    { topic_id: 8, mapped_quality_attribute: 'design', count: 8.52 },
    { topic_id: 9, mapped_quality_attribute: 'support', count: 6.91 },
    { topic_id: 10, mapped_quality_attribute: 'security', count: 6.27 }
  ],
  candycrush: [
    { topic_id: 1, mapped_quality_attribute: 'efficiency', count: 26.05 },
    { topic_id: 2, mapped_quality_attribute: 'functionality', count: 18.36 },
    { topic_id: 3, mapped_quality_attribute: 'performance', count: 10.88 },
    { topic_id: 4, mapped_quality_attribute: 'support', count: 10.64 },
    { topic_id: 5, mapped_quality_attribute: 'maintainability', count: 6.27 },
    { topic_id: 6, mapped_quality_attribute: 'security', count: 6.26 },
    { topic_id: 7, mapped_quality_attribute: 'usability', count: 6.07 },
    { topic_id: 8, mapped_quality_attribute: 'reliability', count: 5.73 },
    { topic_id: 9, mapped_quality_attribute: 'design', count: 5.45 },
    { topic_id: 10, mapped_quality_attribute: 'compatibility', count: 4.29 }
  ],
  cashapp: [
    { topic_id: 1, mapped_quality_attribute: 'maintainability', count: 20.60 },
    { topic_id: 2, mapped_quality_attribute: 'support', count: 14.01 },
    { topic_id: 3, mapped_quality_attribute: 'compatibility', count: 11.62 },
    { topic_id: 4, mapped_quality_attribute: 'security', count: 11.39 },
    { topic_id: 5, mapped_quality_attribute: 'functionality', count: 9.29 },
    { topic_id: 6, mapped_quality_attribute: 'design', count: 7.17 },
    { topic_id: 7, mapped_quality_attribute: 'usability', count: 7.08 },
    { topic_id: 8, mapped_quality_attribute: 'performance', count: 7.07 },
    { topic_id: 9, mapped_quality_attribute: 'efficiency', count: 6.74 },
    { topic_id: 10, mapped_quality_attribute: 'reliability', count: 5.03 }
  ],
  facebook: [
    { topic_id: 1, mapped_quality_attribute: 'reliability', count: 17.82 },
    { topic_id: 2, mapped_quality_attribute: 'security', count: 12.81 },
    { topic_id: 3, mapped_quality_attribute: 'performance', count: 11.13 },
    { topic_id: 4, mapped_quality_attribute: 'design', count: 10.87 },
    { topic_id: 5, mapped_quality_attribute: 'support', count: 10.32 },
    { topic_id: 6, mapped_quality_attribute: 'usability', count: 9.67 },
    { topic_id: 7, mapped_quality_attribute: 'functionality', count: 7.51 },
    { topic_id: 8, mapped_quality_attribute: 'compatibility', count: 7.38 },
    { topic_id: 9, mapped_quality_attribute: 'efficiency', count: 7.05 },
    { topic_id: 10, mapped_quality_attribute: 'maintainability', count: 5.44 }
  ],
  instagram: [
    { topic_id: 1, mapped_quality_attribute: 'functionality', count: 18.51 },
    { topic_id: 2, mapped_quality_attribute: 'reliability', count: 11.74 },
    { topic_id: 3, mapped_quality_attribute: 'security', count: 9.95 },
    { topic_id: 4, mapped_quality_attribute: 'usability', count: 9.44 },
    { topic_id: 5, mapped_quality_attribute: 'support', count: 9.25 },
    { topic_id: 6, mapped_quality_attribute: 'design', count: 8.62 },
    { topic_id: 7, mapped_quality_attribute: 'maintainability', count: 8.50 },
    { topic_id: 8, mapped_quality_attribute: 'compatibility', count: 8.42 },
    { topic_id: 9, mapped_quality_attribute: 'efficiency', count: 7.80 },
    { topic_id: 10, mapped_quality_attribute: 'performance', count: 7.78 }
  ],
  twitter: [
    { topic_id: 1, mapped_quality_attribute: 'design', count: 19.88 },
    { topic_id: 2, mapped_quality_attribute: 'functionality', count: 14.15 },
    { topic_id: 3, mapped_quality_attribute: 'support', count: 12.70 },
    { topic_id: 4, mapped_quality_attribute: 'performance', count: 9.93 },
    { topic_id: 5, mapped_quality_attribute: 'security', count: 8.50 },
    { topic_id: 6, mapped_quality_attribute: 'reliability', count: 7.71 },
    { topic_id: 7, mapped_quality_attribute: 'usability', count: 7.19 },
    { topic_id: 8, mapped_quality_attribute: 'compatibility', count: 6.77 },
    { topic_id: 9, mapped_quality_attribute: 'efficiency', count: 6.65 },
    { topic_id: 10, mapped_quality_attribute: 'maintainability', count: 6.51 }
  ],
  youtube: [
    { topic_id: 1, mapped_quality_attribute: 'usability', count: 18.04 },
    { topic_id: 2, mapped_quality_attribute: 'security', count: 16.48 },
    { topic_id: 3, mapped_quality_attribute: 'reliability', count: 12.40 },
    { topic_id: 4, mapped_quality_attribute: 'support', count: 11.81 },
    { topic_id: 5, mapped_quality_attribute: 'design', count: 11.44 },
    { topic_id: 6, mapped_quality_attribute: 'maintainability', count: 7.77 },
    { topic_id: 7, mapped_quality_attribute: 'performance', count: 7.46 },
    { topic_id: 8, mapped_quality_attribute: 'functionality', count: 5.51 },
    { topic_id: 9, mapped_quality_attribute: 'compatibility', count: 5.46 },
    { topic_id: 10, mapped_quality_attribute: 'efficiency', count: 3.63 }
  ],
  coursera: [
    { topic_id: 1, mapped_quality_attribute: 'efficiency', count: 27.39 },
    { topic_id: 2, mapped_quality_attribute: 'functionality', count: 17.69 },
    { topic_id: 3, mapped_quality_attribute: 'design', count: 7.99 },
    { topic_id: 4, mapped_quality_attribute: 'compatibility', count: 7.94 },
    { topic_id: 5, mapped_quality_attribute: 'reliability', count: 7.85 },
    { topic_id: 6, mapped_quality_attribute: 'maintainability', count: 7.65 },
    { topic_id: 7, mapped_quality_attribute: 'support', count: 7.18 },
    { topic_id: 8, mapped_quality_attribute: 'usability', count: 6.37 },
    { topic_id: 9, mapped_quality_attribute: 'performance', count: 5.34 },
    { topic_id: 10, mapped_quality_attribute: 'security', count: 4.60 }
  ],
  disneyplus: [
    { topic_id: 1, mapped_quality_attribute: 'functionality', count: 31.20 },
    { topic_id: 2, mapped_quality_attribute: 'efficiency', count: 12.96 },
    { topic_id: 3, mapped_quality_attribute: 'reliability', count: 9.47 },
    { topic_id: 4, mapped_quality_attribute: 'performance', count: 8.95 },
    { topic_id: 5, mapped_quality_attribute: 'security', count: 8.34 },
    { topic_id: 6, mapped_quality_attribute: 'maintainability', count: 8.13 },
    { topic_id: 7, mapped_quality_attribute: 'compatibility', count: 6.57 },
    { topic_id: 8, mapped_quality_attribute: 'support', count: 5.19 },
    { topic_id: 9, mapped_quality_attribute: 'design', count: 4.96 },
    { topic_id: 10, mapped_quality_attribute: 'usability', count: 4.22 }
  ],
  dropbox: [
    { topic_id: 1, mapped_quality_attribute: 'efficiency', count: 14.72 },
    { topic_id: 2, mapped_quality_attribute: 'design', count: 13.92 },
    { topic_id: 3, mapped_quality_attribute: 'security', count: 10.09 },
    { topic_id: 4, mapped_quality_attribute: 'performance', count: 9.43 },
    { topic_id: 5, mapped_quality_attribute: 'usability', count: 9.18 },
    { topic_id: 6, mapped_quality_attribute: 'compatibility', count: 9.09 },
    { topic_id: 7, mapped_quality_attribute: 'maintainability', count: 8.87 },
    { topic_id: 8, mapped_quality_attribute: 'functionality', count: 8.77 },
    { topic_id: 9, mapped_quality_attribute: 'reliability', count: 8.44 },
    { topic_id: 10, mapped_quality_attribute: 'support', count: 7.49 }
  ],  duolingo: [
    { topic_id: 1, mapped_quality_attribute: 'functionality', count: 28.02 },
    { topic_id: 2, mapped_quality_attribute: 'performance', count: 14.34 },
    { topic_id: 3, mapped_quality_attribute: 'usability', count: 9.93 },
    { topic_id: 4, mapped_quality_attribute: 'maintainability', count: 9.19 },
    { topic_id: 5, mapped_quality_attribute: 'support', count: 8.32 },
    { topic_id: 6, mapped_quality_attribute: 'design', count: 8.21 },
    { topic_id: 7, mapped_quality_attribute: 'compatibility', count: 6.71 },
    { topic_id: 8, mapped_quality_attribute: 'reliability', count: 5.57 },
    { topic_id: 9, mapped_quality_attribute: 'security', count: 4.99 },
    { topic_id: 10, mapped_quality_attribute: 'efficiency', count: 4.71 }
  ],
  messenger: [
    { topic_id: 1, mapped_quality_attribute: 'functionality', count: 33.32 },
    { topic_id: 2, mapped_quality_attribute: 'security', count: 14.02 },
    { topic_id: 3, mapped_quality_attribute: 'performance', count: 11.11 },
    { topic_id: 4, mapped_quality_attribute: 'efficiency', count: 8.53 },
    { topic_id: 5, mapped_quality_attribute: 'usability', count: 8.42 },
    { topic_id: 6, mapped_quality_attribute: 'support', count: 5.64 },
    { topic_id: 7, mapped_quality_attribute: 'reliability', count: 5.45 },
    { topic_id: 8, mapped_quality_attribute: 'maintainability', count: 5.33 },
    { topic_id: 9, mapped_quality_attribute: 'design', count: 4.32 },
    { topic_id: 10, mapped_quality_attribute: 'compatibility', count: 3.85 }
  ],
  facebook_lite: [
    { topic_id: 1, mapped_quality_attribute: 'support', count: 22.39 },
    { topic_id: 2, mapped_quality_attribute: 'usability', count: 15.69 },
    { topic_id: 3, mapped_quality_attribute: 'reliability', count: 10.70 },
    { topic_id: 4, mapped_quality_attribute: 'design', count: 10.41 },
    { topic_id: 5, mapped_quality_attribute: 'efficiency', count: 10.09 },
    { topic_id: 6, mapped_quality_attribute: 'maintainability', count: 7.74 },
    { topic_id: 7, mapped_quality_attribute: 'compatibility', count: 6.70 },
    { topic_id: 8, mapped_quality_attribute: 'performance', count: 6.63 },
    { topic_id: 9, mapped_quality_attribute: 'functionality', count: 5.21 },
    { topic_id: 10, mapped_quality_attribute: 'security', count: 4.43 }
  ],
  gmail: [
    { topic_id: 1, mapped_quality_attribute: 'compatibility', count: 21.32 },
    { topic_id: 2, mapped_quality_attribute: 'performance', count: 13.99 },
    { topic_id: 3, mapped_quality_attribute: 'reliability', count: 13.92 },
    { topic_id: 4, mapped_quality_attribute: 'efficiency', count: 11.59 },
    { topic_id: 5, mapped_quality_attribute: 'functionality', count: 8.43 },
    { topic_id: 6, mapped_quality_attribute: 'security', count: 7.04 },
    { topic_id: 7, mapped_quality_attribute: 'support', count: 6.64 },
    { topic_id: 8, mapped_quality_attribute: 'design', count: 5.79 },
    { topic_id: 9, mapped_quality_attribute: 'maintainability', count: 5.67 },
    { topic_id: 10, mapped_quality_attribute: 'usability', count: 5.61 }
  ],
  snapchat: [
    { topic_id: 1, mapped_quality_attribute: 'security', count: 15.62 },
    { topic_id: 2, mapped_quality_attribute: 'reliability', count: 13.79 },
    { topic_id: 3, mapped_quality_attribute: 'support', count: 11.53 },
    { topic_id: 4, mapped_quality_attribute: 'functionality', count: 9.99 },
    { topic_id: 5, mapped_quality_attribute: 'usability', count: 8.93 },
    { topic_id: 6, mapped_quality_attribute: 'design', count: 8.81 },
    { topic_id: 7, mapped_quality_attribute: 'performance', count: 8.77 },
    { topic_id: 8, mapped_quality_attribute: 'compatibility', count: 8.43 },
    { topic_id: 9, mapped_quality_attribute: 'efficiency', count: 7.89 },
    { topic_id: 10, mapped_quality_attribute: 'maintainability', count: 6.24 }
  ],  netflix: [
    { topic_id: 1, mapped_quality_attribute: 'maintainability', count: 16.65 },
    { topic_id: 2, mapped_quality_attribute: 'security', count: 11.07 },
    { topic_id: 3, mapped_quality_attribute: 'design', count: 10.63 },
    { topic_id: 4, mapped_quality_attribute: 'support', count: 10.00 },
    { topic_id: 5, mapped_quality_attribute: 'compatibility', count: 9.69 },
    { topic_id: 6, mapped_quality_attribute: 'efficiency', count: 9.49 },
    { topic_id: 7, mapped_quality_attribute: 'performance', count: 8.65 },
    { topic_id: 8, mapped_quality_attribute: 'reliability', count: 8.54 },
    { topic_id: 9, mapped_quality_attribute: 'functionality', count: 8.23 },
    { topic_id: 10, mapped_quality_attribute: 'usability', count: 7.06 }
  ],
  spotify: [
    { topic_id: 1, mapped_quality_attribute: 'design', count: 28.56 },
    { topic_id: 2, mapped_quality_attribute: 'usability', count: 21.46 },
    { topic_id: 3, mapped_quality_attribute: 'maintainability', count: 8.91 },
    { topic_id: 4, mapped_quality_attribute: 'compatibility', count: 6.95 },
    { topic_id: 5, mapped_quality_attribute: 'functionality', count: 6.92 },
    { topic_id: 6, mapped_quality_attribute: 'performance', count: 6.43 },
    { topic_id: 7, mapped_quality_attribute: 'efficiency', count: 5.90 },
    { topic_id: 8, mapped_quality_attribute: 'reliability', count: 5.09 },
    { topic_id: 9, mapped_quality_attribute: 'security', count: 5.03 },
    { topic_id: 10, mapped_quality_attribute: 'support', count: 4.76 }
  ],
  telegram: [
    { topic_id: 1, mapped_quality_attribute: 'maintainability', count: 17.46 },
    { topic_id: 2, mapped_quality_attribute: 'design', count: 12.39 },
    { topic_id: 3, mapped_quality_attribute: 'efficiency', count: 12.27 },
    { topic_id: 4, mapped_quality_attribute: 'security', count: 10.28 },
    { topic_id: 5, mapped_quality_attribute: 'usability', count: 8.97 },
    { topic_id: 6, mapped_quality_attribute: 'support', count: 8.54 },
    { topic_id: 7, mapped_quality_attribute: 'functionality', count: 8.32 },
    { topic_id: 8, mapped_quality_attribute: 'performance', count: 7.63 },
    { topic_id: 9, mapped_quality_attribute: 'compatibility', count: 7.11 },
    { topic_id: 10, mapped_quality_attribute: 'reliability', count: 7.03 }
  ],
  linkedin: [
    { topic_id: 1, mapped_quality_attribute: 'efficiency', count: 22.29 },
    { topic_id: 2, mapped_quality_attribute: 'support', count: 10.90 },
    { topic_id: 3, mapped_quality_attribute: 'usability', count: 10.61 },
    { topic_id: 4, mapped_quality_attribute: 'compatibility', count: 9.72 },
    { topic_id: 5, mapped_quality_attribute: 'maintainability', count: 8.80 },
    { topic_id: 6, mapped_quality_attribute: 'functionality', count: 8.45 },
    { topic_id: 7, mapped_quality_attribute: 'performance', count: 8.18 },
    { topic_id: 8, mapped_quality_attribute: 'design', count: 7.78 },
    { topic_id: 9, mapped_quality_attribute: 'security', count: 6.79 },
    { topic_id: 10, mapped_quality_attribute: 'reliability', count: 6.49 }
  ],
  uber: [
    { topic_id: 1, mapped_quality_attribute: 'usability', count: 20.07 },
    { topic_id: 2, mapped_quality_attribute: 'design', count: 12.34 },
    { topic_id: 3, mapped_quality_attribute: 'performance', count: 11.89 },
    { topic_id: 4, mapped_quality_attribute: 'reliability', count: 11.69 },
    { topic_id: 5, mapped_quality_attribute: 'security', count: 8.64 },
    { topic_id: 6, mapped_quality_attribute: 'maintainability', count: 8.53 },
    { topic_id: 7, mapped_quality_attribute: 'efficiency', count: 8.05 },
    { topic_id: 8, mapped_quality_attribute: 'functionality', count: 7.31 },
    { topic_id: 9, mapped_quality_attribute: 'compatibility', count: 6.29 },
    { topic_id: 10, mapped_quality_attribute: 'support', count: 5.18 }
  ],  pinterest: [
    { topic_id: 1, mapped_quality_attribute: 'support', count: 19.34 },
    { topic_id: 2, mapped_quality_attribute: 'performance', count: 12.70 },
    { topic_id: 3, mapped_quality_attribute: 'security', count: 9.74 },
    { topic_id: 4, mapped_quality_attribute: 'maintainability', count: 9.07 },
    { topic_id: 5, mapped_quality_attribute: 'efficiency', count: 9.03 },
    { topic_id: 6, mapped_quality_attribute: 'functionality', count: 8.80 },
    { topic_id: 7, mapped_quality_attribute: 'design', count: 8.36 },
    { topic_id: 8, mapped_quality_attribute: 'reliability', count: 8.30 },
    { topic_id: 9, mapped_quality_attribute: 'compatibility', count: 7.64 },
    { topic_id: 10, mapped_quality_attribute: 'usability', count: 7.02 }
  ],
  reddit: [
    { topic_id: 1, mapped_quality_attribute: 'maintainability', count: 18.40 },
    { topic_id: 2, mapped_quality_attribute: 'efficiency', count: 12.38 },
    { topic_id: 3, mapped_quality_attribute: 'support', count: 11.47 },
    { topic_id: 4, mapped_quality_attribute: 'functionality', count: 11.33 },
    { topic_id: 5, mapped_quality_attribute: 'performance', count: 9.55 },
    { topic_id: 6, mapped_quality_attribute: 'reliability', count: 8.84 },
    { topic_id: 7, mapped_quality_attribute: 'security', count: 7.52 },
    { topic_id: 8, mapped_quality_attribute: 'compatibility', count: 7.19 },
    { topic_id: 9, mapped_quality_attribute: 'usability', count: 6.72 },
    { topic_id: 10, mapped_quality_attribute: 'design', count: 6.58 }
  ],
  tiktok: [
    { topic_id: 1, mapped_quality_attribute: 'support', count: 21.87 },
    { topic_id: 2, mapped_quality_attribute: 'functionality', count: 16.62 },
    { topic_id: 3, mapped_quality_attribute: 'reliability', count: 10.91 },
    { topic_id: 4, mapped_quality_attribute: 'performance', count: 9.26 },
    { topic_id: 5, mapped_quality_attribute: 'maintainability', count: 9.20 },
    { topic_id: 6, mapped_quality_attribute: 'design', count: 8.44 },
    { topic_id: 7, mapped_quality_attribute: 'efficiency', count: 7.77 },
    { topic_id: 8, mapped_quality_attribute: 'usability', count: 5.95 },
    { topic_id: 9, mapped_quality_attribute: 'security', count: 5.33 },
    { topic_id: 10, mapped_quality_attribute: 'compatibility', count: 4.64 }
  ],
  zoom: [
    { topic_id: 1, mapped_quality_attribute: 'functionality', count: 20.96 },
    { topic_id: 2, mapped_quality_attribute: 'design', count: 16.27 },
    { topic_id: 3, mapped_quality_attribute: 'support', count: 14.24 },
    { topic_id: 4, mapped_quality_attribute: 'usability', count: 9.39 },
    { topic_id: 5, mapped_quality_attribute: 'reliability', count: 8.86 },
    { topic_id: 6, mapped_quality_attribute: 'security', count: 8.02 },
    { topic_id: 7, mapped_quality_attribute: 'maintainability', count: 6.17 },
    { topic_id: 8, mapped_quality_attribute: 'performance', count: 5.65 },
    { topic_id: 9, mapped_quality_attribute: 'compatibility', count: 5.44 },
    { topic_id: 10, mapped_quality_attribute: 'efficiency', count: 5.01 }
  ],
  googlemaps: [
    { topic_id: 1, mapped_quality_attribute: 'design', count: 31.54 },
    { topic_id: 2, mapped_quality_attribute: 'maintainability', count: 16.71 },
    { topic_id: 3, mapped_quality_attribute: 'compatibility', count: 8.07 },
    { topic_id: 4, mapped_quality_attribute: 'reliability', count: 7.33 },
    { topic_id: 5, mapped_quality_attribute: 'performance', count: 6.50 },
    { topic_id: 6, mapped_quality_attribute: 'security', count: 6.36 },
    { topic_id: 7, mapped_quality_attribute: 'functionality', count: 6.20 },
    { topic_id: 8, mapped_quality_attribute: 'support', count: 6.12 },
    { topic_id: 9, mapped_quality_attribute: 'usability', count: 6.10 },
    { topic_id: 10, mapped_quality_attribute: 'efficiency', count: 5.06 }
  ],
  whatsapp: [
    { topic_id: 1, mapped_quality_attribute: 'performance', count: 25.93 },
    { topic_id: 2, mapped_quality_attribute: 'maintainability', count: 12.01 },
    { topic_id: 3, mapped_quality_attribute: 'support', count: 11.17 },
    { topic_id: 4, mapped_quality_attribute: 'reliability', count: 8.89 },
    { topic_id: 5, mapped_quality_attribute: 'design', count: 8.06 },
    { topic_id: 6, mapped_quality_attribute: 'compatibility', count: 7.98 },
    { topic_id: 7, mapped_quality_attribute: 'security', count: 7.35 },
    { topic_id: 8, mapped_quality_attribute: 'functionality', count: 7.25 },
    { topic_id: 9, mapped_quality_attribute: 'efficiency', count: 6.28 },
    { topic_id: 10, mapped_quality_attribute: 'usability', count: 5.07 }
  ],
  microsoftword: [
    { topic_id: 1, mapped_quality_attribute: 'performance', count: 39.27 },
    { topic_id: 2, mapped_quality_attribute: 'support', count: 11.26 },
    { topic_id: 3, mapped_quality_attribute: 'design', count: 7.24 },
    { topic_id: 4, mapped_quality_attribute: 'efficiency', count: 6.93 },
    { topic_id: 5, mapped_quality_attribute: 'functionality', count: 6.74 },
    { topic_id: 6, mapped_quality_attribute: 'security', count: 6.46 },
    { topic_id: 7, mapped_quality_attribute: 'maintainability', count: 6.09 },
    { topic_id: 8, mapped_quality_attribute: 'reliability', count: 6.04 },
    { topic_id: 9, mapped_quality_attribute: 'usability', count: 5.00 },
    { topic_id: 10, mapped_quality_attribute: 'compatibility', count: 4.97 }
  ],
  powerpoint: [
    { topic_id: 1, mapped_quality_attribute: 'compatibility', count: 19.46 },
    { topic_id: 2, mapped_quality_attribute: 'security', count: 14.48 },
    { topic_id: 3, mapped_quality_attribute: 'reliability', count: 11.71 },
    { topic_id: 4, mapped_quality_attribute: 'maintainability', count: 11.35 },
    { topic_id: 5, mapped_quality_attribute: 'usability', count: 8.54 },
    { topic_id: 6, mapped_quality_attribute: 'performance', count: 7.98 },
    { topic_id: 7, mapped_quality_attribute: 'support', count: 7.27 },
    { topic_id: 8, mapped_quality_attribute: 'design', count: 6.93 },
    { topic_id: 9, mapped_quality_attribute: 'efficiency', count: 6.36 },
    { topic_id: 10, mapped_quality_attribute: 'functionality', count: 5.91 }
  ]
};

