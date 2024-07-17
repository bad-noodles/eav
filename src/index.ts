/**
 * Error as value implemented in Typescript
 * Uses array destructuring to simulate multiple return values
 * First value of array is the return value, second is the error
 */

export type Success<T> = [T, null];
export type Failure = [null, Error];
export type Result<T> = Success<T> | Failure;
export type Runnable<T> = () => Promise<T> | T;

export async function eav<T>(fn: Runnable<T>): Promise<Result<T>> {
  try {
    return [await fn(), null];
  } catch (error) {
    return [null, error as Error];
  }
}
