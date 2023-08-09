import Chat from "@components/chat";
import FloatingButton from "@components/floating-button";
import Layout from "@components/layout";
import { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <Layout title="Chats" hasTabBar>
      <div className="select-none">
        <div className="px-10 divide-y-[1px]">
          <Chat
            id="1"
            user="Steve Jebs"
            lastMsg="See you tomorrow in the coner at 2pm."
          />
          <Chat
            id="1"
            user="Steve Jebs"
            lastMsg="See you tomorrow in the coner at 2pm."
          />
          <Chat
            id="1"
            user="Steve Jebs"
            lastMsg="See you tomorrow in the coner at 2pm."
          />
          <Chat
            id="1"
            user="Steve Jebs"
            lastMsg="See you tomorrow in the coner at 2pm."
          />
          <Chat
            id="1"
            user="Steve Jebs"
            lastMsg="See you tomorrow in the coner at 2pm."
          />
          <Chat
            id="1"
            user="Steve Jebs"
            lastMsg="See you tomorrow in the coner at 2pm."
          />
          <Chat
            id="1"
            user="Steve Jebs"
            lastMsg="See you tomorrow in the coner at 2pm."
          />
        </div>
        <FloatingButton chat />
      </div>
    </Layout>
  );
};

export default Chats;
