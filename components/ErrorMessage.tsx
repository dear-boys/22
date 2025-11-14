
import React from 'react';

interface ErrorMessageProps {
  message: string | null;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) {
    return null;
  }

  return <div className="text-red-400 mt-4 text-center">{message}</div>;
};
