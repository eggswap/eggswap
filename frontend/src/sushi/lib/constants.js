import * as testKovan from './constants/test-kovan';
import * as online from './constants/online';
import * as expanse from './constants/expanse';
import * as local from './constants/local';
import * as onlineTest from './constants/online-test';

const CHAIN_ENV = process.env.REACT_APP_CHAIN_ENV || 'main';

const output = {
  main: expanse,
  eth: online,
  kovan: testKovan,
  'online-test': onlineTest,
  local: local,
};

export const {
  contractAddresses,
  supportedInvestmentPools,
  unStakeOnlyPools,
  notETHPairPools,
  hiddenPools,
  doublePools,
  unStakeOnlyDoublePools,
  supportedPools,
} = {
  ...output[CHAIN_ENV]
};
