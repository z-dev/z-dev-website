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
import Div from 'components/core/div'
import styled from 'styled-components'

configureAnchors({ offset: -80, scrollDuration: 200 })

const PageContainer = styled(Div)`
  flex-direction: column;
`
export default () =>
  <Page>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <PageContainer>
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
    </PageContainer>
  </Page>
