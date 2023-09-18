import { sva } from "@pandacss/out/css";

import { impostorPandaCSS } from "./@";

const fn = sva({
  slots: ["root", "header", "body", "footer"],
  base: {
    root: { display: "block" },
    header: { display: "block" },
    body: { display: "block" },
    footer: { display: "block" },
  },
  variants: {
    color: {
      red: {
        root: { color: "red" },
        body: { color: "red" },
      },
      green: {
        root: { color: "green" },
        body: { color: "green" },
      },
      blue: {
        root: { color: "blue" },
        body: { color: "blue" },
      },
    },
    size: {
      sm: {
        root: { padding: 1 },
        body: { padding: 1 },
      },
      md: {
        root: { padding: 2 },
        body: { padding: 2 },
      },
      lg: {
        root: { padding: 3 },
        body: { padding: 3 },
      },
    },
    disabled: {
      true: {
        root: { opacity: 0.75 },
        body: { opacity: 0.75 },
      },
    },
  },
  defaultVariants: {
    color: "blue",
    size: "lg",
  },
  compoundVariants: [
    {
      color: "red",
      disabled: true,
      css: { root: { color: "red" } },
    },
    {
      color: "green",
      disabled: true,
      css: { root: { color: "green" } },
    },
    {
      color: "blue",
      disabled: true,
      css: { root: { color: "blue" } },
    },
    {
      size: "sm",
      disabled: true,
      css: { root: { margin: 1 } },
    },
    {
      size: "md",
      disabled: true,
      css: { root: { margin: 2 } },
    },
    {
      size: "lg",
      disabled: true,
      css: { root: { margin: 3 } },
    },
  ],
});

impostorPandaCSS("pandacss (impostor!)", fn);
