import Layout from "@components/layout";
import Photo from "@components/photo";
import Review from "@components/review";
import type { NextPage } from "next";
import Link from "next/link";

const Profile: NextPage = () => {
  return (
    <Layout title="Profile" hasTabBar>
      <div>
        <div className="flex items-center px-10 space-x-3 pb-5">
          <Photo lg />
          <div className="flex flex-col space-y-1">
            <span className="text-base font-medium">Steve Jebs</span>
            <Link href={"/profile/edit"}>
              <span className="flex items-center text-gray-500 text-sm font-medium cursor-pointer">
                Edit profile
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-around pb-5 border-b border-orange-200">
          <Link href={"/profile/sold"}>
            <div>
              <div className="flex flex-col items-center justify-center space-y-1 h-12 w-12 rounded-full font-medium bg-gradient-to-br from-orange-50 to-orange-300 hover:bg-gradient-to-br hover:from-orange-300 hoverto-orange-50 cursor-pointer">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <span className="text-xs font-bold">판매내역</span>
            </div>
          </Link>
          <Link href={"/profile/bought"}>
            <div>
              <div className="flex flex-col items-center justify-center space-y-1 h-12 w-12 rounded-full font-medium bg-gradient-to-br from-orange-50 to-orange-300 hover:bg-gradient-to-br hover:from-orange-300 hoverto-orange-50 cursor-pointer">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
              </div>
              <span className="text-xs font-bold">구매내역</span>
            </div>
          </Link>
          <Link href={"/profile/loved"}>
            <div>
              <div className="flex flex-col items-center justify-center space-y-1 h-12 w-12 rounded-full font-medium bg-gradient-to-br from-orange-50 to-orange-300 hover:bg-gradient-to-br hover:from-orange-300 hoverto-orange-50 cursor-pointer">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <span className="text-xs font-bold">관심목록</span>
            </div>
          </Link>
        </div>
        <div className="px-10 divide-y-[1px]">
          <Review
            id="1"
            user="니꼬"
            star={5}
            opinion="Normally, both your asses would be dead as fucking fried chicken, but
          you happen to pull this shit while I'm in a transitional period
          so I don't wanna kill you, I wanna help you. But I can't
          give you this case, it don't belong to me. Besides, I've
          already been through too much shit this morning over this case to hand
          it over to your dumb ass."
          />
          <Review
            id="1"
            user="니꼬"
            star={3}
            opinion="Normally, both your asses would be dead as fucking fried chicken, but
          you happen to pull this shit while I'm in a transitional period
          so I don't wanna kill you, I wanna help you. But I can't
          give you this case, it don't belong to me. Besides, I've
          already been through too much shit this morning over this case to hand
          it over to your dumb ass."
          />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
