type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K]
}

// K in keyof T 遍历 as string 无视前面，当成string，extends K 如果是的话 K就是string，要设置成never，key设置成never后不会出现 

// 还是会遍历
// type RemoveIndexSignature<T> = {
//     [K in keyof T]: T[K]
// }

