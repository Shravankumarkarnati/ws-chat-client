import { debounce } from "underscore";

export const lazySearch = (fn: Function, wait: number) => debounce(fn, wait)();
