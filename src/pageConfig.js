import youtubeIcon from './assets/svg/social/youtube.svg'
import instagramIcon from './assets/svg/social/instagram.svg'
import facebookIcon from './assets/svg/social/facebook.svg'

export const sections = {
    about: 'about',
    offer: 'offer',
    contact: 'contact',
}

export const menuTabs = [
    {
        name: sections.about,
        tag: 'O mnie',
    },
    {
        name: sections.offer,
        tag: 'Oferta',
    },
    {
        name: sections.contact,
        tag: 'Kontakt',
    },
]

export const socialLinks = [
    {
        url: 'https:/youtube.com',
        icon: youtubeIcon,
        alt: 'youtube',
    },
    {
        url: 'https:/instagram.com',
        icon: instagramIcon,
        alt: 'instagram ',
    },
    {
        url: 'https:/facebook.com',
        icon: facebookIcon,
        alt: 'facebook',
    },
]
