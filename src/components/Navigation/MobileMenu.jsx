import React, { Component } from 'react'

import { Menu } from './Menu'
import { ButtonWrapper, MenuButton, MenuWrapper } from './MobileMenuComponents'
import { SocialLinks } from './SocialLinks'

export class MobileMenu extends Component {
    state = {
        showMenu: false,
    }

    toggleMenu = () => this.setState({ showMenu: !this.state.showMenu })

    render() {
        return (
            <div>
                <ButtonWrapper onClick={() => this.toggleMenu()}>
                    <MenuButton isActive={this.state.showMenu} />
                </ButtonWrapper>
                <MenuWrapper show={this.state.showMenu}>
                    <Menu />
                    <SocialLinks />
                </MenuWrapper>
            </div>
        )
    }
}
