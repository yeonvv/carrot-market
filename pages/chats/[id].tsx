import ChatInput from "@components/chat-input";
import Layout from "@components/layout";
import Message from "@components/message";
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
        <ChatInput />
      </div>
    </Layout>
  );
};

export default ChatDetail;
