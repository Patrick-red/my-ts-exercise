type EndsWith<T extends string, U extends string> = T extends `${infer H}${U}` ? true : false

