import Button from "@/components/button";
import Layout from "@/components/layout";
import Textarea from "@/components/textarea";
import { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <Layout title="Upload News" canGoBack>
      <div className="px-10 space-y-5">
        <h1 className="text-3xl font-medium">Write Community</h1>
        <form>
          <Textarea rows={8} />
        </form>
        <Button text="Submit" />
      </div>
    </Layout>
  );
};

export default Write;
