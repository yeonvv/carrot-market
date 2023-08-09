import cls from "@libs/client/utils";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  type: "email" | "number";
  placeholder?: string;
  price?: boolean;
  phone?: boolean;
  register?: UseFormRegisterReturn;
}

export default function Input({
  type,
  label,
  placeholder,
  price,
  phone,
  register,
}: InputProps) {
  return (
    <div className="w-full space-y-2">
      <label htmlFor={label} className="text-sm font-medium">
        {label}
      </label>
      <div
        className={cls(
          "flex relative",
          phone ? " rounded-lg shadow-md" : "items-center justify-center"
        )}
      >
        {price ? (
          <span className="absolute left-3 text-gray-500">$</span>
        ) : null}
        {phone ? (
          <span className="flex items-center justify-center px-3 rounded-l-lg bg-gray-100 text-sm text-gray-500 select-none border border-r-0 border-gray-300">
            +82
          </span>
        ) : null}
        <input
          id={label}
          type={type}
          {...register}
          placeholder={placeholder}
          className={cls(
            "appearance-none w-full bg-gradient-to-br from-orange-50 to-orange-100 shadow-md placeholder-gray-400 border-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition",
            price ? "pl-7" : "",
            phone ? "rounded-r-lg shadow-none" : "rounded-lg"
          )}
        />
        {price ? (
          <span className="absolute right-3 text-gray-500">USD</span>
        ) : null}
      </div>
    </div>
  );
}
