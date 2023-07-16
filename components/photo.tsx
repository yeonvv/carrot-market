import cls from "@/libs/utils";

interface PhotoProps {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

export default function Photo({ sm, md, lg }: PhotoProps) {
  return (
    <div
      className={cls(
        "aspect-square rounded-full bg-slate-400",
        sm ? "w-8" : "",
        md ? "w-10" : "",
        lg ? "w-12" : ""
      )}
    />
  );
}
