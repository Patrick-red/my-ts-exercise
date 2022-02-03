type ToFrom = {
    mapFrom: any;
    mapTo: any
}

// type MapTypes<T, R extends ToFrom> = {
//     [K in keyof T]: R extends {mapFrom: T[K]} ? R['mapTo'] : [R extends {mapFrom: T[K]} ? never : T[K]] extends [never] ? never : T[K]
// }
// z这里不会再次遍历R

// your answers
type MapTypes<T, R extends {mapFrom:any,mapTo:any}> = {
    [key in keyof T]: [R extends {mapFrom:T[key]} ? R['mapTo']:never] extends [never]
      ? T[key]
      : R extends {mapFrom:T[key]} ? R['mapTo'] : never
  }
// 这里会重新遍历，注意第一处是处于[]中

type test2 = MapTypes<{name: string}, {mapFrom: boolean; mapTo: never;}>