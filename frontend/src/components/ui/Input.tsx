import { type InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, helperText, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`block w-full rounded-none border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-5 py-3.5 bg-gray-50 border outline-none transition-all duration-200
            ${error ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500' : 'focus:bg-white'} 
            ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
        {error && <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>}
        {helperText && !error && <p className="mt-2 text-sm text-gray-500">{helperText}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
