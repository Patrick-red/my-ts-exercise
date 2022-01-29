type Empty = 0 | '' | false | [] | Record<string, never>

type AnyOf<T extends readonly any[]> =  T[number] extends Empty ? false : true


// 好像是不会一个个分开判断，而是合起来判断有没有 extends Empty， 一个有就选true


// type kk = {}
// type ks = {name: string}
// type k1 = ks extends kk ? true : false                      true
// type k2 = ks extends Record<string, never> ? true : false   false



// type arr = [0 ,'' ,false ,[] ,{}]
// type sub = [0]
// type res = sub extends arr ? string : boolean      boolean
// type res1 = arr extends sub ? string : boolean     boolean