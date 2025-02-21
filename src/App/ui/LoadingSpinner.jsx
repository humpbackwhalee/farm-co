import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'emerald' }) => {
  // Size variants
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  };

  // Color variants
  const colors = {
    emerald: 'border-emerald-500',
    gray: 'border-gray-500',
    white: 'border-white'
  };

  return (
    <div className="relative flex justify-center items-center">
      <div
        className={`
          ${sizes[size]}
          animate-spin
          rounded-full
          border-2
          border-t-transparent
          ${colors[color]}
        `}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner; 