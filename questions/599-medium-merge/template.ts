type Merge<F, S> = {
    [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never
};

// 这里需要第二个extends来确定K的type