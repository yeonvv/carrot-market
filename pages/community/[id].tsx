import type { NextPage } from "next";

const CommunityPostDetail: NextPage = () => {
  return (
    <div className="py-12 px-10 h-screen space-y-5 bg-gradient-to-br from-orange-50 to-orange-100 text-gray-700">
      <span className="inline-flex items-center justify-center px-2.5 py-0.5 text-sm text-gray-700 font-medium bg-gray-200 rounded-full">
        동네질문
      </span>
      <div className="flex items-center space-x-3 cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-slate-400 ring-2 ring-offset-1 ring-orange-100" />
        <div className="space-y-1">
          <p className="text-sm text-gray-700 font-medium">Steve Jebs</p>
          <p className="text-xs text-gray-500">View profile &rarr;</p>
        </div>
      </div>
      <div className="space-y-3 text-gray-700">
        <div>
          <span className="text-orange-500 font-bold">Q.</span> What is the best
          mandu restaurant?
        </div>
        <div className="flex justify-end w-full space-x-5 py-1 px-2 text-sm text-gray-700 font-medium rounded-lg">
          <span className="flex items-center space-x-2 cursor-pointer">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>궁금해요 1</span>
          </span>
          <span className="flex items-center space-x-2 cursor-pointer">
            <svg
              className="w-4 h-4"
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
            <span>답변 1</span>
          </span>
        </div>
      </div>
      <div className="divide-y-[1px]">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="flex items-start py-2 space-x-3">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-4/5">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500 font-medium">
                  Steve Jebs
                </span>
                <span className="text-xs text-gray-500">2시간 전</span>
              </div>
              <p>The best mandu restaurant is the one next to my house.</p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <textarea
          rows={4}
          placeholder="Answer this question!"
          className="appearance-none w-full shadow-md rounded-lg placeholder-gray-400 border-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition"
        />
        <button className="w-full py-1 bg-orange-500 text-white font-medium rounded-xl shadow-lg hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition">
          Reply
        </button>
      </div>
    </div>
  );
};

export default CommunityPostDetail;
