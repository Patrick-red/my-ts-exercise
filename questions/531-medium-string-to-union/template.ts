type StringToUnion<T extends string> = T extends `${infer H}${infer B}` ? H | StringToUnion<B> : never

