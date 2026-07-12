import { Input } from '../../../components/ui/Input';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export function ServiceSearch({ value, onChange }: Props) {
  return (
    <div className="relative w-full md:w-80 lg:w-96">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      
      {/* Input Field */}
      <Input 
        type="text" 
        placeholder="Search for treatments..." 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 w-full rounded-full border-gray-200 focus:border-purple-500 focus:ring-purple-500 bg-gray-50/50 shadow-inner"
      />
    </div>
  );
}
