type ObjectFromEntries<T extends [string, any]> = {
    [K in T as K['0']]: K['1']  // 这里的K in T的时候会遍历
}

