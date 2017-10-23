import glamorous from 'glamorous'
import React, { Component } from 'react'

import { Menu } from './Menu'
import { SocialLinks } from './SocialLinks'
import { MobileMenu } from './MobileMenu'

import { shadow2 as navigationShadow, mediaQueries } from '../../styles'

import logo from '../../assets/svg/logo.svg'

const NavigationWrapper = glamorous.div(
    {
        zIndex: 1,
        position: 'fixed',
        display: 'flex',
        width: '100%',
        background: 'white',
        boxSizing: 'border-box',
        padding: '0 100px',
        [mediaQueries.phone]: {
            justifyContent: 'center'
        }
    },
    navigationShadow
)

const Logo = glamorous.img({
    height: 60,
    padding: 10,
    cursor: 'pointer'
})

const Wrapper = glamorous.div({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    [mediaQueries.phone]: {
        display: 'none'
    }
})

const MenuWrapper = glamorous(Wrapper)({
    justifyContent: 'flex-start'
})

const SocialWrapper = glamorous(MenuWrapper)({
    justifyContent: 'flex-end'
})

export class Navigation extends Component {
    render() {
        return (
            <NavigationWrapper>
                <MenuWrapper>
                    <Menu />
                </MenuWrapper>
                <Logo src={logo} alt="logo" />
                <SocialWrapper>
                    <SocialLinks />
                </SocialWrapper>
                <MobileMenu />
            </NavigationWrapper>
        )
    }
}
