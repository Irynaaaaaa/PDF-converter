import React from 'react';

const DefaultPreview = ({ text }) => {
  return (
    <div className="w-full h-full rounded-md border-2 border-blue bg-gray-100/50 flex items-center justify-center">
      <span className="text-blue-bright text-2xl">{text}</span>
    </div>
  );
};

export default DefaultPreview;
