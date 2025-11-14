
import React, { useState, useCallback } from 'react';
import { PromptInput } from './components/PromptInput';
import { TypeSelector } from './components/TypeSelector';
import { GenerateButton } from './components/GenerateButton';
import { OutputDisplay } from './components/OutputDisplay';
import { ErrorMessage } from './components/ErrorMessage';
import { generateContent } from './services/geminiService';
import { GenerationType } from './types';

function App() {
  const [prompt, setPrompt] = useState<string>('');
  const [generationType, setGenerationType] = useState<GenerationType>(GenerationType.Text);
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) {
      setError('لطفاً یک پرامپت معتبر وارد کنید.');
      setOutput('');
      return;
    }

    setIsLoading(true);
    setError(null);
    setOutput('');

    try {
      const result = await generateContent(prompt, generationType);
      setOutput(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'یک خطای ناشناخته رخ داد.';
      setError(`خطا: ${errorMessage}`);
      setOutput('متأسفانه در تولید محتوا خطایی رخ داد.');
      console.error("Error during API call:", err);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, generationType]);

  return (
    <main className="container mx-auto flex flex-col items-center px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          مولد هوش مصنوعی Gemini
        </h1>
        <p className="text-gray-400 mt-2">
          تولید متن یا تصویر با استفاده از Gemini API.
        </p>
      </div>

      <div className="card bg-[#161b22] border border-[#30363d] p-6 md:p-10 w-full max-w-2xl rounded-xl shadow-lg">
        <PromptInput value={prompt} onChange={setPrompt} />
        <TypeSelector selectedType={generationType} onChange={setGenerationType} />
        <GenerateButton isLoading={isLoading} onClick={handleGenerate} />
        <ErrorMessage message={error} />
      </div>

      <div className="card bg-[#161b22] border border-[#30363d] mt-8 p-6 md:p-10 w-full max-w-2xl rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-white">خروجی هوش مصنوعی</h2>
        <OutputDisplay 
          output={output} 
          type={generationType} 
          isLoading={isLoading} 
          prompt={prompt} 
        />
      </div>
    </main>
  );
}

export default App;
