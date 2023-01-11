import { execute } from '../../.graphclient'

// Fetch All Pairs Data with query.
// This Query can be changed for purpose.
const fetchAllPairData = async(first: Number, skip: Number) => {

    const uniswapAllPairQuery = `
    { 
        pairs(first: ${first}, skip: ${skip}) {
            id
            token0 {
                id
            }
            token1 {
                id
            } 
        }
    }`

    const result = await execute(uniswapAllPairQuery , {});
    return result
}

export default {
    fetchAllPairData
}