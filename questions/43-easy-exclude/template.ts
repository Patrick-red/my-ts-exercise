// union类型会逐一比较
type MyExclude<T, P> = T extends P ? never : T


// extends表示前面的比后面的更具体

type a = "a"
type b = "a" | "b"
type c = a extends b ? boolean : string

type f = {
    a: string
}
type d = {
    a: string,
    b: string
}
type e = f extends d ? boolean : string

