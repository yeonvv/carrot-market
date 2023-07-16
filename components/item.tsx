import Link from "next/link";

interface ItemProps {
  title: string;
  id: number;
  price: number;
  color: string;
  comments: number;
  hearts: number;
}

export default function Item({
  title,
  id,
  price,
  color,
  comments,
  hearts,
}: ItemProps) {
  return (
    <div>
      <div
        key={id}
        className="flex justify-between items-end py-3 px-10 bg-gradient-to-br from-orange-50 to-orange-100 cursor-pointer"
      >
        <Link href={"/items/1"}>
          <div className="flex">
            <div className="w-20 h-20 mr-2 rounded-lg bg-gray-500" />
            <div className="flex flex-col justify-center space-y-1">
              <h3 className="text-sm text-gray-700 font-medium">{title}</h3>
              <span className="text-xs text-gray-500">{color}</span>
              <span className="text-gray-700 font-medium">${price}</span>
            </div>
          </div>
        </Link>
        <div className="flex space-x-2">
          <div className="flex items-center space-x-0.5 text-gray-700">
            <svg
              className="w-4 h-4 hover:scale-125 hover:text-red-500 transition"
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
            <span>{comments}</span>
          </div>
          <div className="flex items-center space-x-0.5 text-gray-700">
            <svg
              className="w-4 h-4 hover:scale-125 hover:text-orange-500 transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>{hearts}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
