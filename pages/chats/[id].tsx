import Layout from "@/components/layout";
import Message from "@/components/message";
import Photo from "@/components/photo";
import { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <Layout title="chat" canGoBack>
      <div className="px-10">
        <div className="space-y-3">
          <Message msg="Hi how much are you selling them for?" />
          <Message msg="Hi how much are you selling them for?" me />
          <Message msg="Hi how much are you selling them for?" me />
          <Message msg="Hi how much are you selling them for?" me />
          <Message msg="Hi how much are you selling them for?" />
          <Message msg="Hi how much are you selling them for?" />
          <Message msg="Hi how much are you selling them for?" />
        </div>
        <div className="fixed bottom-0 w-full max-w-lg mx-auto pb-5 inset-x-0 bg-gradient-to-br from-orange-50 to-orange-100">
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
    </Layout>
  );
};

export default ChatDetail;
