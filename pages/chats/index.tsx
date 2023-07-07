import { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="py-12 h-screen select-none text-gray-700 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="divide-y-[1px]">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="flex items-center px-10 py-5 space-x-3 bg-gradient-to-br from-orange-50 to-orange-100 cursor-pointer "
          >
            <div className="w-12 h-12 rounded-full bg-slate-400" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Steve Jebs</p>
              <p className="text-xs text-gray-500">
                See you tomorrow in the coner at 2pm.
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="fixed bottom-20 right-5 p-2 text-white shadow-xl bg-orange-500 rounded-full hover:bg-orange-400 cursor-pointer transition">
        <svg
          className="h-9 w-9"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Chats;
