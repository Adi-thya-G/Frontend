import Input from "./Input";
import Button from "./Button";

import {  type ReactNode } from "react";
import type { ComponentProps } from "react";

// ✅ Each input = native input props + custom label
interface FormInput extends ComponentProps<"input"> {
  label: string;
  helperText?: string;
}

// ✅ Each button = native button props + custom label/icons
interface FormButton extends ComponentProps<"button"> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  label: string;
}

interface FormProps extends ComponentProps<"form"> {
  heading?: string;
  subheading?: string;
  endHeading?: string;
  formInput?: FormInput[];
  formButton?: FormButton[];
}

function Form({ heading, subheading, endHeading, formButton, formInput,className,onSubmit}: FormProps) {
  


  return (
    <div className={`fixed inset-0 flex items-center justify-center z-10 bg-black/30 ${className}`}>
      <form
        onSubmit={onSubmit}
        className="w-full md:w-[400px] rounded-md bg-white shadow-md p-6"
      >
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-800 mb-2">{heading}</h1>
          <p className="text-sm text-gray-600 mb-6">
            {subheading}{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Learn more
            </a>
            .
          </p>
        </div>

        {/* Dynamic Inputs */}
        {formInput?.map((input, i) => (
          <div key={i} className="mb-4">
            <label
              htmlFor={input.id}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {input.label}
            </label>
            <Input {...input} className="w-full border rounded-lg px-3 py-2" />
            {input.helperText && (
              <p className="text-xs text-gray-500 mt-1">{input.helperText}</p>
            )}
          </div>
        ))}

        {/* Extra text below inputs */}
        {endHeading && (
          <p className="text-xs text-gray-500 mt-1">{endHeading}</p>
        )}

        {/* Dynamic Buttons */}
        <div className="pt-4 flex gap-2">
          {formButton?.map((button, i) => (
            <Button
              key={i}
              {...button}
              className={`w-full flex items-center justify-center gap-2 ${button.className ?? ""}`}
            >
              {button.startIcon}
              {button.label}
              {button.endIcon}
            </Button>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Form;
