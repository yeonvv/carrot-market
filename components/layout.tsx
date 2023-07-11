import cls from "@/libs/utils";
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
  return (
    <div>
      <div className="fixed top-0 flex justify-center w-full max-w-lg mx-auto py-2 text-xl text-white font-bold shadow-md bg-orange-400 rounded-b-full">
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("pt-12", hasTabBar ? "pb-12" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="fixed bottom-0 flex justify-between items-center w-full max-w-lg mx-auto py-2 text-xl text-white font-bold shadow-md bg-orange-400 rounded-t-full"></nav>
      ) : null}
    </div>
  );
}
