
// type tsa = never extends never ? true : false  // true

// your answers
type UnionToIntersection<U> = (U extends unknown ? (arg: U) => unknown : never) extends ((arg: infer P) => unknown) ? P : never;

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types
// https://juejin.cn/post/6994102811218673700#heading-2
//  协变 ｜ 逆变 &
//  函数作为参数的时候：双向协变

// type aa = ((arg: string) => any) | ((arg: boolean) => any)
// type jsa = aa extends (arg: infer I) => any ? I : false  // string & boolean = never 但是上面那个不会进行逻辑计算


// interface Animal {
//     name: string;
//   }
  
//   interface Dog extends Animal {
//     break(): void;
//   }
  
//   type AnimalFn = (arg: Animal) => void
//   type DogFn = (arg: Dog) => void
  
//   let Eg1: AnimalFn;
//   let Eg2: DogFn;
//   // 不再可以赋值了，
//   // AnimalFn = DogFn不可以赋值了, Animal = Dog是可以的
//   Eg1 = Eg2;
//   // 反过来可以
//   Eg2 = Eg1;
 
  