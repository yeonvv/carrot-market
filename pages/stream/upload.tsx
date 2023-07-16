import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import Textarea from "@/components/textarea";
import { NextPage } from "next";

const UploadStream: NextPage = () => {
  return (
    <Layout title="Live Upload" canGoBack>
      <div className="px-10 space-y-7">
        <form className="space-y-7 select-none">
          <Input label="Name" type="text" />
          <Input label="Price" type="text" price placeholder="0.00" />
          <Textarea label="Description" rows={4} />
        </form>
        <Button text="Go Live">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </Button>
      </div>
    </Layout>
  );
};

export default UploadStream;
