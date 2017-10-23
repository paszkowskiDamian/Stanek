import React, { Component } from 'react'

import { MenuLink } from './MenuLink'
import { menuTabs } from '../../pageConfig'

export class Menu extends Component {
    state = {
        activeTab: ''
    }

    setActiveTab = activeTab => this.setState({ activeTab })

    render() {
        return menuTabs.map(tab => (
            <MenuLink
                activeTab={this.state.activeTab}
                key={tab.name}
                to={tab.name}
                onActive={this.setActiveTab}
            >
                {tab.tag}
            </MenuLink>
        ))
    }
}
