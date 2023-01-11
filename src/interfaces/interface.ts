// Interface for Token0
export interface Token0 {
    id: String
}

// Interface for Token1
export interface Token1 {
    id: String
}

// Interface for Pair
export interface Pair {
    id: String
    token0: Token0
    token1: Token1
}

// Interface for Pairs
export interface Pairs {
    pairs: any
}

// Interface for QueryResult = Returned Data
export interface QueryResult {
    data: any
}