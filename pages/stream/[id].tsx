import { NextPage } from "next";

const StreamDetail: NextPage = () => {
  return (
    <div className="h-[100vh] py-12 px-10 text-gray-700 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="mb-10 space-y-1">
        <div className="aspect-video w-full rounded-lg bg-gray-500 cursor-pointer" />
        <div className="flex flex-col space-y-1">
          <span className="text-2xl">Let's try carrots!</span>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-slate-400 cursor-pointer" />
            <span className="text-sm text-gray-500 font-medium cursor-pointer">
              Steve Jebs
            </span>
          </div>
        </div>
      </div>
      <div className="h-[50vh] pb-5 overflow-y-scroll scrollbar-hide">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-400" />
          <div className="mt-5 py-1 px-2 rounded-lg w-1/2 rounded-tl-none bg-gradient-to-br from-orange-200 to-orange-100">
            Hi how much are you selling them for?
          </div>
        </div>
        <div className="flex flex-row-reverse items-start space-x-3 space-x-reverse">
          <div className="w-10 h-10 rounded-full bg-slate-400" />
          <div className="mt-5 py-1 px-2 rounded-lg w-1/2 rounded-tr-none bg-gradient-to-br from-orange-100 to-orange-200">
            I want ￦20,000
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-400" />
          <div className="mt-5 py-1 px-2 rounded-lg w-1/2 rounded-tl-none bg-gradient-to-br from-orange-200 to-orange-100">
            Hi how much are you selling them for?
          </div>
        </div>
        <div className="flex flex-row-reverse items-start space-x-3 space-x-reverse">
          <div className="w-10 h-10 rounded-full bg-slate-400" />
          <div className="mt-5 py-1 px-2 rounded-lg w-1/2 rounded-tr-none bg-gradient-to-br from-orange-100 to-orange-200">
            I want ￦20,000
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-400" />
          <div className="mt-5 py-1 px-2 rounded-lg w-1/2 rounded-tl-none bg-gradient-to-br from-orange-200 to-orange-100">
            Hi how much are you selling them for?
          </div>
        </div>
        <div className="flex flex-row-reverse items-start space-x-3 space-x-reverse">
          <div className="w-10 h-10 rounded-full bg-slate-400" />
          <div className="mt-5 py-1 px-2 rounded-lg w-1/2 rounded-tr-none bg-gradient-to-br from-orange-100 to-orange-200">
            I want ￦20,000
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-400" />
          <div className="mt-5 py-1 px-2 rounded-lg w-1/2 rounded-tl-none bg-gradient-to-br from-orange-200 to-orange-100">
            Hi how much are you selling them for?
          </div>
        </div>
        <div className="flex flex-row-reverse items-start space-x-3 space-x-reverse">
          <div className="w-10 h-10 rounded-full bg-slate-400" />
          <div className="mt-5 py-1 px-2 rounded-lg w-1/2 rounded-tr-none bg-gradient-to-br from-orange-100 to-orange-200">
            I want ￦20,000
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-400" />
          <div className="mt-5 py-1 px-2 rounded-lg w-1/2 rounded-tl-none bg-gradient-to-br from-orange-200 to-orange-100">
            Hi how much are you selling them for?
          </div>
        </div>
        <div className="flex flex-row-reverse items-start space-x-3 space-x-reverse">
          <div className="w-10 h-10 rounded-full bg-slate-400" />
          <div className="mt-5 py-1 px-2 rounded-lg w-1/2 rounded-tr-none bg-gradient-to-br from-orange-100 to-orange-200">
            I want ￦20,000
          </div>
        </div>
      </div>
      <form className="relative flex items-center justify-center mx-auto max-w-md ">
        <input
          type="text"
          className="appearance-none w-full rounded-full shadow-md bg-gradient-to-br from-orange-50 to-orange-100 placeholder-gray-400 border-orange-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition"
        />
        <button type="submit" className="absolute right-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-orange-500 hover:text-orange-400 transition "
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default StreamDetail;
