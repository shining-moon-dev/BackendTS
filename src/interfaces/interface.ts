export interface Token0 {
    id: String
}

export interface Token1 {
    id: String
}

export interface Pair {
    id: String
    token0: Token0
    token1: Token1
}

export interface Pairs {
    pairs: any
}

export interface QueryResult {
    data: any
}