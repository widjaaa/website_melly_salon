import { type HTMLAttributes, forwardRef } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'outline';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'primary', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest transition-colors';
    
    const variants = {
      primary: 'bg-purple-100 text-purple-800',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-amber-100 text-amber-800',
      error: 'bg-red-100 text-red-800',
      outline: 'border border-purple-200 text-purple-700 bg-white',
    };

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';
