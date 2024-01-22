const { version } = require('../package.json');
const mainnet = require('./tokens/mainnet.json');
const skaleTestnetV2 = require('./tokens/skale-testnet-v2.json');
const skaleMainnet = require('./tokens/skale-mainnet.json');
const bobaRinkeby = require('./tokens/boba-rinkeby.json');
const auroraTestnet = require('./tokens/aurora-testnet.json');
const bscTestnet = require('./tokens/bsc-testnet.json');
const goerli = require('./tokens/goerli.json');
const neonEvmDevnet = require('./tokens/neon-evm-devnet.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'Capital DEX',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'https://raw.githubusercontent.com/CurioTeam/capital-dex-token-list/master/assets/logo.svg',
    'keywords': [
      'capital dex',
      'default'
    ],
    tokens: [
      ...mainnet,
      ...skaleTestnetV2,
      ...skaleMainnet,
      ...bobaRinkeby,
      ...auroraTestnet,
      ...bscTestnet,
      ...goerli,
      ...neonEvmDevnet,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
  };
};
