interface TextareaProps {
  label?: string;
  rows: number;
}

export default function Textarea({ label, rows }: TextareaProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={label} className="text-sm text-gray-700 font-medium">
        {label}
      </label>
      <textarea
        id={label}
        rows={rows}
        className="appearance-none w-full shadow-md rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 placeholder-gray-400 border-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition"
      />
    </div>
  );
}
