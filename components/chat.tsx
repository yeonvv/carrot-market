import Link from "next/link";
import Photo from "./photo";

interface ChatProps {
  id: string;
  user: string;
  lastMsg: string;
}

export default function Chat({ id, user, lastMsg }: ChatProps) {
  return (
    <Link href={"/chats/1"}>
      <div
        key={id}
        className="flex items-center py-5 space-x-3 bg-gradient-to-br from-orange-50 to-orange-100 cursor-pointer "
      >
        <Photo lg />
        <div className="space-y-1">
          <p className="text-sm font-medium">{user}</p>
          <p className="text-xs text-gray-500">{lastMsg}</p>
        </div>
      </div>
    </Link>
  );
}
