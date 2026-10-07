const ADDRESSES = require('../helper/coreAssets.json')
const { sumTokensExport } = require('../helper/unwrapLPs')

const FLOOOR_CONTRACTS = [
  '0xD53292182A342953f446CD4D10Dc177776044306', // current
  '0xF6B2C2411a101Db46c8513dDAef10b11184c58fF', // legacy
  '0xD3706917c71b1A81CeCc31311C6B41eac344DDb5', // loopers
  '0x0c2d41b6896a7dde2641a0fe04165df180c43242', // warplets
  '0x0DA60a9965e1059F2258d5e74c3839844FEF1Cf9', // gnars
  '0x89350393e99f1df89D09376a02a99BAE9aBc8d8F', // based nouns
  '0x0669583e7d5bE64967153dd276987415926b5e32', // based onchain dinos
]

module.exports = {
  methodology: 'TVL is the native ETH held in the flooor.fun auction contracts on Base (one per NFT collection, plus the legacy contract), comprising the current highest bid locked in escrow (activebidAM) plus accumulated epoch pool rewards (poolAccrued). ETH exits the contract when sellToHighest() is called, distributing 99.5% to the NFT seller and 0.5% fee to the protocol.',

  base: {
    tvl: sumTokensExport({
      owners: FLOOOR_CONTRACTS,
      tokens: [ADDRESSES.null],
    }),
  },
}
