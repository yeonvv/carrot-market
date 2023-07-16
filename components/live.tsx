import Link from "next/link";
import Photo from "./photo";

interface LiveProps {
  id: string;
  user: string;
  title: string;
}

export default function Live({ id, user, title }: LiveProps) {
  return (
    <div>
      <Link href={"/stream/1"}>
        <div key={id} className="py-5 px-10 space-y-3">
          <div className="aspect-video w-full rounded-lg bg-gray-500 cursor-pointer" />
          <div className="flex items-center space-x-2">
            <Photo md />
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 font-medium cursor-pointer">
                {user}
              </span>
              <span className="text-base font-medium cursor-pointer">
                {title}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
