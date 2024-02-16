export type Config = {
  name: string;
  merge: boolean;
};

export type Fn = (props?: Record<any, any>) => string;
