import { execute } from '../../.graphclient'

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