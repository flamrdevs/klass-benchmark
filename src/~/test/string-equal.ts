import type { Fn } from "./../types";

export default <T extends Fn>(fn: T, options: Record<string, Record<string, unknown>>) => {
  let expected: string, received: string;
  for (expected in options)
    if (expected !== (received = fn(options[expected]))) throw new Error(`Expected '${expected}' | Received '${received}'`);
};
