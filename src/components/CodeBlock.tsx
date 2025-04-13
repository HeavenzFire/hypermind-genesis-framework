
import React from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  language: string;
  code: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, className }) => {
  return (
    <div className={cn('code-block', className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-quantum-accent font-bold">{language.toUpperCase()}</span>
        <span className="text-xs text-gray-400">Framework Component</span>
      </div>
      <pre className="overflow-x-auto">
        <code>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
