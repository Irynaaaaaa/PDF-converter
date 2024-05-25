import React from 'react';

const DefaultPreview = ({ text }) => {
  return (
    <div className="w-full h-full rounded-lg border-2 border-blue-400/50 bg-gray-100/50 flex items-center justify-center">
      <span className="text-blue-400 text-2xl">{text}</span>
    </div>
  );
};

export default DefaultPreview;
