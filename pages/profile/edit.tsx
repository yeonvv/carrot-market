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
            <div className="w-full space-y-1">
              <label htmlFor="name" className="pl-1 text-sm font-bold">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="name"
                className="appearance-none w-full transition shadow-md rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 placeholder-gray-400 border-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div className="w-full space-y-1">
              <label htmlFor="phone" className="pl-1 text-sm font-bold">
                Phone number
              </label>
              <div className="flex rounded-lg shadow-md">
                <span className="flex items-center justify-center px-3 rounded-l-lg bg-gray-100 text-sm text-gray-500 select-none border border-r-0 border-gray-300">
                  +82
                </span>
                <input
                  id="phone"
                  type="number"
                  required
                  placeholder="Input your phone number"
                  className="appearance-none w-full transition rounded-r-lg bg-gradient-to-br from-orange-50 to-orange-100 placeholder-gray-400 border-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
            <div className="w-full space-y-1">
              <label htmlFor="email" className="pl-1 text-sm font-bold">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Email address"
                className="appearance-none w-full transition shadow-md rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 placeholder-gray-400 border-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
          <div className="w-full text-center">
            <button
              type="submit"
              className="p-2 w-1/2 text-white font-medium bg-orange-500 rounded-xl shadow-lg hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition"
            >
              Reply
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditProfile;
