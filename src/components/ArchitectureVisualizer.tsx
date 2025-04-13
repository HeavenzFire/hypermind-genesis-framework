
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VisualizationNode from './VisualizationNode';

const ArchitectureVisualizer: React.FC = () => {
  // Node positions in the visualization
  const nodes = [
    {
      id: 'core',
      title: 'Neuro Symbolic Core',
      description: 'The central processing unit of the framework combining neural networks with symbolic reasoning',
      x: 400,
      y: 300,
      type: 'primary' as const,
      size: 'lg' as const,
      connections: [
        { x: 250, y: 150 }, // to quantum
        { x: 550, y: 150 }, // to autonomous
        { x: 250, y: 450 }, // to multimodal
        { x: 550, y: 450 }  // to evolution
      ]
    },
    {
      id: 'quantum',
      title: 'Quantum Integration',
      description: 'Quantum computing resources that enhance processing capabilities',
      x: 250,
      y: 150,
      type: 'secondary' as const,
      size: 'md' as const,
      connections: [
        { x: 150, y: 250 } // to ethical
      ]
    },
    {
      id: 'autonomous',
      title: 'Autonomous Systems',
      description: 'Self-healing and self-monitoring components',
      x: 550,
      y: 150,
      type: 'secondary' as const,
      size: 'md' as const,
      connections: [
        { x: 650, y: 250 } // to dev
      ]
    },
    {
      id: 'multimodal',
      title: 'Multimodal Fusion',
      description: 'Processes and integrates different data modalities',
      x: 250,
      y: 450,
      type: 'secondary' as const,
      size: 'md' as const,
      connections: [
        { x: 150, y: 350 } // to ethical
      ]
    },
    {
      id: 'evolution',
      title: 'Continuous Evolution',
      description: 'Self-improving algorithms and optimization',
      x: 550,
      y: 450,
      type: 'secondary' as const,
      size: 'md' as const,
      connections: [
        { x: 650, y: 350 } // to dev
      ]
    },
    {
      id: 'ethical',
      title: 'Ethical Foundation',
      description: 'Ensures all operations follow ethical guidelines',
      x: 150,
      y: 300,
      type: 'tertiary' as const,
      size: 'sm' as const,
    },
    {
      id: 'dev',
      title: 'Developer Experience',
      description: 'Tools and interfaces for developers',
      x: 650,
      y: 300,
      type: 'tertiary' as const,
      size: 'sm' as const,
    }
  ];

  return (
    <Card className="quantum-card w-full h-full">
      <CardHeader>
        <CardTitle className="quantum-text">Framework Architecture</CardTitle>
        <CardDescription>Interactive visualization of component relationships</CardDescription>
      </CardHeader>
      <CardContent className="relative h-[500px] border border-quantum-glow/10 rounded-lg bg-quantum-dark/30">
        {nodes.map(node => (
          <VisualizationNode
            key={node.id}
            title={node.title}
            description={node.description}
            x={node.x}
            y={node.y}
            type={node.type}
            size={node.size}
            connections={node.connections}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default ArchitectureVisualizer;
