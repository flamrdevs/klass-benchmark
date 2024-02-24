import * as v from "valibot";

export type Schema = v.Output<typeof schema>;

const schema = v.object({
  name: v.string(),
  merge: v.optional(v.boolean(), false),
  relevant: v.optional(v.boolean(), true),
  ops: v.number(),
});

export const parse = (input: unknown) => v.parse(schema, input);
