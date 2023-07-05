import { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <form className="py-12 px-10 w-full space-y-7 select-none">
      <div>
        <label className="flex items-center justify-center h-48 text-gray-700 border-2 border-dashed border-gray-400 rounded-xl hover:text-orange-500 hover:border-orange-500 hover:bg-gradient-to-br from-orange-50 to-orange-100 transition cursor-pointer">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input type="file" className="hidden" />
        </label>
      </div>
      <div className="text-gray-700 space-y-2">
        <label htmlFor="price" className="text-sm text-gray-700 font-medium">
          Price
        </label>
        <div className="flex items-center relative">
          <span className="absolute left-3 text-gray-500">$</span>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="appearance-none w-full pl-7 shadow-md rounded-lg placeholder-gray-400 border-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition"
          />
          <span className="absolute right-3 text-gray-500">USD</span>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="description"
          className="text-sm text-gray-700 font-medium"
        >
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          className="appearance-none w-full shadow-md rounded-lg placeholder-gray-400 border-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition"
        />
        <button className="w-full py-2 bg-orange-500 text-white font-medium rounded-xl shadow-lg hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition">
          Upload product
        </button>
      </div>
    </form>
  );
};

export default Upload;
