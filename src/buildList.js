const { version } = require('../package.json');
const mainnet = require('./tokens/mainnet.json');
const skaleMainnet = require('./tokens/skale-mainnet.json');
const auroraMainnet = require('./tokens/aurora-mainnet.json');
const bobaMainnet = require('./tokens/boba-mainnet.json');
const neonEvmMainnet = require('./tokens/neon-evm-mainnet.json');

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
      ...skaleMainnet,
      ...auroraMainnet,
      ...bobaMainnet,
      ...neonEvmMainnet,
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
