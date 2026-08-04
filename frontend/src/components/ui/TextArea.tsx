import { type TextareaHTMLAttributes, forwardRef } from 'react';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = '', label, error, helperText, id, rows = 4, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          className={`block w-full rounded-none border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-5 py-3.5 bg-gray-50 border outline-none transition-all duration-200 resize-y
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
TextArea.displayName = 'TextArea';
