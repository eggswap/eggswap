import React, { useContext } from 'react'
import styled from 'styled-components'
import {
  Dropdown,
  Button,
  Menu
} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import {
  If,
  Then,
  Else
} from 'react-if'
import { NavLink } from 'react-router-dom'
import { Context } from '../../../contexts/Mobile';

const trigger:('click' | 'hover' | 'contextMenu')[] = ['click'];

interface Link {
  link?: string,
  text?: string,
  isExternal?: boolean
}

const links:Link[] = [
  {
    link: '/',
    text: 'Home'
  },
  {
    link: '/farms',
    text: 'Farms'
  },
  {
    link: '/double-farms',
    text: 'Double\xa0Farm(Beta)'
  },
  {
    // link: 'https://app-test.sashimi.cool',
    link: '/exchanges',
    text: 'Exchanges',
    // isExternal: true
  },
  {
    link: '/staking',
    text: 'Staking'
  },
  {
    link: '/investment',
    text: 'Investment'
  },
  {
    link: '/vault',
    text: 'Vault'
  },
  {
    link: 'https://snapshot.sashimi.cool/#/sashimi',
    text: 'Proposals',
    isExternal: true
  }
];

const OverLay = () => {
  return (
    <Menu>
      {
        links.map((v, i) => (
          <>
            {i === 0 ? null : <Menu.Divider />}
            <Menu.Item key={v.text}>
              {
                v.isExternal ? (
                  <StyledAbsoluteLink href={v.link} target="_blank">{v.text}</StyledAbsoluteLink>
                ) : (
                  <StyledLink exact activeClassName="active" to={v.link}>{v.text}</StyledLink>
                )
              }
            </Menu.Item>
          </>
        ))
      }
    </Menu>
  );
}

const Nav: React.FC = () => {
  const {
    isMobile
  } = useContext(Context)
  return (
    <If condition={isMobile}>
      <Then>
        <Dropdown trigger={trigger} overlay={OverLay}>
          <Button
            type="primary"
            icon={<MenuOutlined />}
          />
        </Dropdown>
      </Then>
      <Else>
        <StyledNav>
          {
            links.map((v, index) => v.isExternal ? (
              <StyledAbsoluteLink href={v.link} target="_blank" key={index}>{v.text}</StyledAbsoluteLink>
            ) : (
              <StyledLink exact activeClassName="active" to={v.link} key={index}>{v.text}</StyledLink>
            ))
          }
        </StyledNav>
      </Else>
    </If>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 1200px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  @media (max-width: 414px) {
    padding-left: ${(props) => props.theme.spacing[1]}px;
    padding-right: ${(props) => props.theme.spacing[1]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 1200px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  @media (max-width: 414px) {
    padding-left: ${(props) => props.theme.spacing[1]}px;
    padding-right: ${(props) => props.theme.spacing[1]}px;
  }
`

export default Nav
