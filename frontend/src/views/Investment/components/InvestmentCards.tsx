import React, {useCallback, useEffect, useState} from 'react'
import {
  Button,
  Divider,
  Row,
  Col
} from 'antd';
import styled from 'styled-components'

import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Loader from '../../../components/Loader'
import Spacer from '../../../components/Spacer'

import useYam from '../../../hooks/useYam'
import BigNumber from 'bignumber.js'

import { getInvestmentContract, getSushiContract, getInvestments } from '../../../sushi/utils';

import {getBalanceNumber} from "../../../utils/formatBalance";
import {Yam} from "../../../sushi";
import {Contract} from "web3-eth-contract";
import {useWallet} from "use-wallet";

interface Investment {
  name: string
  lpToken: string
  lpTokenAddress: string
  lpContract: Contract
  tokenAddress: string
  earnToken: string
  earnTokenAddress: string
  icon: React.ReactNode
  id: string
  tokenSymbol: string
  depositAddress: string
  depositTokenSymbol: string
  sashimiIndex: number
}

interface InvestmentRow extends Investment {

}

const InvestmentCards: React.FC = () => {

  const yam = useYam();
  const {account} = useWallet();
  const investmentContract = yam && getInvestmentContract(yam);
  const sashimiContract = yam && getSushiContract(yam);
  const investments: Investment[] = yam && getInvestments(yam) || [];

  const newInvestmentRows = investments.reduce<InvestmentRow[][]>((investmentRows, investment, i) => {
    const newInvestmentRows = [...investmentRows];
    if (newInvestmentRows[newInvestmentRows.length - 1].length === 3) {
      newInvestmentRows.push([investment])
    } else {
      newInvestmentRows[newInvestmentRows.length - 1].push(investment)
    }
    return newInvestmentRows;
  }, [[]]);

  return (
    <StyledCards>
      <ValueETH>Every one can harvest and reset reserves. And some volunteers will harvest and reset reserves regularly. </ValueETH>
      {!!newInvestmentRows[0].length ? (
        newInvestmentRows.map((investmentRow, i) => (
          <StyledRow key={i}>
            {investmentRow.map((investment, j) => (
              <React.Fragment key={j}>
                <InvestmentCard
                  investment={investment}
                  yam={yam}
                  investmentContract={investmentContract}
                  sashimiContract={sashimiContract}
                  account={account}
                />
                {(j === 0 || j === 1) && <StyledSpacer/>}
              </React.Fragment>
            ))}
          </StyledRow>
        ))
      ) : (
        <StyledLoadingWrapper>
          <Loader text="Cooking the rice ..."/>
        </StyledLoadingWrapper>
      )}
    </StyledCards>
  )
}

interface InvestmentCardProps {
  investment: InvestmentRow,
  yam: typeof Yam,
  investmentContract: any,
  sashimiContract: any,
  account: any
}

const InvestmentCard: React.FC<InvestmentCardProps> = (
  {investment, yam, investmentContract, sashimiContract, account}) => {

  const [reservesRatio, setReservesRatio] = useState('-');
  const [depositAmount, setDepositAmount] = useState(new BigNumber(0));
  const [profitSashimiValued, setProfitSashimiValued] = useState(new BigNumber(0));

  const fetchData = useCallback(() => {
    if (yam && investmentContract) {
      (async () => {
        try {
          const result = await investmentContract.methods.earned(investment.depositAddress).call();
          const reservesPoints = await investmentContract.methods.reservesRatios(investment.depositAddress).call();
          const depositAmount = await investmentContract.methods.deposits(investment.depositAddress).call();

          const {amount} = result; // profit is token address;
          const profit = new BigNumber(amount);
          setReservesRatio(`${reservesPoints / 100}%`);
          setDepositAmount(new BigNumber(depositAmount));

          // sashimiContract.methods
          const lpInfo = await investment.lpContract.methods.getReserves().call();
          const sashimiBalance = new BigNumber(lpInfo[investment.sashimiIndex]);
          const profitTokenBalance = new BigNumber(lpInfo[1 - investment.sashimiIndex]);
          const sashimiValued = sashimiBalance.div(profitTokenBalance).times(profit);
          setProfitSashimiValued(sashimiValued);
        } catch(e) {
          console.log('investment: ', e);
        }
      })();
    }
  }, [investment, yam, investmentContract, sashimiContract]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <StyledCardWrapper>
      <Card>
        <CardContent>
          <StyledContent>
            <CardIcon>{investment.icon}</CardIcon>
            <StyledTitle>Invest {investment.depositTokenSymbol.toUpperCase()}</StyledTitle>
            <Spacer/>
            <ButtonContainer>
              <Col span={11}>
                <Button
                  disabled={true}
                  size="large"
                  type="primary"
                  block
                  onClick={async () => {
                    if (investmentContract) {
                      investmentContract.methods.harvest(investment.depositAddress).send({from: account});
                    }
                  }}
                >
                  Harvest
                </Button>
              </Col>
              <Col span={11} offset={2}>
                <Button
                  disabled={true}
                  size="large"
                  type="primary"
                  block
                  onClick={async () => {
                    if (investmentContract) {
                      investmentContract.methods.reBalance(investment.depositAddress).send({from: account});
                    }
                  }}
                >
                  ReBalance
                </Button>
              </Col>
            </ButtonContainer>
            <StyledDivider />
            <StyledInsight>
              <span>Deposit</span>
              <span>
                {getBalanceNumber(depositAmount).toFixed(2)} {investment.depositTokenSymbol}
              </span>
            </StyledInsight>
            <StyledInsight>
              <span>Profit</span>
              <span>
                {getBalanceNumber(profitSashimiValued).toFixed(2) || '-'} Sashimi
              </span>
            </StyledInsight>

            <StyledInsight>
              <span>Reserves Ratio</span>
              <span>
                {reservesRatio}
              </span>
            </StyledInsight>
            <StyledInsight>
              <span>APY</span>
              <span>
                - %
              </span>
            </StyledInsight>
          </StyledContent>
        </CardContent>
      </Card>
    </StyledCardWrapper>
  )
}

const ValueETH = styled.div`
  color: #aa9585;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
`

const ButtonContainer = styled(Row)`
  width: 100%;
`

const StyledCards = styled.div`
  width: 900px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const StyledRow = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
  flex-flow: row wrap;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  width: calc((900px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
  position: relative;
`

const StyledTitle = styled.h4`
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 24px;
  font-weight: 700;
  margin: ${(props) => props.theme.spacing[2]}px 0 0;
  padding: 0;
  display: flex;
  align-items: center;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledInsight = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  color: ${(props) => props.theme.color.grey[400]};
  width: 100%;
  line-height: 32px;
  font-size: 14px;
  text-align: center;
  padding: 0 12px;
`

const StyledDivider = styled(Divider)`
  margin-top: 12px;
  margin-bottom:  7px;
`

export default InvestmentCards
