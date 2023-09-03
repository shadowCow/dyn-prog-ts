import { StateValueRepo } from '../ports/state_value_repo';

export function createStateValueRepoInMemory(): StateValueRepo {
  const repo: Map<string, number> = new Map();

  return {
    put: (k, v) => repo.set(k, v),
    get: (k) => repo.get(k),
  };
}
