type StartsWith<T extends string, U extends string> = T  extends `${U}${infer H}` ? true : false

