export const contractAddresses = {
  sushi: {
    5777: '0xf8e39D38C4174e72671B70d81c0deD4B6F1a283C', // aelf sushi new one 9.9
  },
  sashimiBar: {
    5777: '0xBE0f2827790b550BE883a3abD49A415c03845717', // aelf sushi new one 9.18
  },
  investment: {
    5777: '0x46641A3aA421beA0207Ead6d807c847a2f599943',
  },
  masterChef: {
    5777: '0xCbc27b3e5fde0c1DBc2A76D052B7fe57a984CFe6', // aelf sushi new one 9.9
  },
  weth: {
    5777: '0x7a16AD3b641481a9914658E23A8118Bd48a2946f', // aelf sushi
  },
}

export const supportedInvestmentPools = [
  {
    // CANDY - SASHIMI? pair
    lpAddresses: {
      42: '0x7c2580099eF4c34B788d3f3A192817f35dd68f8A',
      1: '0x4b618087dae7765823bc47ffbf38c8ee8489f5ca', // TODO: replace ETH-SASHIMI -> GOLFF-SASHIMI
    },
    depositAddresses: {
      42: '0xA050886815CFc52a24B9C4aD044ca199990B6690', // WETH in kovan, ERC20
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
    },
    depositTokenSymbol: 'WETH',
    tokenSymbol: 'GOLFF', // Which token will I get, when I do the harvest？
    icon: '👜',
    sashimiIndex: 1,
  },
  {
    // XYZ - SASHIMI pair
    lpAddresses: {
      42: '0xb819c827a0dc04e403099310317bd75b8a0a43fa',
      1: '0x4b618087dae7765823bc47ffbf38c8ee8489f5ca', // TODO: replace ETH-SASHIMI -> GOLFF-SASHIMI
    },
    depositAddresses: {
      42: '0x0FE180FC7548efbc2dEe32Eb208403639a01aaa5', // WETH in kovan, ERC20
      1: '0x6f259637dcd74c767781e37bc6133cd6a68aa161' // Huobi
    },
    depositTokenSymbol: 'Huobi Token',
    tokenSymbol: 'Golff', // Which token will I get, when I do the harvest？
    icon: '👝',
    sashimiIndex: 1,
  }
];
// These pools get 0 point; [type pid]
export const unStakeOnlyPools = [0, 1, 2, 3, 4, 5, 6, 8, 13, 14, 15, 16, 18, 19, 20, 21, 25];
// If is xxx-Sashimi Pool; [type pid]
// Support sashimi pair only. Used in FarmCards.tsx
export const notETHPairPools = [10, 12, 13, 14, 15, 16, 22, 23, 24];

export const hiddenPools = [101];

export const doublePools = [26, 27, 28, 29, 101];
export const unStakeOnlyDoublePools = [];

const xLPSupportedPools = [
  // xLP supported start
  {
    pid: 26,
    lpAddresses: {
      42: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
      1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
    },
    tokenAddresses: {
      42: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    },
    lpBarAddresses: {
      42: '0xE835db5C6145f6AC2CD1f697C271bcab022766Ad',
      1: '0xE835db5C6145f6AC2CD1f697C271bcab022766Ad',
    },
    name: 'Double happiness!',
    symbol: '\xa0DAI-ETH UNI-V2 LP', // and blank to make it different with the normal farm symbol
    tokenSymbol: 'WETH',
    icon: '🍗',
  },
  // 0925
  {
    pid: 27,
    lpAddresses: {
      42: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
      1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
    },
    tokenAddresses: {
      42: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    },
    lpBarAddresses: {
      42: '0xD4F7CA1e212c5203074ECD9912dD803426eF4e10',
      1: '0xD4F7CA1e212c5203074ECD9912dD803426eF4e10',
    },
    name: 'Double happiness!',
    symbol: '\xa0USDC-ETH UNI-V2 LP', // and blank to make it different with the normal farm symbol
    tokenSymbol: 'WETH',
    icon: '🍖',
  },
  {
    pid: 28,
    lpAddresses: {
      42: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
      1: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
    },
    tokenAddresses: {
      42: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    },
    lpBarAddresses: {
      42: '0x9EC7De79572312d00f536b856B9E6fE7d0a37AF1',
      1: '0x9EC7De79572312d00f536b856B9E6fE7d0a37AF1',
    },
    name: 'Double happiness!',
    symbol: '\xa0ETH-USDT UNI-V2 LP', // and blank to make it different with the normal farm symbol
    tokenSymbol: 'WETH',
    icon: '🥩',
  },
  {
    pid: 29,
    lpAddresses: {
      42: '0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
      1: '0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
    },
    tokenAddresses: {
      42: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    },
    lpBarAddresses: {
      42: '0xc8b5B728165F5e59690bA486e4086027f34635Bd',
      1: '0xc8b5B728165F5e59690bA486e4086027f34635Bd',
    },
    name: 'Double happiness!',
    symbol: '\xa0WBTC-ETH UNI-V2 LP', // and blank to make it different with the normal farm symbol
    tokenSymbol: 'WETH',
    icon: '🥓',
  },
];

export const supportedPools = [
  ...xLPSupportedPools,
  // xLP supported end
  {
    pid: 9,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'Sashimi Party!',
    symbol: 'SASHIMI-ETH UNI-V2 LP',
    tokenSymbol: 'SASHIMI',
    icon: '🍣',
  },

  // 0917
  {
    pid: 22,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xaf46c4cf1cb2a669ce2f7bc1e7a53f0da8c7c574',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'HT love Sashimi!',
    symbol: 'HT-SASHIMI UNI-V2 LP',
    tokenSymbol: 'Huobi Token',
    icon: '🥂',
  },
  {
    pid: 23,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x32893aF4A219dae132f721Ead8C351FEE91838Fc',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'USDT love Sashimi!',
    symbol: 'USDT-SASHIMI UNI-V2 LP',
    tokenSymbol: 'USDT',
    icon: '🍻',
  },
  {
    pid: 24,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xf09d4a52b25886cD4ca42D40fAe302a85f69e02D',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'USDC love Sashimi!',
    symbol: 'USDC-SASHIMI UNI-V2 LP',
    tokenSymbol: 'USDC',
    icon: '🍷',
  },

  // old
  {
    pid: 10,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x1629B0259E6E5c315B8Eea09fd1a4D0A26291F98',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'elf love Sashimi!🧝🍱',
    symbol: 'SASHIMI-ELF UNI-V2 LP',
    tokenSymbol: 'ELF',
    icon: '🍱',
  },
  {
    pid: 25,
    lpAddresses: {
      42: '0xd9f91070371987eee3e500e90de5333e0c43d031',
      1: '0xd9f91070371987eee3e500e90de5333e0c43d031',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'MX!',
    symbol: 'MXC-ETH UNI-V2 LP',
    tokenSymbol: 'MXC',
    icon: '🌱'
  },
  // SASHIMI new
  {
    pid: 12,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x9aa550c9dbf9649d22d1fd0befb424f0755067c8',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'GT love Sashimi!',
    symbol: 'GT-SASHIMI UNI-V2 LP',
    tokenSymbol: 'Gate Token',
    icon: '🍙',
  },
  {
    pid: 13,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xb1961f431ea5fb5c3932590897a0d3f1cf7ed088',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'LRC love Sashimi!',
    symbol: 'LRC-SASHIMI UNI-V2 LP',
    tokenSymbol: 'LRC',
    icon: '🍘',
  },
  {
    pid: 14,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x2155128c06c4ee4b751c23d9403c07648afa5f5a',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'KNC love Sashimi!',
    symbol: 'KNC-SASHIMI UNI-V2 LP',
    tokenSymbol: 'KNC',
    icon: '🍥',
  },
  {
    pid: 15,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x8306207b827d4b2b07fe4cfc191f5adced1c47f2',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'REN love Sashimi!',
    symbol: 'REN-SASHIMI UNI-V2 LP',
    tokenSymbol: 'REN',
    icon: '🥠',
  },
  {
    pid: 16,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xe839622b4c4bc8b9cda815f2e6a33b7d150ee529',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'YFII love Sashimi!',
    symbol: 'YFII-SASHIMI UNI-V2 LP',
    tokenSymbol: 'YFII',
    icon: '🦪',
  },
  // SASHIMI End

  // New ETH
  {
    pid: 17,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x359C138b1666aA2167AaFC205A841FF432A23040',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xe66747a101bff2dba3697199dcce5b743b454759',
    },
    name: 'Gate Token',
    symbol: 'GT-ETH UNI-V2 LP',
    tokenSymbol: 'GT',
    icon: '🍝',
  },
  {
    pid: 18,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x8878Df9E1A7c87dcBf6d3999D997f262C05D8C70',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
    },
    name: 'LRC',
    symbol: 'LRC-ETH UNI-V2 LP',
    tokenSymbol: 'LRC',
    icon: '🍜',
  },
  {
    pid: 19,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xf49C43Ae0fAf37217bDcB00DF478cF793eDd6687',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
    },
    name: 'KNC',
    symbol: 'KNC-ETH UNI-V2 LP',
    tokenSymbol: 'KNC',
    icon: '🍲',
  },
  {
    pid: 20,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x8Bd1661Da98EBDd3BD080F0bE4e6d9bE8cE9858c',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0x408e41876cccdc0f92210600ef50372656052a38',
    },
    name: 'REN',
    symbol: 'REN-ETH UNI-V2 LP',
    tokenSymbol: 'REN',
    icon: '🍛',
  },
  {
    pid: 21,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x8973Be4402bf0a39448f419c2D64bD3591Dd2299',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
    },
    name: 'YFII',
    symbol: 'YFII-ETH UNI-V2 LP',
    tokenSymbol: 'YFII',
    icon: '🍳',
  },

  // ETH Start
  {
    pid: 7,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xA6be7F7C6c454B364cDA446ea39Be9e5E4369DE8',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e',
    },
    name: 'elf garden 🧝🧝‍♂️🧝‍♀',
    symbol: 'ELF-ETH UNI-V2 LP',
    tokenSymbol: 'ELF',
    icon: '🧝',
  },
  {
    pid: 8,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xBb2b8038a1640196FbE3e38816F3e67Cba72D940',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    },
    name: 'BTC Satoshi',
    symbol: 'WBTC-ETH UNI-V2 LP',
    tokenSymbol: 'WBTC',
    icon: '₿',
  },

  // Others
  {
    pid: 0,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    name: 'Tether Turtle',
    symbol: 'USDT-ETH UNI-V2 LP',
    tokenSymbol: 'USDT',
    icon: '🐢',
  },
  {
    pid: 1,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Circle Snail',
    symbol: 'USDC-ETH UNI-V2 LP',
    tokenSymbol: 'USDC',
    icon: '🐌',
  },
  {
    pid: 2,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Donald DAI',
    symbol: 'DAI-ETH UNI-V2 LP',
    tokenSymbol: 'DAI',
    icon: '🦆',
  },
  {
    pid: 3,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x2fdbadf3c4d5a8666bc06645b8358ab803996e28',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'YFI Whale',
    symbol: 'YFI-ETH UNI-V2 LP',
    tokenSymbol: 'YFI',
    icon: '🐋',
  },
  {
    pid: 4,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xab3f9bf1d81ddb224a2014e98b238638824bcf20',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    },
    name: 'Aave Boar',
    symbol: 'LEND-ETH UNI-V2 LP',
    tokenSymbol: 'LEND',
    icon: '🐗',
  },
  {
    pid: 5,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    name: 'Toadie Marine',
    symbol: 'LINK-ETH UNI-V2 LP',
    tokenSymbol: 'LINK',
    icon: '🐸',
  },
  {
    pid: 6,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x43ae24960e5534731fc831386c07755a2dc33d47',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    name: 'Synthetic Snake',
    symbol: 'SNX-ETH UNI-V2 LP',
    tokenSymbol: 'SNX',
    icon: '🐍',
  },
  // Burn
  {
    pid: 11,
    lpAddresses: {
      42: '0x0000000000000000000000000000000000000000',
      1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA', // 0x00 actual
    },
    tokenAddresses: {
      42: '0x0000000000000000000000000000000000000000',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2', // 0x00 actual
    },
    name: 'Reduce Mint',
    symbol: 'Nothing',
    tokenSymbol: 'SASHIMI',
    icon: '🔥',
  },
  // UNI, Hidden
  {
    pid: 101,
    lpAddresses: {
      42: '0xd3d2e2692501a5c9ca623199d38826e513033a17',
      1: '0xd3d2e2692501a5c9ca623199d38826e513033a17', // 0x00 actual
    },
    tokenAddresses: {
      42: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
      1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', // 0x00 actual
    },
    name: 'Hidden',
    symbol: 'Hidden',
    tokenSymbol: 'UNI',
    icon: '🔥',
  },
];
