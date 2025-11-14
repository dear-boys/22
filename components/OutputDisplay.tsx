
import React from 'react';
import { GenerationType } from '../types';

interface OutputDisplayProps {
  output: string;
  type: GenerationType;
  isLoading: boolean;
  prompt: string;
}

export const OutputDisplay: React.FC<OutputDisplayProps> = ({ output, type, isLoading, prompt }) => {
  const renderContent = () => {
    if (isLoading) {
      return <p className="text-gray-500">در حال تولید محتوا...</p>;
    }

    if (!output) {
      return <p className="text-gray-500">محتوای تولید شده در اینجا نمایش داده خواهد شد.</p>;
    }

    if (type === GenerationType.Image) {
        if (output.startsWith('data:image')) {
            return (
                <img
                src={output}
                alt={prompt || 'Generated Image'}
                className="rounded-lg shadow-lg max-w-full h-auto mx-auto mt-4 border border-[#30363d]"
                style={{ maxWidth: '400px' }}
                />
            );
        } else {
             return (
                <div className="bg-[#0d1117] p-4 rounded-lg whitespace-pre-wrap text-red-400">
                    {output}
                </div>
            );
        }
    }

    // Default to text
    return (
      <div className="bg-[#0d1117] p-4 rounded-lg whitespace-pre-wrap text-gray-300">
        {output}
      </div>
    );
  };

  return (
    <div className="ai-output min-h-[200px] overflow-wrap-break-word p-4 rounded-lg border-l-4 border-blue-500 bg-[#0d1117]">
      {renderContent()}
    </div>
  );
};
