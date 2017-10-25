import glamorous from 'glamorous'
import React, { Component } from 'react'
import { Element } from 'react-scroll'

import { content } from '../../content'
import { sections, menuTabs } from '../../pageConfig'

import image from '../../assets/jpg/about.png'
import { page } from '../../styles'

const AboutSection = glamorous(Element)({
    width: '100%',
})

const ContentWrapper = glamorous.div({
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: page.section.topPadding.desktop,
})

const PageLabel = glamorous.div({
    position: 'absolute',
    top: page.section.topPadding.desktop,
    right: page.sidePadding.desktop,
})

const AboutImage = glamorous.img({
    width: 900,
})

const Motivation = glamorous.div({})

const HeaderSection = glamorous.div({
    position: 'relative',
    right: 100,
    fontSize: '5em',
    fontWeight: 'bold',
    background: 'white',
    width: '130%',
})

export class About extends Component {
    render() {
        return (
            <AboutSection name={sections.about}>
                <ContentWrapper>
                    <PageLabel>{menuTabs[0].tag}</PageLabel>
                    <AboutImage src={image} alt="about image" />
                    <Motivation>
                        {content.about.headerSections.map(section => (
                            <HeaderSection>{section}</HeaderSection>
                        ))}
                        <div>{content.about.content}</div>
                    </Motivation>
                </ContentWrapper>
            </AboutSection>
        )
    }
}
