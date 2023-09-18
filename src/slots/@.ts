import run, { equal } from "~/@";

type Fn = (props: Record<PropertyKey, any>) => Record<PropertyKey, (props: Record<PropertyKey, any>) => string>;

const exe = <T extends Fn>(fn: T) => {
  const { root, header, body, footer } = fn({ color: "red", size: "md", disabled: true });
  return {
    root: root({}),
    header: header({}),
    body: body({}),
    footer: footer({}),
  };
};

const test = <T extends Fn>(fn: T) => {
  const { root, header, body, footer } = exe(fn);

  equal(root, `root root-color-red root-size-md disabled:opacity-75 root-disabled-red root-disabled-md`);
  equal(header, `header`);
  equal(body, `body body-color-red body-size-md disabled:opacity-75`);
  equal(footer, `footer`);
};

export const start = <T extends Fn>(key: string, fn: T) => {
  test(fn);

  run("slots", key, () => {
    exe(fn);
  });
};

type ImpostorPandaCSSFn = (props: Record<PropertyKey, any>) => Record<PropertyKey, string | undefined>;
export const impostorPandaCSS = <T extends ImpostorPandaCSSFn>(key: string, fn: T) => {
  const exe = <T extends ImpostorPandaCSSFn>(fn: T) => {
    const { root, header, body, footer } = fn({ color: "red", size: "md", disabled: true });
    return { root, header, body, footer };
  };

  run("slots", key, () => {
    exe(fn);
  });
};
