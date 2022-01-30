type OmitByType<T, U> = {
  [K in keyof T as K extends K ? T[K] extends U ? never : K : K]: T[K]
}

