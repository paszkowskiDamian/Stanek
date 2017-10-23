import glamorous from 'glamorous'
import React, { Component } from 'react'
import { Link } from 'react-scroll'

const MenuLinkWrapper = glamorous.div(props => ({
    fontWeight: props.isActive ? 'bold' : 'regular'
}))

const StyledMenuLink = glamorous(Link)(props => ({
    cursor: 'pointer',
    padding: 20
}))

export class MenuLink extends Component {
    render() {
        const isActive = this.props.to === this.props.activeTab
        return (
            <MenuLinkWrapper isActive={isActive}>
                <StyledMenuLink
                    to={this.props.to}
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={500}
                    onSetActive={() => this.props.onActive(this.props.to)}
                >
                    {this.props.children}
                </StyledMenuLink>
            </MenuLinkWrapper>
        )
    }
}
