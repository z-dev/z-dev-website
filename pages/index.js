import React from 'react'
import Header from 'components/header'
import ContactFooter from 'components/contactFooter'
import Services from 'components/services'
import TechStack from 'components/techStack'
import Team from 'components/team'
import About from 'components/about'
import Clients from 'components/clients'
import Page from 'components/page'
import stylesheet from 'styles/index.scss'
import { configureAnchors } from 'react-scrollable-anchor'
import ScrollableAnchor from 'components/scrollableAnchor'

configureAnchors({ offset: -80, scrollDuration: 200 })

export default () =>
  <Page>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div>
      <Header />
      <ScrollableAnchor id={'about'} />
      <About />
      <ScrollableAnchor id={'services'} />
      <Services />
      <ScrollableAnchor id={'clients'} />
      <Clients />
      <ScrollableAnchor id={'techstack'} />
      <TechStack />
      <ScrollableAnchor id={'team'} />
      <Team />
      <ScrollableAnchor id={'contact'} />
      <ContactFooter />
    </div>
  </Page>
