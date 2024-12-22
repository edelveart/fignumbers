type GenRecord = Record<
  string,
  { generate: (...fignumbersParams: Record<string, bigint | undefined>[]) => Generator<bigint> }
>;

export type MappedTypeConfig<TMapStrategy extends GenRecord> = {
  [Key in keyof TMapStrategy]: Parameters<TMapStrategy[Key]["generate"]>[0];
};
