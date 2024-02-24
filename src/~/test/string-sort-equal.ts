import type { Fn } from "./../types";

const sort = (string: string) => string.trim().split(" ").toSorted().join(" ");

export default <P>(fn: Fn<P>, options: Record<string, Record<string, unknown>>) => {
  let expected: string, received: string;
  for (expected in options)
    if ((received = sort(fn(options[expected] as P))) !== (expected = sort(expected)))
      throw new Error(`Expected '${expected}' | Received '${received}'`);
};
