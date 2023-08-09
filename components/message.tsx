import cls from "@libs/client/utils";
import Photo from "./photo";

interface MessageProps {
  me?: boolean;
  msg: string;
}

export default function Message({ me, msg }: MessageProps) {
  return (
    <div
      className={cls(
        "flex items-start space-x-3",
        me ? "flex-row-reverse  space-x-reverse" : ""
      )}
    >
      <Photo md />
      <div
        className={cls(
          "mt-5 py-1 px-2 rounded-lg w-1/2 bg-gradient-to-br from-orange-200 to-orange-100",
          me ? "rounded-tr-none" : "rounded-tl-none "
        )}
      >
        {msg}
      </div>
    </div>
  );
}
