import { klass } from "@klass/core";
import { twMerge } from "tailwind-merge";

import { start } from "./@";

start(
  "@klass/core + tailwind-merge",
  klass(
    {
      base: "inline-flex items-center justify-center outline-none rounded-lg",
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
          class: "disabled-red",
        },
        {
          color: "green",
          disabled: true,
          class: "disabled-green",
        },
        {
          color: "blue",
          disabled: true,
          class: "disabled-blue",
        },
        {
          size: "sm",
          disabled: true,
          class: "disabled-sm",
        },
        {
          size: "md",
          disabled: true,
          class: "disabled-md",
        },
        {
          size: "lg",
          disabled: true,
          class: "disabled-lg",
        },
      ],
    },
    {
      it: twMerge,
    }
  )
);
