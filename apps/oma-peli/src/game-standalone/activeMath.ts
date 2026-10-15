import { ExperimentalRoundProvider, EXPERIMENTAL_MATH } from './experimentalMath';
import type { Rng } from './math';

// The tested 30M-round model is the default for the 1.7.0 demo/test release.
export const ACTIVE_MATH = EXPERIMENTAL_MATH;
export function createActiveRoundProvider(rng?: Rng) {
	return new ExperimentalRoundProvider(rng);
}
