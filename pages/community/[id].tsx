import Button from "@/components/button";
import Layout from "@/components/layout";
import Photo from "@/components/photo";
import type { NextPage } from "next";

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout title="community" canGoBack>
      <div className="px-10 space-y-5">
        <span className="inline-flex items-center justify-center px-2.5 py-0.5 text-sm text-gray-700 font-medium bg-gray-200 rounded-full">
          동네질문
        </span>
        <div className="flex items-center space-x-3 cursor-pointer">
          <Photo md />
          <div className="space-y-1">
            <p className="text-sm text-gray-700 font-medium">Steve Jebs</p>
            <p className="text-xs text-gray-500">View profile &rarr;</p>
          </div>
        </div>
        <div className="space-y-3 text-gray-700">
          <div>
            <span className="text-orange-500 font-bold">Q.</span> What is the
            best mandu restaurant?
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
              <Photo sm />
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
          <Button text="Reply" />
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
