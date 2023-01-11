import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { CronJob } from 'cron';
import { tsRouter } from './routes/route'
import uniswapAllPairFetcher from './controller/all-pairs-query'
import UniswapDumping from './controller/UniswapDumping';
import { QueryResult, Pairs, Pair, Token0, Token1 } from "./interfaces/interface";

dotenv.config()
const app = express()

app.use(tsRouter)

mongoose.connect(process.env.DB_URI , () => {
  console.log('DB connection established')
});

// Cron Job for Every 30Mins
const scheduledFetchData = new CronJob("*/30 * * * *", () => {
  uniswapAllPairFetcher.fetchAllPairData(1000, 1).then((res: QueryResult) => {
    UniswapDumping.saveUniswapPairs(res.data)
  })        
});

scheduledFetchData.start();

app.listen(process.env.PORT, () => {
  return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});
