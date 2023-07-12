import Layout from "@/components/layout";
import { NextPage } from "next";
import Link from "next/link";

const Stream: NextPage = () => {
  return (
    <Layout title="Live" hasTabBar>
      <div>
        <Link href={"/stream/1"}>
          <div className="divide-y-[1px]">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="py-5 px-10 space-y-3">
                <div className="aspect-video w-full rounded-lg bg-gray-500 cursor-pointer" />
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-slate-400 cursor-pointer" />
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 font-medium cursor-pointer">
                      Steve Jebs
                    </span>
                    <span className="text-base font-medium cursor-pointer">
                      Let's try carrots!
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Link>
        <Link href={"/stream/upload"}>
          <button className="fixed bottom-20 right-5 p-2 text-white shadow-xl border-transparent bg-orange-500 rounded-full hover:bg-orange-400 cursor-pointer transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
            </svg>
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Stream;
