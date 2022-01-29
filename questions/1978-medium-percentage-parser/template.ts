// result: [plusOrde, '100', '%']
type pulsOrde = '+' | '-'

type num<A extends string, T extends string[] = []> = A extends `${infer N}%` ? [N, '%'] : A extends '' ? ['', ''] : [A, '']

type PercentageParser<A extends string, T extends string[] = []> = A extends `+${infer U}` 
    ? ['+', ...num<U>] 
    : A extends `-${infer U}`
        ? ['-', ...num<U>] 
        : ['', ...num<A>]

type ca = PercentageParser<'+1'>