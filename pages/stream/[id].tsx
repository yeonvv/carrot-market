import { NextPage } from "next";

const StreamDetail: NextPage = () => {
  return (
    <div className="py-12 px-10 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="mb-10 space-y-3">
        <div className="w-full aspect-video bg-gray-400 rounded-lg ring-2 ring-offset-2 ring-orange-100 cursor-pointer" />
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-slate-400 ring-2 ring-offset-1 ring-orange-100" />
          <div className="space-y-1">
            <p className="text-sm ">Steve Jebs</p>
            <p className="text-xs text-gray-500">View profile &rarr;</p>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Galaxy S50</h1>
          <span className="block text-xl text-gray-500 font-medium">$140</span>
          <p className="text-base text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
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
      <div className="fixed bottom-0 pb-5 w-full max-w-lg mx-auto inset-x-0 bg-gradient-to-br from-orange-50 to-orange-100">
        <form className="relative flex items-center justify-center mx-auto max-w-md">
          <input
            type="text"
            className="appearance-none w-full px-5 rounded-full shadow-md bg-gradient-to-br from-orange-50 to-orange-100 placeholder-gray-400 border-orange-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition"
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
    </div>
  );
};

export default StreamDetail;
