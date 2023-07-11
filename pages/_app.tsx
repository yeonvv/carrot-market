import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full min-h-screen max-w-lg mx-auto text-gray-700 bg-gradient-to-br from-orange-50 to-orange-100">
      <Component {...pageProps} />
    </div>
  );
}
