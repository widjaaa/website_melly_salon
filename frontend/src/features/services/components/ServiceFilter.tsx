interface Props {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export function ServiceFilter({ categories, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-start md:justify-end w-full">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            active === cat 
              ? 'bg-purple-700 text-white shadow-md' 
              : 'bg-pink-50 text-purple-700 hover:bg-purple-100 hover:shadow-sm'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
