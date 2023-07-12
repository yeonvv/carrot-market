import Layout from "@/components/layout";
import { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <Layout title="Upload News" canGoBack>
      <div className="px-10 space-y-5">
        <h1 className="text-3xl font-medium">Write Community</h1>
        <form>
          <textarea
            rows={8}
            className="appearance-none w-full shadow-md rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 border-orange-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition"
          />
          <button className="w-full py-2 bg-orange-500 text-white font-medium rounded-xl shadow-lg hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Write;
