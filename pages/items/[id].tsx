import Layout from "@/components/layout";
import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <Layout title="itmes" canGoBack>
      <div className="px-10 space-y-5">
        <div className="space-y-5">
          <div className="h-96 w-96 bg-gray-400 rounded-lg ring-2 ring-offset-2 ring-orange-100 cursor-pointer" />
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-slate-400 ring-2 ring-offset-1 ring-orange-100" />
            <div className="space-y-1">
              <p className="text-sm text-gray-700 font-medium">Steve Jebs</p>
              <p className="text-xs text-gray-500">View profile &rarr;</p>
            </div>
          </div>
          <div className="py-5 border-y">
            <div className="space-y-2 mb-5">
              <h1 className="text-3xl text-gray-700 font-bold">Galaxy S50</h1>
              <span className="block text-xl text-gray-500 font-medium">
                $140
              </span>
              <p className="text-base text-gray-700">
                My money&apos;s in that office, right? If she start giving me
                some bullshit about it ain&apos;t there, and we got to go
                someplace else and get it, I&apos;m gonna shoot you in the head
                then and there. Then I&apos;m gonna shoot that bitch in the
                kneecaps, find out where my goddamn money is. She gonna tell me
                too. Hey, look at me when I&apos;m talking to you, motherfucker.
                You listen: we go in there, and that ni**a Winston or anybody
                else is in there, you the first motherfucker to get shot. You
                understand?
              </p>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <button className="flex-1 py-2 px-5 bg-orange-500 text-white font-medium rounded-xl shadow-lg hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition">
                Talk to seller
              </button>
              <button className="text-gray-500 hover:text-red-500 hover:scale-125 transition">
                <svg
                  className="h-6 w-6"
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl text-gray-700 font-bold">Similar items</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="h-48 w-48 bg-gray-500 rounded-lg" />
                <div className="text-gray-700 font-medium">
                  <h3 className="-mb-1 text-gray-500">Galaxy S60</h3>
                  <span className="text-sm">$6</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
