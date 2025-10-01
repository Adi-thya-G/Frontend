import type { ComponentProps, ReactNode } from "react";

interface Props extends ComponentProps<"button"> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  label: string;
}

function Button({ startIcon,endIcon ,className, label, children, ...props }: Props) {
  return (
    <button className={` ${className} place-items-center`} {...props}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {label}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}

export default Button;
