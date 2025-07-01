import React from 'react';
import ReactWordcloud from 'react-wordcloud';

interface WordCloudProps {
  words: Array<{
    text: string;
    value: number;
  }>;
}

const WordCloud: React.FC<WordCloudProps> = ({ words }) => {
  const options = {
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
    enableTooltip: true,
    deterministic: false,
    fontFamily: 'impact',
    fontSizes: [20, 60],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Most Frequent Words</h3>
      <div style={{ height: 300 }}>
        {words.length > 0 ? (
          <ReactWordcloud words={words} options={options} />
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-500">No word frequency data available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordCloud;