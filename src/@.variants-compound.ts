import { klass } from "@klass/core";
import { cv } from "@intrnl/cv";
import { classed } from "@tw-classed/core";
import { cva } from "class-variance-authority";
import { variants } from "classname-variants";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

import { Bench, vest, getVestErrorMessage, write } from "~/libs";

const bench = new Bench();

type O = (props: { color?: "red" | "green" | "blue"; size?: "md" }) => string;

const call = <T extends O>(fn: T) => {
  return [fn({}), fn({ color: "red", size: "md" })] as const;
};

const suite = vest.create((data: ReturnType<typeof call>) => {
  vest.test("class[0]", "class do not match", () => {
    vest
      .enforce(data[0])
      .equals(
        "inline-flex items-center justify-center outline-none rounded-lg bg-blue-700 text-white px-4 py-2 h-9 font-medium color-blue&size-md"
      );
  });

  vest.test("class[1]", "class do not match", () => {
    vest
      .enforce(data[1])
      .equals("inline-flex items-center justify-center outline-none rounded-lg bg-red-700 text-white px-4 py-2 h-9 font-medium");
  });
});

const create = <T extends (props: { color?: "red" | "green" | "blue"; size?: "md" }) => string>(name: string, fn: T) => {
  const result = suite(call(fn));
  if (result.hasErrors()) throw new Error(getVestErrorMessage(name, result));
  bench.add(name, () => {
    call(fn);
  });
};

create(
  "@klass/core",
  klass({
    base: "inline-flex items-center justify-center outline-none rounded-lg",
    variants: {
      color: {
        red: "bg-red-700 text-white",
        green: "bg-green-700 text-white",
        blue: "bg-blue-700 text-white",
      },
      size: {
        md: "px-4 py-2 h-9 font-medium",
      },
    },
    defaultVariants: {
      color: "blue",
      size: "md",
    },
    compoundVariants: [
      {
        color: "blue",
        size: "md",
        class: "color-blue&size-md",
      },
    ],
  })
);

create(
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
          md: "px-4 py-2 h-9 font-medium",
        },
      },
      defaultVariants: {
        color: "blue",
        size: "md",
      },
      compoundVariants: [
        {
          color: "blue",
          size: "md",
          class: "color-blue&size-md",
        },
      ],
    },
    {
      it: twMerge,
    }
  )
);

create(
  "@intrnl/cv",
  cv("inline-flex items-center justify-center outline-none rounded-lg", {
    variants: {
      color: {
        red: "bg-red-700 text-white",
        green: "bg-green-700 text-white",
        blue: "bg-blue-700 text-white",
      },
      size: {
        md: "px-4 py-2 h-9 font-medium",
      },
    },
    defaultVariants: {
      color: "blue",
      size: "md",
    },
    compoundVariants: [
      {
        color: "blue",
        size: "md",
        className: "color-blue&size-md",
      },
    ],
  })
);

create(
  "@tw-classed/core",
  classed({
    base: "inline-flex items-center justify-center outline-none rounded-lg",
    variants: {
      color: {
        red: "bg-red-700 text-white",
        green: "bg-green-700 text-white",
        blue: "bg-blue-700 text-white",
      },
      size: {
        md: "px-4 py-2 h-9 font-medium",
      },
    },
    defaultVariants: {
      color: "blue",
      size: "md",
    },
    compoundVariants: [
      {
        color: "blue",
        size: "md",
        class: "color-blue&size-md",
      },
    ],
  })
);

create(
  "class-variance-authority",
  cva("inline-flex items-center justify-center outline-none rounded-lg", {
    variants: {
      color: {
        red: "bg-red-700 text-white",
        green: "bg-green-700 text-white",
        blue: "bg-blue-700 text-white",
      },
      size: {
        md: "px-4 py-2 h-9 font-medium",
      },
    },
    defaultVariants: {
      color: "blue",
      size: "md",
    },
    compoundVariants: [
      {
        color: "blue",
        size: "md",
        class: "color-blue&size-md",
      },
    ],
  })
);

create(
  "classname-variants",
  variants({
    base: "inline-flex items-center justify-center outline-none rounded-lg",
    variants: {
      color: {
        red: "bg-red-700 text-white",
        green: "bg-green-700 text-white",
        blue: "bg-blue-700 text-white",
      },
      size: {
        md: "px-4 py-2 h-9 font-medium",
      },
    },
    defaultVariants: {
      color: "blue",
      size: "md",
    },
    compoundVariants: [
      {
        variants: {
          color: "blue",
          size: "md",
        },
        className: "color-blue&size-md",
      },
    ],
  })
);

create(
  "tailwind-variants(-tailwind-merge)",
  tv(
    {
      base: "inline-flex items-center justify-center outline-none rounded-lg",
      variants: {
        color: {
          red: "bg-red-700 text-white",
          green: "bg-green-700 text-white",
          blue: "bg-blue-700 text-white",
        },
        size: {
          md: "px-4 py-2 h-9 font-medium",
        },
      },
      defaultVariants: {
        color: "blue",
        size: "md",
      },
      compoundVariants: [
        {
          color: "blue",
          size: "md",
          class: "color-blue&size-md",
        },
      ],
    },
    {
      twMerge: false,
    }
  )
);

create(
  "tailwind-variants(+tailwind-merge)",
  tv(
    {
      base: "inline-flex items-center justify-center outline-none rounded-lg",
      variants: {
        color: {
          red: "bg-red-700 text-white",
          green: "bg-green-700 text-white",
          blue: "bg-blue-700 text-white",
        },
        size: {
          md: "px-4 py-2 h-9 font-medium",
        },
      },
      defaultVariants: {
        color: "blue",
        size: "md",
      },
      compoundVariants: [
        {
          color: "blue",
          size: "md",
          class: "color-blue&size-md",
        },
      ],
    },
    {
      twMerge: true,
    }
  )
);

write("variants-compound", bench);
