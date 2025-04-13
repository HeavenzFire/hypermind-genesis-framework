
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CodeBlock from './CodeBlock';
import { cn } from '@/lib/utils';

interface FrameworkModuleProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  code: {
    language: string;
    content: string;
  };
  status?: 'active' | 'stable' | 'experimental';
  className?: string;
}

const FrameworkModule: React.FC<FrameworkModuleProps> = ({
  title,
  description,
  icon,
  code,
  status = 'stable',
  className
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={cn('quantum-card transition-all duration-300', {
      'col-span-2 row-span-2': expanded,
    }, className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center space-x-2">
          <div className="text-quantum-glow bg-quantum-dark p-1 rounded-md">{icon}</div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <div className="flex items-center space-x-2">
          <span className={cn('text-xs px-2 py-0.5 rounded-full', {
            'bg-quantum-accent/10 text-quantum-accent': status === 'active',
            'bg-quantum-success/10 text-quantum-success': status === 'stable',
            'bg-quantum-warning/10 text-quantum-warning': status === 'experimental',
          })}>
            {status}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{description}</CardDescription>
        <CodeBlock
          language={code.language}
          code={code.content}
        />
      </CardContent>
      <CardFooter className="border-t border-border pt-3 flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => setExpanded(!expanded)}
          className="bg-quantum-dark border-quantum-glow/30 text-quantum-light"
        >
          {expanded ? 'Collapse' : 'Expand'}
        </Button>
        <Button variant="outline" className="bg-quantum-dark border-quantum-glow/30 text-quantum-light">
          Documentation
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FrameworkModule;
