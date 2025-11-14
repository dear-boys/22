
import React from 'react';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const PromptInput: React.FC<PromptInputProps> = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor="prompt-input" className="block text-sm font-medium mb-2">
        پرامپت خود را وارد کنید:
      </label>
      <textarea
        id="prompt-input"
        rows={4}
        className="w-full p-3 bg-[#0d1117] border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 transition-colors"
        placeholder="مثال: یک نقاشی دیجیتال از یک گربه فضانورد که در حال نواختن گیتار است."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
