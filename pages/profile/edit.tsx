import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <Layout title="Edit Profile" canGoBack>
      <div className="px-10">
        <form className="space-y-10">
          <div className="flex flex-col items-center w-full space-y-5">
            <label
              htmlFor="picture"
              className="flex justify-center relative w-24 h-24 rounded-full bg-slate-400 cursor-pointer ring-2 ring-offset-1 ring-orange-500 hover:text-lg hover:font-bold transition-all"
            >
              <input
                id="picture"
                type="file"
                className="hidden"
                accept="image/*"
              />
              <div className="absolute w-24 bottom-2 text-center text-white">
                Change
              </div>
            </label>
            <Input label="Name" type="text" placeholder="Name" />
            <Input
              label="Phone number"
              type="number"
              placeholder="Input your phone number"
              phone
            />
            <Input
              label="Email address"
              type="email"
              placeholder="Email address"
            />
          </div>
          <Button text="Reply" />
        </form>
      </div>
    </Layout>
  );
};

export default EditProfile;
