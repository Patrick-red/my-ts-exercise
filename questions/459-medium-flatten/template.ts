type Flatten<T extends any[]> = T extends [infer H, ...infer B]
  ? H extends any[] ? [...Flatten<H>, ...Flatten<B>] : [H, ...Flatten<B>]
  : []


// 和298一个思路，遍历存到新的数组里
// type Flatten<T extends any[], U extends any[] = []> = T extends [infer H, ...infer B]
//   ? H extends any[] ? Flatten<B, [...U, ...Flatten<H>]> : Flatten<B, [...U, H]>
//   : U