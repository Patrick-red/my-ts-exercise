// type MyAwaited<T extends Promise<any>> = T extends Promise<infer P>
//     ? P extends Promise<any>
//         ? MyAwaited<P>
//         : P
//     : T

type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
  ? R extends Promise<any>
    ? MyAwaited<R>
    : R
  : T