import express, { Request, Response } from 'express'
import UniswapDumper from '../controller/UniswapDumping'

const router = express.Router()

router.get('/api/uniswap', UniswapDumper.uniswapDumpService)

export { router as tsRouter }