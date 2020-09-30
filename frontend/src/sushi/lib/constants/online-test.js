export const contractAddresses = {
  sushi: {
    42: '0x0FE5dA8828f7F2dFa5cdf181461E0f2039d765f5', // aelf sushi new one 9.9
    // 42: '0x43a7903E3a839a67192151eE300e11198985E54b', // sushi
    1: '0x0FE5dA8828f7F2dFa5cdf181461E0f2039d765f5', // aelf sashimi
    // 1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2', // sushi use
  },
  sashimiBar: {
    42: '0xfaC2681cB05Ba08De504e7FDBc2186B22d868f2A', // aelf sushi new one 9.18
    // 42: '0x43a7903E3a839a67192151eE300e11198985E54b', // sushi
    // TODO: change address
    1: '0x79F006926F7a8CDf4055469C34c9609C6488DB15', // aelf sashimi
    // 1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2', // sushi use
  },
  investment: {
    42: '0x46641A3aA421beA0207Ead6d807c847a2f599943',
    1: '0x46641A3aA421beA0207Ead6d807c847a2f599943' // TODO: use mainnet address
  },
  masterChef: {
    42: '0xFC0F93aA4E79c0c5719ce8c74Cf33872F33a5c6E', // aelf sushi new one 9.9
    // 42: '0x245A074cA9814fB46A21562bC70fAB92F8A3F779', // sushi
    1: '0xFC0F93aA4E79c0c5719ce8c74Cf33872F33a5c6E', // aelf master
    // 1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd', // sushi use
  },
  weth: {
    42: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // aelf sushi
    // 42: '0xd0a1e359811322d97991e03f863a0c30c2cf029c', // weth in kovan
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // sushi use
  },
}

export const supportedInvestmentPools = [
  {
    // CANDY - SASHIMI? pair
    lpAddresses: {
      42: '0x7c2580099eF4c34B788d3f3A192817f35dd68f8A',
      1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
    },
    depositAddresses: {
      42: '0xA050886815CFc52a24B9C4aD044ca199990B6690', // WETH in kovan, ERC20
      1: '0xA050886815CFc52a24B9C4aD044ca199990B6690'
    },
    tokenAddresses: {
      42: '0xf48dFe5E2fB756a59B387754c4a37f951793F417',
      1: '0xf48dFe5E2fB756a59B387754c4a37f951793F417', // TODO: mainnet address
    },
    depositTokenSymbol: 'WETH',
    tokenSymbol: 'CANDY', // Which token will I get, when I do the harvest？
    symbol: 'Hello CANDY',
    name: 'Hello CANDY',
    icon: '👜',
    sashimiIndex: 1,
  },
  {
    // XYZ - SASHIMI pair
    lpAddresses: {
      42: '0xb819c827a0dc04e403099310317bd75b8a0a43fa',
      1: '0xb819c827a0dc04e403099310317bd75b8a0a43fa', // TODO
    },
    // XYZ Token
    depositAddresses: {
      42: '0x0FE180FC7548efbc2dEe32Eb208403639a01aaa5', // WETH in kovan, ERC20
      1: '0x0FE180FC7548efbc2dEe32Eb208403639a01aaa5'
    },
    // Golff Token
    tokenAddresses: {
      42: '0x61790aF8c5D7bE706781DBA8C4c971195890CC1e',
      1: '0x61790aF8c5D7bE706781DBA8C4c971195890CC1e', // TODO: mainnet address
    },
    depositTokenSymbol: 'XYZ',
    tokenSymbol: 'Golff', // Which token will I get, when I do the harvest？
    symbol: 'Hello Golff',
    name: 'Hello Golff',
    icon: '👝',
    sashimiIndex: 1,
  }
];
// These pools get 0 point; [type pid]
export const unStakeOnlyPools = [3, 4, 5, 6, 13, 14, 15, 16, 18, 19, 20, 21];
// If is xxx-Sashimi Pool; [type pid]
// Support sashimi pair only. Used in FarmCards.tsx
export const notETHPairPools = [10, 12, 13, 14, 15, 16, 22, 23, 24];

export const hiddenPools = [101, 102];

export const doublePools = [0];
export const unStakeOnlyDoublePools = [];

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      42: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
      1: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
    },
    tokenAddresses: {
      42: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    },
    lpBarAddresses: {
      42: '0x6e1b4632d83e5443f853fe647ae671a6ea8b35b6',
      1: '0x6e1b4632d83e5443f853fe647ae671a6ea8b35b6',
    },
    name: 'Double Sashimi Party!',
    symbol: 'USDC-ETH UNI-V2 LP',
    tokenSymbol: 'WETH',
    icon: '🍣',
  },
  // Get Sashimi Price only.
  {
    pid: 102,
    lpAddresses: {
      42: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
      1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
    },
    tokenAddresses: {
      42: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'Sashimi Party!',
    symbol: 'SASHIMI-ETH UNI-V2 LP',
    tokenSymbol: 'SASHIMI',
    icon: '🍣',
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
