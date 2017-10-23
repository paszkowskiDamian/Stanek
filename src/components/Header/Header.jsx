import glamorous from 'glamorous'
import React, { Component } from 'react'
import { Link } from 'react-scroll'

import image from '../../assets/jpg/header.jpg'

const HeaderImage = glamorous.header({
    background: `url(${image})`,
    position: 'relative',
    top: 70,
    height: 800,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center'
})

const HeaderWrapper = glamorous.div({
    marginLeft: 100
})

const TopHeader = glamorous.h3({
    margin: 0,
    color: 'white',
    fontWeight: 'normal',
    borderBottom: '1px solid white',
    width: 'max-content',
    paddingRight: 20,
    position: 'relative',
    top: 15
})

const ThinFont = glamorous.span({
    fontWeight: 100
})

const BoldFont = glamorous.span({
    fontWeight: 'normal'
})

const Main = glamorous.h1({
    margin: 0,
    color: 'white',
    fontSize: '6em'
})

const CallToActon = glamorous(Link)({
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
        background: 'rgba(244, 244, 244,0.3)'
    }
})

export class Header extends Component {
    render() {
        return (
            <HeaderImage>
                <HeaderWrapper>
                    <TopHeader>Trener personalny</TopHeader>
                    <Main>
                        <ThinFont>Denis</ThinFont>
                        <BoldFont>Stanek</BoldFont>
                    </Main>
                    <CallToActon
                        to="contact"
                        smooth={true}
                        spy={true}
                        offset={-100}
                        duration={500}
                    >
                        Umów się na darmową konsultacje
                    </CallToActon>
                </HeaderWrapper>
            </HeaderImage>
        )
    }
}
