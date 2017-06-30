import React from 'react'
import Header from 'components/header'
import ContactFooter from 'components/contactFooter'
import Services from 'components/services'
import TechStack from 'components/techStack'
import Team from 'components/team'
import About from 'components/about'
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
      {/* /about-box */}
      <ScrollableAnchor id={'services'} />
      <Services />
      <ScrollableAnchor id={'our-work'} />
      <div className="portfolio">
        <div className="container">
          <div className="row">
            <h2 className="text-center">Our Work</h2>
            <div className="col-xs-12 col-sm-12 col-md-4 text-center">
              <h4>
                <a href="https://www.youtube.com/watch?v=BM1gXV-NQro">Expresso App</a>
              </h4>
              <div className="portfolio-image-container expresso-poster">
                <a href="https://www.youtube.com/watch?v=g7UTyrVkUXI">
                  <img src="/static/zdevexpresso.png" className="portfolio-image" alt="Expresso App" />
                </a>
              </div>
              <p>
                Expresso helps customers to preorder coffee and pick it up from their favourite stores. <a href="https://www.youtube.com/watch?v=g7UTyrVkUXI">Watch video</a>
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 text-center">
              <h4>
                <a href="https://www.youtube.com/watch?v=BM1gXV-NQro">Actfit App</a>
              </h4>
              <div className="portfolio-image-container actfit-app-icon">
                <a href="https://www.youtube.com/watch?v=BM1gXV-NQro">
                  <img src="/static/ios-icon-redonblue.svg" className="actfit-app-icon portfolio-image" alt="Actfit Personal Trainer App" />
                </a>
              </div>
              <p>
                The Actfit PT app helps people book a personal trainer session. We built the app from scratch in 1 month.{' '}
                <a href="https://www.youtube.com/watch?v=BM1gXV-NQro">Watch video</a>
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 text-center">
              <h4>
                <a href="https://www.actfit.com">Actfit Website</a>
              </h4>
              <div className="portfolio-image-container">
                <a href="https://www.actfit.com">
                  <img src="/static/actfit-web.png" className="portfolio-image" alt="Actfit Website" />
                </a>
              </div>
              <p>The Actfit website helps people find gyms where ever they are. We worked with the Actfit team to build the site and continue to advise them.</p>
            </div>
          </div>
        </div>
      </div>
      <ScrollableAnchor id={'techstack'} />
      <TechStack />
      <ScrollableAnchor id={'team'} />
      <Team />
      <ScrollableAnchor id={'contact'} />
      <ContactFooter />
    </div>
  </Page>
