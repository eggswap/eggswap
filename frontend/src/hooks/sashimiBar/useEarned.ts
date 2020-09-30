import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import useBlock from '../useBlock'

const useEarned = (lpBarContract: Contract): BigNumber => {
  const [earnings, setEarnings] = useState(new BigNumber(0));
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet();
  const block = useBlock();

  const fetchEarned = useCallback(async () => {
    if (lpBarContract) {
      const result = await lpBarContract.methods.earned(account).call();
      setEarnings(new BigNumber(result));
    }
  }, [account, ethereum, lpBarContract, block]);

  useEffect(() => {
    if (account && ethereum) {
      fetchEarned()
    }
  }, [fetchEarned]);

  return earnings;
};

export default useEarned;
