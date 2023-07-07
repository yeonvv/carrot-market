import { NextPage } from "next";

const Love: NextPage = () => {
  return (
    <div className="h-full py-12 text-gray-700 bg-gradient-to-br from-orange-50 to-orange-100">
      <h2 className="py-2 text-center text-white text-2xl font-medium bg-orange-400 border-b-2 border-orange-500">
        Loved List
      </h2>
      <div className="divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className="flex justify-between items-end py-4 px-10 bg-gradient-to-br from-orange-50 to-orange-100 cursor-pointer"
          >
            <div className="flex">
              <div className="w-20 h-20 mr-2 rounded-lg bg-gray-500" />
              <div className="flex flex-col justify-center space-y-1">
                <h3 className="text-sm text-gray-700 font-medium">
                  New iPhone 14
                </h3>
                <span className="text-xs text-gray-500">Black</span>
                <span className="text-gray-700 font-medium">$95</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="flex items-center space-x-0.5 text-gray-700">
                <svg
                  className="w-4 h-4 hover:scale-125 hover:text-red-500 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span>1</span>
              </div>
              <div className="flex items-center space-x-0.5 text-gray-700">
                <svg
                  className="w-4 h-4 hover:scale-125 hover:text-orange-500 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span>1</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Love;
