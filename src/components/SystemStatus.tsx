
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface StatusItemProps {
  label: string;
  value: number;
  type?: 'cpu' | 'memory' | 'quantum' | 'network';
}

const StatusItem: React.FC<StatusItemProps> = ({ label, value, type = 'cpu' }) => {
  const colorClass = {
    cpu: 'bg-quantum-primary',
    memory: 'bg-quantum-accent',
    quantum: 'bg-quantum-purple',
    network: 'bg-quantum-success',
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{value}%</span>
      </div>
      <Progress 
        value={value} 
        className="h-1 bg-quantum-dark/50" 
        indicatorClassName={colorClass[type]} 
      />
    </div>
  );
};

interface SystemStatusProps {
  className?: string;
}

const SystemStatus: React.FC<SystemStatusProps> = ({ className }) => {
  return (
    <div className={cn('p-4 quantum-card', className)}>
      <h3 className="font-semibold mb-4 text-quantum-light">System Status</h3>
      <StatusItem label="Neural Processing" value={76} type="cpu" />
      <StatusItem label="Quantum Entanglement" value={42} type="quantum" />
      <StatusItem label="Symbolic Reasoning" value={88} type="memory" />
      <StatusItem label="Knowledge Integration" value={64} type="network" />
    </div>
  );
};

export default SystemStatus;
