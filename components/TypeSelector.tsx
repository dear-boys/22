
import React from 'react';
import { GenerationType } from '../types';

interface TypeSelectorProps {
  selectedType: GenerationType;
  onChange: (type: GenerationType) => void;
}

export const TypeSelector: React.FC<TypeSelectorProps> = ({ selectedType, onChange }) => {
  return (
    <div className="mb-6">
      <span className="block text-sm font-medium mb-3 text-center">نوع تولید:</span>
      <div className="flex space-x-4 space-x-reverse justify-center">
        <div>
          <input
            type="radio"
            id="type-text"
            name="ai-type"
            value={GenerationType.Text}
            className="hidden peer"
            checked={selectedType === GenerationType.Text}
            onChange={() => onChange(GenerationType.Text)}
          />
          <label
            htmlFor="type-text"
            className="px-5 py-2 cursor-pointer rounded-full border border-gray-600 transition duration-200 hover:bg-gray-700 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600"
          >
            تولید متن (شعر/جواب)
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="type-image"
            name="ai-type"
            value={GenerationType.Image}
            className="hidden peer"
            checked={selectedType === GenerationType.Image}
            onChange={() => onChange(GenerationType.Image)}
          />
          <label
            htmlFor="type-image"
            className="px-5 py-2 cursor-pointer rounded-full border border-gray-600 transition duration-200 hover:bg-gray-700 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600"
          >
            تولید تصویر (Image)
          </label>
        </div>
      </div>
    </div>
  );
};
