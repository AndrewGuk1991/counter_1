import type {RootState} from "./store.ts";

export const selectStartCount = (state: RootState) => state.counter.startCount
export const selectMaxCount = (state: RootState) => state.counter.maxCount