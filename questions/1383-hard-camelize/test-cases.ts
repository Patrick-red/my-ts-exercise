import { Equal, Expect } from '@type-challenges/utils'
import {Camelize} from './template'
type cases = [
  Expect<Equal<
  Camelize<{
    some_prop: string, 
    prop: { another_prop: string },
    // array: [{ snake_case: string }, { snake_case: string }]
    array: [{ snake_case: string }]
  }>,
  {
    someProp: string, 
    prop: { anotherProp: string },
    // array: [{ snakeCase: string }, { snakeCase: string }]
    array: [{ snakeCase: string }]
  }
  >>
]

