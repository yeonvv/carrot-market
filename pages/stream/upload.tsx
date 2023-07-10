import { NextPage } from "next";

const UploadStream: NextPage = () => {
  return (
    <div className="py-12 px-10 w-full space-y-7">
      <form className="space-y-7 text-gray-700 select-none">
        <div className="text-gray-700 space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            name
          </label>
          <div className="flex items-center relative">
            <input
              id="name"
              type="text"
              className="appearance-none w-full pl-7 shadow-md rounded-lg placeholder-gray-400 border-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="price" className="text-sm font-medium">
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
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="appearance-none w-full shadow-md rounded-lg placeholder-gray-400 border-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition"
          />
        </div>
      </form>
      <button className="flex justify-center w-full py-2 space-x-2 bg-orange-500 text-white font-medium rounded-xl shadow-lg hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition">
        <span>Go live</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </button>
    </div>
  );
};

export default UploadStream;
