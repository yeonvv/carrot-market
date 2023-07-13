import UploadButton from "@/components/button";
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
          <UploadButton live />
        </Link>
      </div>
    </Layout>
  );
};

export default Stream;
