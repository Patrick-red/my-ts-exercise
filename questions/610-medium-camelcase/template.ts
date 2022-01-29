type CamelCase<S> = S extends `${infer H}-${infer B}`
    ? B extends Capitalize<B>
        ? `${H}-${CamelCase<B>}`
        : `${H}${Capitalize<CamelCase<B>>}`
    : S