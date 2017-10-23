import glamorous from 'glamorous'

import {
    mediaQueries,
    slideIn,
    page,
    shadow4 as mobileMenuShadow,
} from '../../styles'

export const hamburgerIcon = {
    width: 30,
    heigth: 2,
    spacing: 12,
    center: 11,
}

export const ButtonWrapper = glamorous.div({
    display: 'none',
    alignItems: 'center',
    right: page.sidePadding.desktop,
    top: 25,
    position: 'absolute',
    cursor: 'pointer',
    height: hamburgerIcon.spacing * 2,
    [mediaQueries.phone]: {
        display: 'flex',
        right: page.sidePadding.mobile,
    },
})

export const MenuButton = glamorous.div(props => ({
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
        transition: '0.2s cubic-bezier(0.82, -0.01, 0.2, 1.02)',
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        bottom: props.isActive ? hamburgerIcon.center : 0,
        transform: `rotate(${props.isActive ? -45 : 0}deg)`,
        background: 'black',
        width: hamburgerIcon.width,
        height: hamburgerIcon.heigth,
        transition: '0.2s cubic-bezier(0.82, -0.01, 0.2, 1.02)',
    },
}))

export const MenuWrapper = glamorous.div(
    props => ({
        display: 'none',
        position: 'absolute',
        width: '100%',
        zIndex: 0,
        right: 0,
        top: props.show ? page.navigation.height : -150,
        opacity: props.show ? 1 : 0,
        transition: '0.4s ease-in-out',
        background: 'white',
        [mediaQueries.phone]: {
            display: 'block',
        },
    }),
    mobileMenuShadow,
)
