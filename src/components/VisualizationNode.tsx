
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface VisualizationNodeProps {
  title: string;
  description: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: 'primary' | 'secondary' | 'tertiary';
  x: number;
  y: number;
  connections?: {x: number, y: number}[];
}

const VisualizationNode: React.FC<VisualizationNodeProps> = ({ 
  title, 
  description, 
  className,
  size = 'md',
  type = 'primary', 
  x,
  y,
  connections = []
}) => {
  const [isActive, setIsActive] = useState(false);
  
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };
  
  const typeClasses = {
    primary: 'bg-quantum-primary/20 border-quantum-primary text-quantum-glow',
    secondary: 'bg-quantum-accent/20 border-quantum-accent text-quantum-light',
    tertiary: 'bg-quantum-purple/20 border-quantum-purple text-quantum-light'
  };

  return (
    <>
      {connections.map((connection, i) => (
        <svg 
          key={i} 
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" 
          style={{ overflow: 'visible' }}
        >
          <line 
            x1={x} 
            y1={y} 
            x2={connection.x} 
            y2={connection.y} 
            stroke={isActive ? "#00E5FF" : "#1976D2"} 
            strokeWidth={isActive ? 2 : 1} 
            strokeOpacity={isActive ? 0.8 : 0.3}
            strokeDasharray={isActive ? "none" : "4,4"}
          />
        </svg>
      ))}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={cn(
                'absolute rounded-full flex items-center justify-center border-2 cursor-pointer transition-all',
                sizeClasses[size],
                typeClasses[type],
                isActive && 'animate-pulse-glow border-quantum-glow',
                className
              )}
              style={{ 
                left: `${x}px`, 
                top: `${y}px`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => setIsActive(true)}
              onMouseLeave={() => setIsActive(false)}
            >
              <span className="text-xs text-center font-semibold">{title}</span>
            </div>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-xs bg-quantum-dark border-quantum-glow/30">
            <div>
              <h4 className="font-bold">{title}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default VisualizationNode;
