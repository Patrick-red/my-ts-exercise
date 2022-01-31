type Flip<T> = {
  [K in keyof T as T[K] extends PropertyKey ? T[K] : T[K] extends boolean ? `${T[K]}` : never]: K
}
// as T[K]，前面的东西就直接变成T[K]的type了
// 这里第一处已经是PropertyKey了，所以不需要加字符串，后面因为是boolean，所以要加
// type PropertyKey = string | number | symbol
// ok
//  [K in keyof T as K extends K ? T[K] extends any ? never: never : never]: K 
// error
//  [K in keyof T as K extends K ? `${T[K]}` : never]: K
  