export const contractAddresses = {
  sushi: {
    42: '0x89d5F2E52D36b85e72e25e8fE46d709D445c03Fc', // aelf sushi new one 9.9
    // 42: '0x43a7903E3a839a67192151eE300e11198985E54b', // sushi
    1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2', // aelf sashimi
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
    42: '0x042036D6F0b5C246aA07Dd9688b46cf86Bd179C3', // aelf sushi new one 9.9
    // 42: '0x245A074cA9814fB46A21562bC70fAB92F8A3F779', // sushi
    1: '0x1daed74ed1dd7c9dabbe51361ac90a69d851234d', // aelf master
    // 1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd', // sushi use
  },
  weth: {
    42: '0xA050886815CFc52a24B9C4aD044ca199990B6690', // aelf sushi
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
    depositTokenSymbol: 'WETH',
    tokenSymbol: 'CANDY', // Which token will I get, when I do the harvest？
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
    depositTokenSymbol: 'XYZ',
    tokenSymbol: 'Golff', // Which token will I get, when I do the harvest？
    icon: '👝',
    sashimiIndex: 1,
  }
];
// These pools get 0 point; [type pid]
export const unStakeOnlyPools = [3, 4, 5, 6, 13, 14, 15, 16, 18, 19, 20, 21];
// If is xxx-Sashimi Pool; [type pid]
// Support sashimi pair only. Used in FarmCards.tsx
export const notETHPairPools = [10, 12, 13, 14, 15, 16, 22, 23, 24];

export const hiddenPools = [101];

// export const doublePools = [1, 2, 3, 101];
// export const unStakeOnlyDoublePools = [2];

// Kovan Test pool
export const doublePools = [10, 101];
export const unStakeOnlyDoublePools = [];

export const supportedPools = [
  // TODO: use lpBarAddress
  {
    pid: 10,
    lpAddresses: {
      42: '0x7c2580099eF4c34B788d3f3A192817f35dd68f8A',
      // 42: '0xDE058540f98bbb044F70f9f44f4876A007f2334f',
      1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
    },
    tokenAddresses: {
      42: '0x0FE180FC7548efbc2dEe32Eb208403639a01aaa5',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    // TODO: use mainnet lpBarAddress
    lpBarAddresses: {
      42: '0xfBe61eFD76D89Db0E5aBf0D80e3E1Cdd0fdD691d',
      1: '0xfBe61eFD76D89Db0E5aBf0D80e3E1Cdd0fdD691d',
    },
    name: 'XYZ-ETH!',
    symbol: 'XYZ-ETH SashimiSwap LP Token111',
    tokenSymbol: 'XYZ',
    icon: '🍣',
  },

  {
    pid: 1,
    lpAddresses: {
      42: '0x7c2580099eF4c34B788d3f3A192817f35dd68f8A',
      1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
    },
    tokenAddresses: {
      42: '0x0FE180FC7548efbc2dEe32Eb208403639a01aaa5',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    // TODO: use mainnet lpBarAddress
    lpBarAddresses: {
      42: '0xDE058540f98bbb044F70f9f44f4876A007f2334f',
      1: '0xDE058540f98bbb044F70f9f44f4876A007f2334f',
    },
    name: 'XYZ-ETH!',
    symbol: 'XYZ-ETH SashimiSwap LP Token',
    tokenSymbol: 'XYZ',
    icon: '🍣',
  },
  {
    pid: 2,
    lpAddresses: {
      42: '0xb819c827a0dc04e403099310317bd75b8a0a43fa',
      1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
    },
    tokenAddresses: {
      42: '0x89d5F2E52D36b85e72e25e8fE46d709D445c03Fc',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'XYZ-SASHIMI!',
    symbol: 'XYZ-SASHIMI SashimiSwap LP Token',
    tokenSymbol: 'SASHIMI',
    icon: '🍣',
  },
  {
    pid: 3,
    lpAddresses: {
      42: '0xb244159a61f44b1263ac5fc0fa300eacfdc7562d',
      1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
    },
    tokenAddresses: {
      42: '0x89d5F2E52D36b85e72e25e8fE46d709D445c03Fc',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'ETH-SASHIMI!',
    symbol: 'ETH-SASHIMI SashimiSwap LP Token',
    tokenSymbol: 'SASHIMI',
    icon: '🍣',
  },
  {
    pid: 4,
    lpAddresses: {
      42: '0x35d510eaeeea82cfaa4f44603f92c430351b68c9',
      1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
    },
    tokenAddresses: {
      42: '0x61790aF8c5D7bE706781DBA8C4c971195890CC1e',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'MockGolff-ETH!',
    symbol: 'MockGolff-ETH SashimiSwap LP Token',
    tokenSymbol: 'MockGolff',
    icon: '🍣',
  },
  {
    pid: 5,
    lpAddresses: {
      42: '0x997fa14837848298d6a70318d6b379cbbdacc5d0',
      1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
    },
    tokenAddresses: {
      42: '0x89d5F2E52D36b85e72e25e8fE46d709D445c03Fc',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'MockGolff-XYZ!',
    symbol: 'MockGolff-XYZ SashimiSwap LP Token',
    tokenSymbol: 'MockGolff',
    icon: '🍣',
  },
  {
    pid: 6,
    lpAddresses: {
      42: '0x2FCDcA32028b3ED71a2f63C4968D4503843d1F42',
      1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
    },
    tokenAddresses: {
      42: '0xf48dFe5E2fB756a59B387754c4a37f951793F417',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'Candy-WETH!',
    symbol: 'Candy-WETH SashimiSwap LP Token',
    tokenSymbol: 'Candy',
    icon: '🍣',
  }
]
