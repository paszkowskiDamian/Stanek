import glamorous from 'glamorous'
import React, { Component } from 'react'
import { Element } from 'react-scroll'

import { Navigation } from './components/Navigation/Navigation'
import { Header } from './components/Header/Header'

import './index.css'

const Section = glamorous(Element)({
    height: 1000
})

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Header />
                <Section name="about">O mnie</Section>
                <Section name="offer">Oferta</Section>
                <Section name="contact">Kontakt</Section>
            </div>
        )
    }
}

export default App
