// type IsAny<T> = 0 extends T & 1 ? true : false

type IsEqual<A, B> = (<T>()=> T extends A ? 1: 2) extends  (<T>()=> T extends B ? 1: 2) ? true : false
type IsAny<T> = IsEqual<any, T>;

// type test11<A> = <T>()=> T extends A ? 1: 2
// type test12 = test11<any>  // type test12 = <T>() => T extends any ? 1 : 2
