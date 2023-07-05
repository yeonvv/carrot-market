import { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <div className="h-screen py-12 px-10 space-y-5 text-gray-700 bg-gradient-to-br from-orange-50 to-orange-100">
      <h1 className="text-3xl font-medium">Write Community</h1>
      <form>
        <textarea
          rows={4}
          className="appearance-none w-full shadow-md rounded-lg placeholder-gray-400 border-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition"
        />
        <button className="w-full py-2 bg-orange-500 text-white font-medium rounded-xl shadow-lg hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Write;
