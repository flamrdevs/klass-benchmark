import run, { equal } from "~/@";

type Fn = (props: Record<PropertyKey, any>) => string;

const exe = <T extends Fn>(fn: T) => {
  return [fn({}), fn({ color: "red", size: "md", disabled: true }), fn({ color: "green", size: "lg", disabled: false })] as const;
};

const test = <T extends Fn>(fn: T) => {
  const [r1, r2, r3] = exe(fn);

  const base = "inline-flex items-center justify-center outline-none rounded-lg";

  equal(r1, `${base} bg-blue-700 text-white px-4 py-2 h-9 font-medium`);
  equal(r2, `${base} bg-red-700 text-white px-4 py-2 h-9 font-medium disabled:opacity-75 disabled-red disabled-md`);
  equal(r3, `${base} bg-green-700 text-white px-5 py-2.5 h-10 font-semibold`);
};

export const start = <T extends Fn>(key: string, fn: T) => {
  test(fn);

  run("variants-compound", key, () => {
    exe(fn);
  });
};

export const impostor = <T extends Fn>(key: string, fn: T) => {
  run("variants-compound", key, () => {
    exe(fn);
  });
};
