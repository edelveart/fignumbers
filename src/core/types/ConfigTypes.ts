import { CONFIG_CONSTANTS } from "./configConstants.js";

type ConfigKeys = keyof typeof CONFIG_CONSTANTS;

type ParamsConfigMappedBigInt<TKey extends ConfigKeys> = {
  [key in TKey]?: bigint;
};

export type StepConfig = ParamsConfigMappedBigInt<"step">;

export type MConfigStepConfig = ParamsConfigMappedBigInt<"step" | "m">;

export type StartConfigMConfigStepConfig = ParamsConfigMappedBigInt<"step" | "m" | "start">;

export type KConfigStepConfig = ParamsConfigMappedBigInt<"step" | "k">;

export type KConfigStartConfigStepConfig = ParamsConfigMappedBigInt<"step" | "start" | "k">;

export type KConfigStartConfigMConfigStepConfig = ParamsConfigMappedBigInt<
  "step" | "m" | "start" | "k"
>;
