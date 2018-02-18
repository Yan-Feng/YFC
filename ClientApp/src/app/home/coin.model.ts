interface Coin {
  rank: number;
  id: string;
  symbol: string;
  name: string;
}

interface CoinDetail {
  rank: number;
  id: string;
  symbol: string;
  name: string;
  price_usd: number
  price_btc: number
  market_cap_usd: number
  available_supply: number
  total_supply: number
  percent_change_1h: number
  percent_change_24h: number
  percent_change_7d: number
  last_updated: Date
}
