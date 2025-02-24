import React from 'react';
import { Link } from 'react-router';
ErrorBoundary
const ErrorComponent = ({ 
  error, 
  resetErrorBoundary,
  message = "Something went wrong",
  showHome = true,
  showRefresh = true 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center">
      {/* Error Icon */}
      <div className="mb-6 text-red-500">
        <svg 
          className="w-16 h-16 mx-auto" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
          />
        </svg>
      </div>

      {/* Error Message */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {message}
      </h2>
      
      {/* Error Details (only in development) */}
      {process.env.NODE_ENV === 'development' && error && (
        <pre className="mb-4 p-4 bg-gray-100 rounded-md text-left overflow-auto max-w-full text-sm text-gray-700">
          {error.message}
        </pre>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        {showRefresh && (
          <button
            onClick={resetErrorBoundary}
            className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 
              transition-colors duration-200 focus:outline-none focus:ring-2 
              focus:ring-emerald-500 focus:ring-offset-2"
          >
            Try Again
          </button>
        )}
        
        {showHome && (
          <Link
            to="/"
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 
              transition-colors duration-200 focus:outline-none focus:ring-2 
              focus:ring-gray-500 focus:ring-offset-2"
          >
            Back to Home
          </Link>
        )}
      </div>
    </div>
  );
};

export default ErrorComponent; 