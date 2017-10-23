import React from 'react'
import glamorous from 'glamorous'
import { Link } from 'react-scroll'

import { mediaQueries } from '../../styles'

import image from '../../assets/jpg/header.jpg'

export const HeaderImage = glamorous.header({
    background: `url(${image})`,
    position: 'relative',
    top: 70,
    height: 800,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    [mediaQueries.phone]: {
        justifyContent: 'center',
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        background: 'black',
        opacity: 0.3,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
})

export const HeaderWrapper = glamorous.div({
    marginLeft: 100,
    zIndex: 1,
    [mediaQueries.phone]: {
        marginLeft: 0,
        display: 'flex',
        flexDirection: 'column',
    },
})

export const TopHeader = glamorous.h3({
    margin: 0,
    color: 'white',
    fontWeight: 'normal',
    borderBottom: '1px solid white',
    width: 'max-content',
    paddingRight: 20,
    position: 'relative',
    top: 15,
})

export const ThinFont = glamorous.span({
    fontWeight: 100,
})

export const BoldFont = glamorous.span({
    fontWeight: 'normal',
    lineHeight: '40%',
    marginBottom: 30,
})

export const Main = glamorous.h1({
    margin: 0,
    color: 'white',
    fontSize: '6em',
    [mediaQueries.phone]: {
        display: 'flex',
        flexDirection: 'column',
    },
})

const CallToActonComponent = glamorous(Link)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    padding: 10,
    color: 'white',
    fontSize: '1.2em',
    border: '1px solid white',
    transition: '0.2s',
    cursor: 'pointer',
    '&:hover': {
        background: 'rgba(244, 244, 244,0.3)',
    },
})

export function CallToActon({ children }) {
    return (
        <CallToActonComponent
            to="contact"
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
        >
            {children}
        </CallToActonComponent>
    )
}
