
import React from 'react';
import { Spinner } from './Spinner';

interface GenerateButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ isLoading, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <>
          <Spinner />
          <span className="mr-2">در حال پردازش...</span>
        </>
      ) : (
        <span>تولید محتوا</span>
      )}
    </button>
  );
};
