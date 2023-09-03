export type StateValueRepo = {
  put: (key: string, value: number) => void;
  get: (key: string) => number | undefined;
};
