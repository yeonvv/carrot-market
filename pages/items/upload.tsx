import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import Textarea from "@/components/textarea";
import { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <Layout title="Upload Item" canGoBack>
      <form className="px-10 space-y-7 select-none">
        <div>
          <label className="flex items-center justify-center h-48 text-gray-700 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-dashed border-gray-400 rounded-xl hover:text-orange-500 hover:border-orange-500 transition cursor-pointer">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="file" className="hidden" />
          </label>
        </div>
        <Input label="Name" type="text" />
        <Input label="Price" type="text" price placeholder="0.00" />
        <Textarea label="Dscription" rows={4} />
        <Button text="Upload Product" />
      </form>
    </Layout>
  );
};

export default Upload;
