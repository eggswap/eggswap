import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import numeral from 'numeral'
import { useWallet } from 'use-wallet'

import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import Label from '../../../components/Label'
import Spacer from '../../../components/Spacer'
import Value from '../../../components/Value'
import YamIcon from '../../../components/YamIcon'

import useFarms from '../../../hooks/useFarms'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useUnharvested from '../../../hooks/useUnharvested'
import useYam from '../../../hooks/useYam'
import useBlock from '../../../hooks/useBlock'
import useAllEarnings from '../../../hooks/useAllEarnings'
import useAllStakedValue from '../../../hooks/useAllStakedValue'

import { bnToDec } from '../../../utils'
import { getBalance } from '../../../utils/erc20';
import { getBalanceNumber } from '../../../utils/formatBalance'
import { getSushiSupply, getSushiContract } from '../../../sushi/utils'
import { getSushiAddress } from '../../../sushi/utils'
import BigNumber from 'bignumber.js'
import CountUp from 'react-countup'
import { getEthChainInfo } from '../../../utils/getEthChainInfo';

const {
  stakingPool
} = getEthChainInfo();

const PendingRewards: React.FC = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [scale, setScale] = useState(1)

  const allEarnings = useAllEarnings()
  let sumEarning = 0
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }

  const [farms] = useFarms()
  const allStakedValue = useAllStakedValue()

  if (allStakedValue && allStakedValue.length) {
    const sumWeth = farms.reduce(
      (c, { id }, i) => c + (allStakedValue[i].totalWethValue.toNumber() || 0),
      0,
    )
  }

  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [sumEarning])

  return (
    <span
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'right bottom',
        transition: 'transform 0.5s',
        display: 'inline-block',
      }}
    >
      <CountUp
        start={start}
        end={end}
        decimals={end < 0 ? 4 : end > 1e5 ? 0 : 3}
        duration={1}
        onStart={() => {
          setScale(1.25)
          setTimeout(() => setScale(1), 600)
        }}
        separator=","
      />
    </span>
  )
}

const Balances: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const yam = useYam()
  const sushiBalance = useTokenBalance(getSushiAddress(yam))
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  useEffect(() => {
    async function fetchTotalSupply() {
      const [
        supply,
        stakedBalance
      ] = await Promise.all([
        getSushiSupply(yam),
        getBalance(ethereum, getSushiAddress(yam), stakingPool).then(res => new BigNumber(res))
      ]);
      setTotalSupply(supply.minus(stakedBalance))
    }
    if (yam) {
      fetchTotalSupply()
    }
  }, [yam, setTotalSupply])

  const circulatingPercent = totalSupply
    ? `(${(getBalanceNumber(totalSupply) / (10**6)).toFixed(2)}%)` : '';

  return (
    <>
      <TotalSupply>Total Sashimi Supply: 100,000,000</TotalSupply>
      <StyledWrapper>
        <StyledCard>
          <CardContent>
            <StyledBalances>
              <StyledBalance>
                <div style={{ flex: 1 }}>
                  <Label text="Your SASHIMI Balance" />
                  <Value
                    value={!!account ? getBalanceNumber(sushiBalance) : 'Locked'}
                  />
                </div>
              </StyledBalance>
            </StyledBalances>
            <Footnote>
              Pending harvest
              <FootnoteValue>
                <PendingRewards /> SASHIMI
              </FootnoteValue>
            </Footnote>
          </CardContent>
        </StyledCard>
        <Spacer />

        <StyledCard>
          <CardContent>
            <Label text={`Circulating SASHIMI Supply ${circulatingPercent}`} />
            <Value
              value={totalSupply ? getBalanceNumber(totalSupply) : 'Locked'}
            />
            <Footnote>
              New rewards per block
              {/* TODO: Follow the plan */}
              <FootnoteValue>100 SASHIMI</FootnoteValue>
            </Footnote>
          </CardContent>
        </StyledCard>
      </StyledWrapper>
    </>
  )
}

const Footnote = styled.div`
  font-size: 14px;
  padding: 12px 0 0 0;
  color: ${(props) => props.theme.color.grey[400]};
  border-top: solid 1px ${(props) => props.theme.color.grey[300]};
`
const FootnoteValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  float: right;
`

const StyledWrapper = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
    padding: 0 16px;
  }
`

const StyledCard = styled(Card)`
  max-width: 450px;
`

const StyledBalances = styled.div`
  display: flex;
`

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalSupply = styled.div`
  color: #aa9585;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
`

export default Balances
