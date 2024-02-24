import type { Fn } from "./../types";

export default <P>(fn: Fn<P>, options: Record<string, Record<string, unknown>>) => {
  let expected: string, received: string;
  for (expected in options)
    if (expected !== (received = fn(options[expected] as P))) throw new Error(`Expected '${expected}' | Received '${received}'`);
};
