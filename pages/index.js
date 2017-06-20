import React from 'react'
import Header from 'components/header'
import ContactFooter from 'components/contactFooter'
import TechStack from 'components/techStack'
import Team from 'components/team'
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
      <div className="about-box">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 block">

              <div className="row row-padding-about">
                <div className="col-xs-12 hidden-xs hidden-sm col-md-4 col-md-offset-4 logo-image">
                  <img src="/static/logo.svg" alt="ZDev logo" />
                </div>{' '}

              </div>
              <div className="col-xs-12 col-md-8 col-md-offset-2 text-center">
                <h3>Website and App Developers</h3>
                <div className="hire-us">
                  <a className="btn-primary btn-lg" href="#contact" data-scroll="true">Tell us about your project</a>
                </div>
              </div>{' '}
              {/* /col-xs-12 */}
            </div>{' '}
            {/* /col-xs-12 block */}
          </div>{' '}
          {/* /row */}
        </div>{' '}
        {/* /container */}
      </div>{' '}
      {/* /about-box */}
      <ScrollableAnchor id={'services'} />
      <div className="services container-fluid">
        <h2 className="text-center">Services</h2>
        <div className="row">
          <div className="col-xs-12">
            <div className="col-xs-12 col-sm-6 col-md-4 col-md-offset-2 service-item">
              <span className="ion-ios-lightbulb service-text-ion" />
              <div className="service-text">
                <h6>Strategy</h6>
                <p>Advice with a tech perspective</p>
              </div>{' '}
              {/* /service-text */}
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 service-item">
              <span className="glyphicon glyphicon-phone service-text-glyph" />
              <div className="service-text">
                <h6>Frontends</h6>
                <p>We <span className="glyphicon glyphicon-heart inline-glyphicon" /> building great websites and apps</p>
              </div>{' '}
              {/* /service-text */}
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-md-offset-2 service-item">
              <span className="glyphicon glyphicon-hdd service-text-glyph" />
              <div className="service-text">
                <h6>Backends</h6>
                <p>We build whole products, from front to back</p>
              </div>{' '}
              {/* /service-text */}
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 service-item">
              <span className="glyphicon glyphicon-cloud service-text-glyph" />
              <div className="service-text">
                <h6>DevOps</h6>
                <p>Ship your product more often, with less issues</p>
              </div>{' '}
              {/* /service-text */}
            </div>
          </div>
        </div>
      </div>
      <ScrollableAnchor id={'our-work'} />
      <div className="portfolio">
        <div className="container">
          <div className="row">
            <h2 className="text-center">Our Work</h2>
            <div className="col-xs-12 col-sm-12 col-md-4 text-center">
              <h4><a href="https://www.youtube.com/watch?v=BM1gXV-NQro">Expresso App</a></h4>
              <div className="portfolio-image-container expresso-poster">
                <a href="https://www.youtube.com/watch?v=g7UTyrVkUXI"><img src="/static/zdevexpresso.png" className="portfolio-image" alt="Expresso App" /></a>
              </div>
              <p>
                Expresso helps customers to preorder coffee and pick it up from their favourite stores. <a href="https://www.youtube.com/watch?v=g7UTyrVkUXI">Watch video</a>
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 text-center">
              <h4><a href="https://www.youtube.com/watch?v=BM1gXV-NQro">Actfit App</a></h4>
              <div className="portfolio-image-container actfit-app-icon">
                <a href="https://www.youtube.com/watch?v=BM1gXV-NQro">
                  <img src="/static/ios-icon-redonblue.svg" className="actfit-app-icon portfolio-image" alt="Actfit Personal Trainer App" />
                </a>
              </div>
              <p>
                The Actfit PT app helps people book a personal trainer session. We built the app from scratch in 1 month.
                {' '}
                <a href="https://www.youtube.com/watch?v=BM1gXV-NQro">Watch video</a>
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 text-center">
              <h4><a href="https://www.actfit.com">Actfit Website</a></h4>
              <div className="portfolio-image-container">
                <a href="https://www.actfit.com"><img src="/static/actfit-web.png" className="portfolio-image" alt="Actfit Website" /></a>
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
