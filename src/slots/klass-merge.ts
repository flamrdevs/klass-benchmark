import slots from "@klass/core/slots";
import { twMerge } from "tailwind-merge";

import { start } from "./@";

const fn = slots(
  {
    base: {
      root: "root",
      header: "header",
      body: "body",
      footer: "footer",
    },
    variants: {
      color: {
        red: {
          root: "root-color-red",
          body: "body-color-red",
        },
        green: {
          root: "root-color-green",
          body: "body-color-green",
        },
        blue: {
          root: "root-color-blue",
          body: "body-color-blue",
        },
      },
      size: {
        sm: {
          root: "root-size-sm",
          body: "body-size-sm",
        },
        md: {
          root: "root-size-md",
          body: "body-size-md",
        },
        lg: {
          root: "root-size-lg",
          body: "body-size-lg",
        },
      },
      disabled: {
        true: {
          root: "disabled:opacity-75",
          body: "disabled:opacity-75",
        },
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
        class: {
          root: "root-disabled-red",
        },
      },
      {
        color: "green",
        disabled: true,
        class: {
          root: "root-disabled-green",
        },
      },
      {
        color: "blue",
        disabled: true,
        class: {
          root: "root-disabled-blue",
        },
      },
      {
        size: "sm",
        disabled: true,
        class: {
          root: "root-disabled-sm",
        },
      },
      {
        size: "md",
        disabled: true,
        class: {
          root: "root-disabled-md",
        },
      },
      {
        size: "lg",
        disabled: true,
        class: {
          root: "root-disabled-lg",
        },
      },
    ],
  },
  { it: twMerge }
);

start("@klass/core/slots + tailwind-merge", fn);
