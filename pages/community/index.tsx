import UploadButton from "@/components/button";
import Layout from "@/components/layout";
import { NextPage } from "next";
import Link from "next/link";

const Coummunity: NextPage = () => {
  return (
    <Layout title="Community" hasTabBar>
      <div className="px-10 divide-y-[1px]">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <Link href={"/community/1"}>
            <div
              key={i}
              className="flex flex-col items-start space-y-3 py-5 bg-gradient-to-br from-orange-50 to-orange-100"
            >
              <span className="flex items-center justify-center px-2.5 py-0.5 text-sm text-gray-700 font-medium bg-gray-200 rounded-full">
                동네질문
              </span>
              <div className="text-gray-700 cursor-pointer">
                <span className="text-orange-500 font-bold">Q.</span> What is
                the best mandu restaurant?
              </div>
              <div className="flex items-center justify-between w-full text-sm text-gray-500 font-medium">
                <span>니꼬</span>
                <span>18시간 전</span>
              </div>
              <div className="flex justify-end w-full space-x-5 text-sm text-gray-700 font-medium">
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
          </Link>
        ))}
        <Link href={"/community/write"}>
          <UploadButton news />
        </Link>
      </div>
    </Layout>
  );
};

export default Coummunity;
