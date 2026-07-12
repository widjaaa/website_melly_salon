import { type HTMLAttributes, forwardRef } from 'react';

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
  text?: string;
}

export const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  ({ className = '', size = 'md', fullScreen = false, text, ...props }, ref) => {
    const sizes = {
      sm: 'h-5 w-5 border-2',
      md: 'h-10 w-10 border-[3px]',
      lg: 'h-16 w-16 border-4',
    };

    const loader = (
      <div className="flex flex-col items-center justify-center space-y-4">
        <div
          className={`${sizes[size]} rounded-full border-gray-200 border-t-purple-700 animate-spin ${className}`}
          role="status"
          aria-label="Loading"
        />
        {text && (
          <p className="text-sm font-medium text-gray-500 tracking-wide animate-pulse">
            {text}
          </p>
        )}
      </div>
    );

    if (fullScreen) {
      return (
        <div
          ref={ref}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
          {...props}
        >
          {loader}
        </div>
      );
    }

    return (
      <div ref={ref} className="flex justify-center p-8" {...props}>
        {loader}
      </div>
    );
  }
);
Loading.displayName = 'Loading';
