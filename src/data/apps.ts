import { App } from '../types';
import {
  Smartphone, MessageCircle, ShoppingCart, Camera, Music, Map, Navigation, Mail,
  Calendar, FileText, Clock, Film, Image, Layers, Play, Send, Shield, Video, Twitter,
  Users, Youtube, Circle, Wallet, Gamepad
} from 'lucide-react';

// Map of app icons using Lucide React components
export const appIcons = {
  amazon: ShoppingCart,
  candycrush: Gamepad,
  cashapp: Wallet,
  facebook: MessageCircle,
  instagram: Camera,
  twitter: Twitter,
  youtube: Youtube,
  coursera: Circle,
  disneyplus: Play,
  dropbox: Layers,
  duolingo: Layers,
  messenger: MessageCircle,
  facebook_lite: MessageCircle,
  gmail: Mail,
  snapchat: Clock,
  netflix: Film,
  spotify: Music,
  telegram: Send,
  linkedin: Users,
  uber: Map,
  pinterest: Image,
  reddit: MessageCircle,
  tiktok: Video,
  zoom: Video,
  googlemaps: Navigation,
  whatsapp: MessageCircle,
  microsoftword: FileText,
  powerpoint: FileText,
  default: Smartphone
};

// Full list of apps with name, category, and icon
export const apps: App[] = [
  { id: 'amazon', name: 'Amazon', category: 'Shopping', icon: 'amazon' },
  { id: 'candycrush', name: 'Candy Crush', category: 'Games', icon: 'candycrush' },
  { id: 'cashapp', name: 'Cash App', category: 'Finance', icon: 'cashapp' },
  { id: 'facebook', name: 'Facebook', category: 'Social Media', icon: 'facebook' },
  { id: 'instagram', name: 'Instagram', category: 'Social Media', icon: 'instagram' },
  { id: 'twitter', name: 'Twitter', category: 'Social Media', icon: 'twitter' },
  { id: 'youtube', name: 'YouTube', category: 'Video', icon: 'youtube' },
  { id: 'coursera', name: 'Coursera', category: 'Education', icon: 'coursera' },
  { id: 'disneyplus', name: 'Disney+', category: 'Entertainment', icon: 'disneyplus' },
  { id: 'dropbox', name: 'Dropbox', category: 'Productivity', icon: 'dropbox' },
  { id: 'duolingo', name: 'Duolingo', category: 'Education', icon: 'duolingo' },
  { id: 'messenger', name: 'Messenger', category: 'Messaging', icon: 'messenger' },
  { id: 'facebook_lite', name: 'Facebook Lite', category: 'Social Media', icon: 'facebook_lite' },
  { id: 'gmail', name: 'Gmail', category: 'Email', icon: 'gmail' },
  { id: 'snapchat', name: 'Snapchat', category: 'Social Media', icon: 'snapchat' },
  { id: 'netflix', name: 'Netflix', category: 'Entertainment', icon: 'netflix' },
  { id: 'spotify', name: 'Spotify', category: 'Music', icon: 'spotify' },
  { id: 'telegram', name: 'Telegram', category: 'Messaging', icon: 'telegram' },
  { id: 'linkedin', name: 'LinkedIn', category: 'Business', icon: 'linkedin' },
  { id: 'uber', name: 'Uber', category: 'Transport', icon: 'uber' },
  { id: 'pinterest', name: 'Pinterest', category: 'Inspiration', icon: 'pinterest' },
  { id: 'reddit', name: 'Reddit', category: 'Community', icon: 'reddit' },
  { id: 'tiktok', name: 'TikTok', category: 'Entertainment', icon: 'tiktok' },
  { id: 'zoom', name: 'Zoom', category: 'Communication', icon: 'zoom' },
  { id: 'googlemaps', name: 'Google Maps', category: 'Navigation', icon: 'googlemaps' },
  { id: 'whatsapp', name: 'WhatsApp', category: 'Messaging', icon: 'whatsapp' },
  { id: 'microsoftword', name: 'Microsoft Word', category: 'Productivity', icon: 'microsoftword' },
  { id: 'powerpoint', name: 'PowerPoint', category: 'Productivity', icon: 'powerpoint' }
];

// Get all unique categories
export const categories = [...new Set(apps.map(app => app.category))];

// Function to get icon component by app id
export const getAppIcon = (appId: string) => {
  const iconName = apps.find(app => app.id === appId)?.icon || 'default';
  return appIcons[iconName as keyof typeof appIcons] || appIcons.default;
};
