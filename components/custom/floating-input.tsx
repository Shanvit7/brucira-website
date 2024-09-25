'use client';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingLabelInput = forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          type="text"
          id={label}
          className={cn("block text-black p-4 w-full h-10 text-base rounded-md bg-transparent border border-1 appearance-none focus:outline-none focus:ring-0 focus:border-red-500 peer",className)}
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={label}
          className="absolute left-4 top-1/4 transform -translate-y-[100%] text-base text-gray-600 duration-300 scale-75 origin-[0] bg-transparent px-1 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 z-0 pointer-events-none"
        >
          {label}
        </label>
      </div>
    );
  }
);

FloatingLabelInput.displayName = 'FloatingLabelInput';

export default FloatingLabelInput;