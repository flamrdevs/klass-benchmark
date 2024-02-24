export type Config = {
  name: string;
  merge?: boolean;
  relevant?: boolean;
};

export type Fn<P = Record<any, any>> = (props: P) => string;
