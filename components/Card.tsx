// components/Card.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  // Le '?' signifie : Optionnel (peut être undefined)
  icon?: LucideIcon | React.ElementType; 
  title: string;
  children?: React.ReactNode; // J'ai aussi mis children en optionnel au cas où
  progress?: number;          // Optionnel aussi
}

export default function Card({ icon: Icon, title, children, progress }: CardProps) {
  return (
    <div className="bg-neutral-800/20 rounded-lg p-6 flex flex-col h-full hover:bg-neutral-800/30 transition-colors border border-white/5">
      <div className="flex items-center mb-4 space-x-3">
        {/* On vérifie si Icon existe avant de l'afficher */}
        {Icon && (
          <div className="p-2 bg-cyan-400/10 rounded-lg">
             <Icon className="h-6 w-6 text-cyan-400" />
          </div>
        )}
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      
      <div className="flex-1 text-white/50 text-sm">
        {children}
      </div>
      
      {/* On vérifie que progress est bien un nombre défini */}
      {typeof progress === 'number' && (
        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-400"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}
