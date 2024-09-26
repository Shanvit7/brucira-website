"use client";
// UTILS
import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingLabelInput = forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ label, className, required = false, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [hasValue, setHasValue] = useState<boolean>(false);

  return (
    <div className="relative mb-4">
      <input
        {...props}
        className={cn(
          "block px-3 py-2 w-full text-black bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer",
          className
        )}
        ref={ref}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== "");
        }}
        onChange={(e) => setHasValue(e.target.value !== "")}
      />
      <label
        htmlFor={label}
        className={`absolute text-sm duration-300 transform ${
          isFocused || hasValue
            ? "-translate-y-6 scale-75 text-red-600"
            : "translate-y-0"
        } top-3 left-3 origin-[0] peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
      >
        {label}
        {required ? "*" : ""}
      </label>
    </div>
  );
});

FloatingLabelInput.displayName = "FloatingLabelInput";

export default FloatingLabelInput;
