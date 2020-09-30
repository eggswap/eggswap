import React, {useMemo, useEffect, useState} from 'react'
import styled from 'styled-components'

import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'
import chef from '../../assets/img/chef.png'

import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'

import useYam from '../../hooks/useYam'
import {getSashimiBarContract, getSushiContract} from '../../sushi/utils'

import Harvest from './components/Harvest'
import Stake from './components/Stake'
import {Button} from "antd";
import {getBalanceNumber} from "../../utils/formatBalance";
import BigNumber from "bignumber.js";
import useTokenBalance from "../../hooks/useTokenBalance";

const Staking: React.FC = () => {
  const yam = useYam();

  const [xSashimiBalanceOfSashimiBar, setXSashimiBalanceOfSashimiBar] = useState(new BigNumber(0));

  const { ethereum } = useWallet();
  const sashimiBarContract: Contract = useMemo(() => getSashimiBarContract(yam), [ethereum, yam]);
  const sushiContract: Contract = useMemo(() => getSushiContract(yam), [ethereum, yam]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (sashimiBarContract) {
      sashimiBarContract.methods.totalSupply().call().then((totalSupply: any) => {
        setXSashimiBalanceOfSashimiBar(new BigNumber(totalSupply));
      }).catch((error: any) => {
        console.log('error: ', error);
      });
    }
  }, [sashimiBarContract]);

  const sushiContractAddress = sushiContract ? sushiContract.options.address : '';
  const sashimiBarContractAddress = sashimiBarContract ? sashimiBarContract.options.address : '';
  const sashimiBalanceOfSashimiBar: BigNumber = useTokenBalance(sushiContractAddress, sashimiBarContractAddress);

  const walletLocked = <Button
    disabled={true}
    type="primary"
    size="large"
    block
  >Locked</Button>;

  return (
    <>
      <PageHeader
        icon={<img src={chef} height="120" alt="Sashimi" />}
        subtitle={'Welcome to the Sashimi Bar, stake Sashimi to earn Sashimi.'}
        title='Sashimi Staking(Coming soon)'
      />
      <StyleSubTitle>
        <div>{getBalanceNumber(sashimiBalanceOfSashimiBar).toFixed(2)} Sashimi in the whole pool.</div>
        <div>{getBalanceNumber(xSashimiBalanceOfSashimiBar).toFixed(2)} xSashimi in the whole pool.</div>
      </StyleSubTitle>
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <Harvest
              walletLocked={walletLocked}
              sashimiBarContract={sashimiBarContract}
            />
          </StyledCardWrapper>
          <Spacer />
          <StyledCardWrapper>
            <Stake
              sashimiBarContract={sashimiBarContract}
              sushiContract={sushiContract}
              walletLocked={walletLocked}
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg" />
        <StyledInfo>
          ⭐️ You will earn a portion of the swaps fees based on the amount of xSashimi held relative the weight of the staking.
        </StyledInfo>
        <StyledInfo>
          xSashimi can be minted by staking Sashimi. To redeem Sashimi staked plus swap fees convert xSashimi back to Sashimi.
        </StyledInfo>
        <Spacer size="lg" />
      </StyledFarm>
    </>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

const StyleSubTitle = styled.div`
  color: #aa9585;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
`

export default Staking
