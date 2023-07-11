import cls from "@/libs/utils";
import Link from "next/link";
import React from "react";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  const carrotSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="w-16 h-10"
      version="1.1"
      viewBox="0 0 282.319 282.319"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <g>
            <g id="XMLID_18_">
              <g>
                <path
                  style={{ fill: "#F78F1E" }}
                  d="M175.801,96.629c1.732,2.02,3.656,5.324,3.143,9.589l-8.659,68.696h-17.703       c-4.426,0-8.05,3.688-8.05,8.21c0,4.554,3.624,8.242,8.05,8.242h15.651l-7.665,60.902c-0.962,7.601-9.493,13.566-19.403,13.566       c-9.942,0-18.473-5.965-19.435-13.566l-1.828-14.656h10.359c4.426,0,8.05-3.688,8.05-8.242s-3.624-8.242-8.05-8.242H117.85       l-10.359-82.133h16.228c4.426,0,8.05-3.688,8.05-8.242c0-4.522-3.624-8.21-8.05-8.21h-18.28l-2.053-16.324       c-0.545-4.265,1.411-7.569,3.143-9.589c3.656-4.233,9.75-6.799,16.26-6.799h36.721       C166.052,89.83,172.113,92.364,175.801,96.629z"
                />
                <path
                  style={{ fill: "#A3D661" }}
                  d="M173.107,16.452v4.233c0,18.665-14.881,33.835-33.129,33.835       c-18.28,0-33.129-15.169-33.129-33.835v-4.233h17.19l9.044,14.624c1.443,2.309,3.848,3.72,6.51,3.816       c2.694,0.128,5.195-1.122,6.767-3.303l11-15.137H173.107z"
                />
                <path
                  style={{ fill: "#2D213F" }}
                  d="M187.892,85.757c5.548,6.446,8.018,14.464,7.023,22.546l-18.377,146.05       c-1.988,15.939-17.222,27.966-35.374,27.966c-18.184,0-33.386-12.027-35.406-27.966l-18.344-146.05       c-1.026-8.082,1.475-16.1,7.024-22.546c6.767-7.857,17.126-12.379,28.351-12.379h36.721       C170.766,73.378,181.093,77.9,187.892,85.757z M178.944,106.218c0.513-4.265-1.411-7.569-3.143-9.589       c-3.688-4.265-9.75-6.799-16.292-6.799h-36.721c-6.51,0-12.604,2.566-16.26,6.799c-1.732,2.02-3.688,5.324-3.143,9.589       l2.053,16.324h18.28c4.426,0,8.05,3.688,8.05,8.21c0,4.554-3.624,8.242-8.05,8.242H107.49l10.359,82.133h12.411       c4.426,0,8.05,3.688,8.05,8.242s-3.624,8.242-8.05,8.242h-10.359l1.828,14.656c0.962,7.601,9.493,13.566,19.435,13.566       c9.91,0,18.441-5.965,19.403-13.566l7.665-60.902h-15.651c-4.426,0-8.05-3.688-8.05-8.242c0-4.522,3.624-8.21,8.05-8.21h17.703       L178.944,106.218z"
                />
                <path
                  style={{ fill: "#2D213F" }}
                  d="M189.207,8.242v12.443c0,27.741-22.097,50.319-49.229,50.319       c-27.164,0-49.229-22.578-49.229-50.319V8.242c0-4.554,3.592-8.242,8.05-8.242h29.665c2.758,0,5.324,1.443,6.799,3.816       l5.163,8.338l6.446-8.852C148.381,1.219,150.786,0,153.32,0h27.837C185.583,0,189.207,3.688,189.207,8.242z M173.107,20.686       v-4.233H157.36l-11,15.137c-1.571,2.181-4.073,3.432-6.767,3.303c-2.662-0.096-5.067-1.507-6.51-3.816l-9.044-14.624h-17.19       v4.233c0,18.665,14.849,33.835,33.129,33.835C158.226,54.52,173.107,39.351,173.107,20.686z"
                />
              </g>
            </g>
          </g>
          <g>
            <path
              style={{ fill: "#F27900" }}
              d="M175.801,96.629c-1.292-1.494-2.886-2.758-4.679-3.794c-3.893,20.253-10.51,51.926-18.979,82.124     c0.148-0.01,0.289-0.045,0.439-0.045h17.703l8.659-68.696C179.457,101.953,177.533,98.65,175.801,96.629z"
            />
            <path
              style={{ fill: "#F27900" }}
              d="M141.165,265.835c9.91,0,18.441-5.965,19.403-13.566l7.665-60.902h-15.651     c-1.79,0-3.432-0.625-4.775-1.645c-3.749,12.148-7.793,23.659-12.065,33.649c1.568,1.504,2.569,3.627,2.569,6     c0,4.554-3.624,8.242-8.05,8.242h-1.376c-2.463,4.461-4.99,8.297-7.562,11.398l0.407,3.262     C122.692,259.87,131.223,265.835,141.165,265.835z"
            />
          </g>
        </g>
      </g>
    </svg>
  );

  return (
    <div>
      <div className="fixed top-0 flex w-full max-w-lg mx-auto py-2 text-xl text-white font-bold shadow-md bg-orange-400 rounded-b-full">
        {canGoBack ? (
          <div className="flex justify-center items-center w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </div>
        ) : (
          <div className="flex justify-center items-center w-1/3"></div>
        )}
        {title ? (
          <div className="flex justify-center items-center w-1/3">
            <span>{title}</span>
          </div>
        ) : null}
        <div className="flex justify-center items-center w-1/3" />
      </div>
      <div className={cls("pt-12", hasTabBar ? "pb-7" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="fixed -bottom-5 flex justify-around items-center w-full max-w-lg mx-auto max-h-[44px] py-2 text-xl text-white font-bold shadow-md bg-orange-400 rounded-t-full hover:-translate-y-5 transition">
          <Link href={"/"}>
            <div className="flex flex-col items-center -space-y-1 cursor-pointer hover:-translate-y-5 transition">
              <div>{carrotSVG}</div>
              <span className="absolute -bottom-6">Home</span>
            </div>
          </Link>
          <Link href={"/community"}>
            <div className="flex flex-col items-center -space-y-1 cursor-pointer hover:-translate-y-5 transition">
              <div>{carrotSVG}</div>
              <span className="absolute -bottom-6">News</span>
            </div>
          </Link>
          <Link href={"/chats"}>
            <div className="flex flex-col items-center -space-y-1 cursor-pointer hover:-translate-y-5 transition">
              <div>{carrotSVG}</div>
              <span className="absolute -bottom-6">Chat</span>
            </div>
          </Link>
          <Link href={"/stream"}>
            <div className="flex flex-col items-center -space-y-1 cursor-pointer hover:-translate-y-5 transition">
              <div>{carrotSVG}</div>
              <span className="absolute -bottom-6">Live</span>
            </div>
          </Link>
          <Link href={"/profile"}>
            <div className="flex flex-col items-center -space-y-1 cursor-pointer hover:-translate-y-5 transition">
              <div>{carrotSVG}</div>
              <span className="absolute -bottom-6">My</span>
            </div>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
