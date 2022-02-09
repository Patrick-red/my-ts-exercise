type SplitDot<S, R extends any[] = []> = S extends `${infer H}.${infer T}`
    ? SplitDot<T, [...R, H]>
    : S extends `${infer U}` ? [...R, U] : R

// type Get<T, K, A = SplitDot<K>, P = T> = A extends []
//     ? P
//     : A extends [infer H, ...infer U]
//         ? H extends keyof P ? Get<T, K, U, P[H]> : never
//         : P

        type Get<T extends Record<string, any>, K extends string> = 
        K extends `${infer L}.${infer R}`
          ? T[L] extends Record<string, any>
            ? Get<T[L], R>
            : never
          : unknown extends T[K]
            ? never
            : T[K]