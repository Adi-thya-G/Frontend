import{ type ComponentProps, type ReactNode } from "react";
interface Props extends ComponentProps<"input"> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  error?: string;
}
function Input({
  className,
  startIcon,
  endIcon,
  type,
  name,
  placeholder,
  error,
  ...props
}: Props) {
  return (
    <div className="flex flex-col  w-full ">
      <div className="relative flex items-center w-full h-full">
        {startIcon && (
          <span className="absolute left-2 top-1/2 -translate-y-1/2">
            {startIcon}
          </span>
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`border-2  outline-0  ${className}`}
          {...props}
        />
        {endIcon && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2">
            {endIcon}
          </span>
        )}
      </div>

      <p
        className={`text-red-500 text-sm  ${
          error ? "visible" : "invisible"
        }`}
      >
        {error || "placeholder"}
      </p>
    </div>
  );
}

export default Input;
