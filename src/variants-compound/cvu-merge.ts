import { config, cx } from "cvu";
import { twMerge } from "tailwind-merge";

import { start } from "./@";

const cvu = config({
  cx: (...inputs) => twMerge(cx(inputs)),
});

start(
  "cvu + tailwind-merge",
  cvu("inline-flex items-center justify-center outline-none rounded-lg", {
    variants: {
      color: {
        red: "bg-red-700 text-white",
        green: "bg-green-700 text-white",
        blue: "bg-blue-700 text-white",
      },
      size: {
        sm: "px-3 py-1.5 h-8 font-normal",
        md: "px-4 py-2 h-9 font-medium",
        lg: "px-5 py-2.5 h-10 font-semibold",
      },
      disabled: {
        true: "disabled:opacity-75",
      },
    },
    defaultVariants: {
      color: "blue",
      size: "md",
    },
    compoundVariants: [
      {
        color: "red",
        disabled: true,
        className: "disabled-red",
      },
      {
        color: "green",
        disabled: true,
        className: "disabled-green",
      },
      {
        color: "blue",
        disabled: true,
        className: "disabled-blue",
      },
      {
        size: "sm",
        disabled: true,
        className: "disabled-sm",
      },
      {
        size: "md",
        disabled: true,
        className: "disabled-md",
      },
      {
        size: "lg",
        disabled: true,
        className: "disabled-lg",
      },
    ],
  })
);
