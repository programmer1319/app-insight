import React from 'react';
import { Review } from '../types';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No reviews available for this app.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.reviewId} className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.score ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {review.score}/5
              </span>
            </div>
            <div>
              {review.score >= 4 ? (
                <ThumbsUp className="w-5 h-5 text-green-500" />
              ) : review.score <= 2 ? (
                <ThumbsDown className="w-5 h-5 text-red-500" />
              ) : null}
            </div>
          </div>
          <p className="text-gray-700">{review.content}</p>
          <div className="mt-3 pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              <span className="font-medium">Cleaned content:</span> {review.cleaned_content_bert}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;