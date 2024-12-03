import { CONFIG_CONSTANTS } from "./configConstants.js";

// /**
//  * Basic configuration with an optional `step` value.
//  * Used by various generator strategies like `PronicGenerator`
//  * @default step: 1

//  */
export type StepParameterConfig = {
  [CONFIG_CONSTANTS.step]?: number;
};

/**
 * Extended configuration with `step` and an optional `m` parameter.
 * Used by strategies that require the `m` value.
 * @default step: 1, m: 3
 */
export type MfacetsStepParameterConfig = StepParameterConfig & {
  [CONFIG_CONSTANTS.m]?: number;
};

/**
 * Extended configuration with `step`, `m`, and an optional `start` parameter.
 * Used by generator strategies like `PolygonalGenerator`.
 * @default start: 1, step: 1, m: 3
 */
export type StartStepMfacetsParameterConfig = MfacetsStepParameterConfig & {
  [CONFIG_CONSTANTS.start]?: number;
};
