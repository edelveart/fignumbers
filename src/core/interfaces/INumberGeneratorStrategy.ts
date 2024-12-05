export interface INumberGeneratorStrategy<TGenConfig> {
  generate(config: TGenConfig): Generator<bigint>;
}
