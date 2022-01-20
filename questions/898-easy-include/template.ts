import { Equal } from "@type-challenges/utils";

type Includes<T extends readonly any[], U> = T extends [infer K, ...infer R] 
    ? Equal<K, U> extends true 
        ? true 
        : Includes<R, U> 
    : false

    export default Includes

// 如果文件使用了 import，那么就不能被 test 文件自动获取到，需要手动 export