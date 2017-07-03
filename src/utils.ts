import { Clone, IMerge, Merge } from 'lutils';

export const merge: IMerge = new Merge({ depth: 100 }).merge;
export const clone = new Clone({ depth: 100 }).clone;
