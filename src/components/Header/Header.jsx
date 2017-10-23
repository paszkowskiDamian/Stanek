import React, { Component } from 'react'

import {
    HeaderWrapper,
    Main,
    ThinFont,
    TopHeader,
    CallToActon,
    BoldFont,
    HeaderImage,
} from './HeaderComponents'

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
                    <CallToActon>Umów się na darmową konsultacje</CallToActon>
                </HeaderWrapper>
            </HeaderImage>
        )
    }
}
