import React from 'react'
import Head from 'next/head'
import Header from 'components/header.js'
import stylesheet from 'styles/index.scss'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({ offset: -120, scrollDuration: 200 })

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Head>
      <title>ZDEV Javascript React Native Developers</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,800,700,900" rel="stylesheet" type="text/css" />
      <link rel="shortcut icon" href="static/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="static/favicon.ico" type="image/x-icon" />
      <meta name="description" content="ZDEV Developers specializing in full-stack Javascript development, React, React Native and Redux" />
    </Head>
    <div>
      <Header />
      <div className="about-box">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 block">
              <div className="row row-padding-about">
                <div className="col-xs-12 hidden-xs hidden-sm col-md-4 col-md-offset-4 logo-image">
                  <ScrollableAnchor id={'about'}>
                    <img src="/static/logo.svg" alt="ZDev logo" />
                  </ScrollableAnchor>
                </div> {/* /col-xs-12 */}
              </div>
              <div className="col-xs-12 col-md-8 col-md-offset-2 text-center">
                <h3>Website and App Developers2</h3>
                <div className="hire-us">
                  <a className="btn-primary btn-lg" href="#contact" data-scroll="true">Tell us about your project</a>
                </div>
              </div> {/* /col-xs-12 */}
            </div> {/* /col-xs-12 block */}
          </div> {/* /row */}
        </div> {/* /container */}
      </div> {/* /about-box */}
      <div className="services container-fluid">
        <ScrollableAnchor id={'services'}>
          <h2 className="text-center">Services</h2>
        </ScrollableAnchor>
        <div className="row">
          <div className="col-xs-12">
            <div className="col-xs-12 col-sm-6 col-md-4 col-md-offset-2 service-item">
              <span className="ion-ios-lightbulb service-text-ion" />
              <div className="service-text">
                <h6>Strategy</h6>
                <p>Advice with a tech perspective</p>
              </div> {/* /service-text */}
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 service-item">
              <span className="glyphicon glyphicon-phone service-text-glyph" />
              <div className="service-text">
                <h6>Frontends</h6>
                <p>We <span className="glyphicon glyphicon-heart inline-glyphicon" /> building great websites and apps</p>
              </div> {/* /service-text */}
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-md-offset-2 service-item">
              <span className="glyphicon glyphicon-hdd service-text-glyph" />
              <div className="service-text">
                <h6>Backends</h6>
                <p>We build whole products, from front to back</p>
              </div> {/* /service-text */}
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 service-item">
              <span className="glyphicon glyphicon-cloud service-text-glyph" />
              <div className="service-text">
                <h6>DevOps</h6>
                <p>Ship your product more often, with less issues</p>
              </div> {/* /service-text */}
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio">
        <div className="container">
          <div className="row">
            <ScrollableAnchor id={'our-work'}>
              <h2 className="text-center">Our Work</h2>
            </ScrollableAnchor>
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
      <div className="techstack">
        <div className="container">
          <div className="row">
            <ScrollableAnchor id={'techstack'}>
              <h2 className="text-center">Tech Stack</h2>
            </ScrollableAnchor>
            <div className="col-xs-12 col-sm-12 col-md-12 text-center">
              <h5>We‘re Fullstack Javascript Developers.</h5>
              <p className="headline-p">We <span className="glyphicon glyphicon-heart inline-glyphicon" /> React, React-Native, Redux, Node and Firebase.</p>
              <p className="padding-p">See our <a href="https://github.com/z-dev/">Github</a> for an example of how we build things.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container">
          <div className="row">
            <ScrollableAnchor id={'team'}>
              <h2 className="text-center team">The Team</h2>
            </ScrollableAnchor>
            <div className="col-xs-12 col-sm-12 col-md-6 text-center">
              <img src="/static/Richheadshot.jpg" className="headshot" alt="Richard" />
              <h4 className="padding-top-image">Richard</h4>
              <p>
                Richard has a decade of experience ranging from Investment Banks to Start Ups. He enjoys learning new technologies and helping people solve real business problems.
              </p>
              <a href="https://www.linkedin.com/in/richardgill3">
                <span className="contact-icon ion-social-linkedin" />
              </a>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 text-center team-member">
              <img src="/static/john_headshot.jpg" className="headshot" alt="John" />
              <h4 className="padding-top-image">John</h4>
              <p>John specializes in frontend development. He‘s got a keen eye for detail and loves building great applications.</p>
              <a href="https://uk.linkedin.com/in/johnagill1">
                <span className="contact-icon ion-social-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-info container-fluid text-center block">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <ScrollableAnchor id={'contact'}>
              <h6>Location</h6>
            </ScrollableAnchor>
            <p>Central London</p>
          </div>
          <div className="col-xs-12 col-sm-4 margin-top-xs-40">
            <h6>Email</h6>
            <p><a href="mailto:info@z-dev.io">info@z-dev.io</a></p>
          </div>
          <div className="col-xs-12 col-sm-4 margin-top-xs-40">
            <h6>LinkedIn</h6>
            <p>
              <a href="https://www.linkedin.com/company/zdev-limited">
                <span className="contact-icon ion-social-linkedin" />
              </a>
            </p>
          </div>
        </div> {/* /row */}
      </div>
    </div>
  </div>
)
