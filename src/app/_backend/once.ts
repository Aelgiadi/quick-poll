export function once<T extends (...args: any[]) => any>(fn: T): T {
    let called = false;
    let result: any;
  
    return function (...args: any[]) {
      if (!called) {
        called = true;
        result = fn(...args);
      }
      return result;
    } as T;
  }