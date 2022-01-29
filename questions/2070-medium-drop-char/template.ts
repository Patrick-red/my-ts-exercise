type DropChar<S, C> = S extends `${infer H}${infer R}`
    ? `${H extends C ? '' : H}${DropChar<R, C>}`
    : ''


// type DropChar<S, C> = S extends `${infer H}${infer R}` 
//     ? H extends C ? `${DropChar<R, C>}` : `${H}${DropChar<R, C>}`
//     : ''
// 类型实例化过深，且可能无限。

    type asw = DropChar<' b u t t e r f l y ! ', 'b'>