export type TTODO = any;

export type TId = string;
export type TData = string;
export type TEmail = string;
export type TUrl = string;

export type TSingletone<T> = {
  getInstance(): T;
};

export type TPrettify<T> = {
  [K in keyof T]: T[K];
} & {};
