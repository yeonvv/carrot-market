import Photo from "./photo";
import Star from "./star";

interface ReviewProps {
  id: string;
  user: string;
  star: number;
  opinion: string;
}

export default function Review({ id, user, star, opinion }: ReviewProps) {
  return (
    <div key={id} className="py-5 space-y-2">
      <div className="flex items-center space-x-3">
        <Photo md />
        <div className="flex flex-col items-start">
          <h4 className="pl-1 text-sm font-bold cursor-pointer">{user}</h4>
          <Star star={star} />
        </div>
      </div>
      <div>
        <p>{opinion}</p>
      </div>
    </div>
  );
}
