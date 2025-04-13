
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <nav className={cn('flex items-center justify-between p-4', className)}>
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-gradient-quantum bg-300% animate-quantum-flow"></div>
        <span className="font-bold text-xl quantum-text">HyperIntelligent</span>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-quantum-light hover:text-quantum-glow">Dashboard</Button>
        <Button variant="ghost" className="text-quantum-light hover:text-quantum-glow">Documentation</Button>
        <Button variant="ghost" className="text-quantum-light hover:text-quantum-glow">Configuration</Button>
        <Button className="bg-quantum-accent hover:bg-quantum-glow text-black">Get Started</Button>
      </div>
    </nav>
  );
};

export default Navigation;
