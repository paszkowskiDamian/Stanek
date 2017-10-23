import glamorous from 'glamorous'
import React, { Component } from 'react'

import { Menu } from './Menu'
import { SocialLinks } from './SocialLinks'

import {
    mediaQueries,
    slideIn,
    shadow4 as mobileMenuShadow
} from '../../styles'

const hamburgerIcon = {
    width: 30,
    heigth: 2,
    spacing: 12,
    center: 11
}

const ButtonWrapper = glamorous.div({
    display: 'none',
    alignItems: 'center',
    right: 100,
    top: 25,
    position: 'absolute',
    cursor: 'pointer',
    height: hamburgerIcon.spacing * 2,
    [mediaQueries.phone]: {
        display: 'flex'
    }
})

const MenuButton = glamorous.div(props => ({
    width: hamburgerIcon.width,
    height: hamburgerIcon.heigth,
    background: props.isActive ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,1)',
    transition: '0.2s cubic-bezier(0.82, -0.01, 0.2, 1.02)',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: props.isActive ? hamburgerIcon.center : 0,
        transform: `rotate(${props.isActive ? 45 : 0}deg)`,
        background: 'black',
        width: hamburgerIcon.width,
        height: hamburgerIcon.heigth,
        transition: '0.2s cubic-bezier(0.82, -0.01, 0.2, 1.02)'
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        bottom: props.isActive ? hamburgerIcon.center : 0,
        transform: `rotate(${props.isActive ? -45 : 0}deg)`,
        background: 'black',
        width: hamburgerIcon.width,
        height: hamburgerIcon.heigth,
        transition: '0.2s cubic-bezier(0.82, -0.01, 0.2, 1.02)'
    }
}))

const MenuWrapper = glamorous.div(
    {
        display: 'none',
        position: 'absolute',
        width: '100%',
        right: 0,
        top: 80,
        background: 'white',
        animation: `${slideIn} 0.4s ease-in-out`,
        [mediaQueries.phone]: {
            display: 'block'
        }
    },
    mobileMenuShadow
)

export class MobileMenu extends Component {
    state = {
        showMenu: false
    }

    toggleMenu = () => this.setState({ showMenu: !this.state.showMenu })

    render() {
        return (
            <div>
                <ButtonWrapper onClick={() => this.toggleMenu()}>
                    <MenuButton isActive={this.state.showMenu} />
                </ButtonWrapper>
                {this.state.showMenu && (
                    <MenuWrapper>
                        <Menu />
                        <SocialLinks />
                    </MenuWrapper>
                )}
            </div>
        )
    }
}
