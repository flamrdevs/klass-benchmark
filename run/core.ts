import * as v from "valibot";

export type Schema = v.Output<typeof schema>;

const schema = v.object({
  name: v.string(),
  merge: v.boolean(),
  ops: v.number(),
});

export const parse = (input: unknown) => v.parse(schema, input);
