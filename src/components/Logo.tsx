
import React from 'react';
import { Database } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  withText = true,
  className 
}) => {
  // Size mappings for the logo container
  const sizeClasses = {
    sm: 'h-7 w-7',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
  };

  // Size mappings for the icon
  const iconSizes = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  // Size mappings for the text
  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl'
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn(
        sizeClasses[size],
        "rounded-md bg-primary flex items-center justify-center"
      )}>
        <Database className={cn(iconSizes[size], "text-white")} />
      </div>
      {withText && (
        <span className={cn(textSizes[size], "font-medium")}>
          DB Backup
        </span>
      )}
    </div>
  );
};

export default Logo;
