export interface App {
  id: string;
  name: string;
  category: string;
  icon: string;
}

export interface Review {
  reviewId: string;
  content: string;
  score: number;
  cleaned_content_bert: string;
  cleaned_content_lda: string;
  date?: string;
}

export interface TopicData {
  topic_id: number;
  mapped_quality_attribute: string;
  count: number;
}

export interface AppStats {
  totalReviews: number;
  averageRating: number;
  sentimentDistribution: {
    positive: number;
    negative: number;
  };
  topWords: Array<{text: string, value: number}>;
}