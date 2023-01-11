import { UniswapItem } from "../models/UniswapItem";
import { QueryResult, Pairs, Pair, Token0, Token1 } from "../interfaces/interface";

const saveUniswapPairs = async (param: Pairs) => {
    try {
        await Promise.all(
            param?.pairs.map( async (elem: Pair) => {
                const uniswapItem = new UniswapItem({
                    pair: elem?.id,
                    token0: elem?.token0?.id,
                    token1: elem?.token1?.id
                })
                await uniswapItem.save()
            })
        )
    } catch (e) {
        console.log(e)
    }    
}

const uniswapDumpService = async (req: any, res: any) => {
}

export default {
    saveUniswapPairs,
    uniswapDumpService
}