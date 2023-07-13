import UploadButton from "@/components/button";
import Layout from "@/components/layout";
import { NextPage } from "next";
import Link from "next/link";

const Chats: NextPage = () => {
  return (
    <Layout title="Chats" hasTabBar>
      <div className="select-none">
        <div className="px-10 divide-y-[1px]">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Link href={"/chats/1"}>
              <div
                key={i}
                className="flex items-center py-5 space-x-3 bg-gradient-to-br from-orange-50 to-orange-100 cursor-pointer "
              >
                <div className="w-12 h-12 rounded-full bg-slate-400" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Steve Jebs</p>
                  <p className="text-xs text-gray-500">
                    See you tomorrow in the coner at 2pm.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <UploadButton chat />
      </div>
    </Layout>
  );
};

export default Chats;
