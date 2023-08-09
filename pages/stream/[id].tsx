import ChatInput from "@components/chat-input";
import Layout from "@components/layout";
import Message from "@components/message";
import { NextPage } from "next";

const StreamDetail: NextPage = () => {
  return (
    <Layout title="Stream" canGoBack>
      <div className="px-10">
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
            <span className="block text-xl text-gray-500 font-medium">
              $140
            </span>
            <p className="text-base text-gray-700">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
          </div>
        </div>
        <div className="h-[50vh] pb-20 overflow-y-scroll scrollbar-hide">
          <Message msg="Hi how much are you selling them for?" />
          <Message me msg="Hi how much are you selling them for?" />
          <Message me msg="Hi how much are you selling them for?" />
          <Message msg="Hi how much are you selling them for?" />
          <Message msg="Hi how much are you selling them for?" />
          <Message msg="Hi how much are you selling them for?" />
        </div>
        <ChatInput />
      </div>
    </Layout>
  );
};

export default StreamDetail;
