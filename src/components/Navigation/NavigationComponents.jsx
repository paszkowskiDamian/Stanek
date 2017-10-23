import glamorous from 'glamorous'

import { shadow2 as navigationShadow, page, mediaQueries } from '../../styles'

export const NavigationWrapper = glamorous.div(
    {
        zIndex: 2,
        position: 'fixed',
        display: 'flex',
        width: '100%',
        background: 'white',
        boxSizing: 'border-box',
        padding: `0 ${page.sidePadding.desktop}px`,
        [mediaQueries.phone]: {
            justifyContent: 'center',
            padding: `0 ${page.sidePadding.mobile}px`,
        },
    },
    navigationShadow,
)

export const Logo = glamorous.img({
    height: page.navigation.height - 2 * page.navigation.logoPagging,
    padding: page.navigation.logoPagging,
    cursor: 'pointer',
})

export const Wrapper = glamorous.div({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    [mediaQueries.phone]: {
        display: 'none',
    },
})

export const MenuWrapper = glamorous(Wrapper)({
    justifyContent: 'flex-start',
})

export const SocialWrapper = glamorous(MenuWrapper)({
    justifyContent: 'flex-end',
    [mediaQueries.phone]: {
        padding: '0 20px',
    },
})
