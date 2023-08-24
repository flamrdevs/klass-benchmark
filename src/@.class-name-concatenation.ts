import { cxs } from "@klass/core";
import { cx } from "cva";
import clsx from "clsx";
import classnames from "classnames";

import { Bench, vest, getVestErrorMessage, write } from "~/libs";

const bench = new Bench();

type O = (...args: any[]) => string;

const call = <T extends O>(fn: T) => {
  const istrue: boolean = true;
  const isfalse: boolean = false;

  return [
    fn("block", istrue ? "bg-red-700" : "bg-white", isfalse && "hidden"),
    fn("flex", { "bg-red-700": istrue, "bg-white": !istrue, hidden: isfalse }, ["relative", istrue ? "text-white" : "text-black"]),
  ] as const;
};

const suite = vest.create((data: ReturnType<typeof call>) => {
  vest.test("class[0]", "class do not match", () => {
    vest.enforce(data[0]).equals("block bg-red-700");
  });

  vest.test("class[1]", "class do not match", () => {
    vest.enforce(data[1]).equals("flex bg-red-700 relative text-white");
  });
});

const create = <T extends O>(name: string, fn: T) => {
  const result = suite(call(fn));
  if (result.hasErrors()) throw new Error(getVestErrorMessage(name, result));
  bench.add(name, () => {
    call(fn);
  });
};

create("cxs (@klass/core)", cxs);

create("cx (cva)", cx);

create("clsx", clsx);

create("classnames", classnames);

write("class-name-concatenation", bench);
