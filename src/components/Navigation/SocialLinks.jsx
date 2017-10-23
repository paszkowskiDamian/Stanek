import glamorous from 'glamorous'
import React, { Component } from 'react'

import { socialLinks } from '../../pageConfig'

const Link = glamorous.a({})

const LinkIcon = glamorous.img({
    width: 40,
    padding: 10
})

export class SocialLinks extends Component {
    render() {
        return socialLinks.map(link => (
            <Link target="_blank" key={link.url} href={link.url}>
                <LinkIcon src={link.icon} alt={link.alt} />
            </Link>
        ))
    }
}
