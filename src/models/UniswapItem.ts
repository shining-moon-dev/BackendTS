import mongoose from 'mongoose';

const UniswapItemSchema = new mongoose.Schema({
  pair: {
    required: true,
    type: String,
  },
  token0: {
    required: true,
    type: String,
  },
  token1: {
    required: true,
    type: String
  }
});

const UniswapItem = mongoose.model('UniswapPair', UniswapItemSchema);

export { UniswapItem }
