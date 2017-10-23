import React, { Component } from 'react'

import {
    NavigationWrapper,
    MenuWrapper,
    Logo,
    SocialWrapper,
} from './NavigationComponents'
import { Menu } from './Menu'
import { SocialLinks } from './SocialLinks'
import { MobileMenu } from './MobileMenu'

import logo from '../../assets/svg/logo.svg'

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
