import React from 'react'

const Portfolio = () => {
  return (
    <>
    <div className="section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto">
              <div className="h4 text-center mb-4 title">Portfolio</div>
              <div className="nav-align-center">
                <ul className="nav nav-pills nav-pills-primary" role="tablist">
                  <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#web-development" role="tablist"><i className="fa fa-laptop" aria-hidden="true" /></a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#graphic-design" role="tablist"><i className="fa fa-picture-o" aria-hidden="true" /></a></li>
                  </ul>
              </div>
            </div>
          </div>
          <div className="tab-content gallery mt-5">
            <div className="tab-pane active" id="web-development">
              <div className="ml-auto mr-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#web-development">
                        <figure className="cc-effect"><img src="images/1.png" alt="Image" />
                          <figcaption>
                            <div className="h4"></div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure></a></div>
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#web-development">
                        <figure className="cc-effect"><img src="images/2.png" alt="Image" />
                          <figcaption>
                            <div className="h4"></div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure></a></div>
                  </div>
                  <div className="col-md-6">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#web-development">
                        <figure className="cc-effect"><img src="images/3.png" alt="Image" />
                          <figcaption>
                            <div className="h4"></div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure></a></div>
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#web-development">
                        <figure className="cc-effect"><img src="images/4.png" alt="Image" />
                          <figcaption>
                            <div className="h4"></div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="graphic-design" role="tabpanel">
              <div className="ml-auto mr-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                        <figure className="cc-effect"><img src="images/10.png" alt="Image" />
                          <figcaption>
                            <div className="h4"></div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure></a></div>
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                        <figure className="cc-effect"><img src="images/11.png" alt="Image" />
                          <figcaption>
                            <div className="h4"></div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure></a></div>
                  </div>
                  <div className="col-md-6">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                        <figure className="cc-effect"><img src="images/12.png" alt="Image" />
                          <figcaption>
                            <div className="h4"></div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure></a></div>
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                        <figure className="cc-effect"><img src="images/13.png" alt="Image" />
                          <figcaption>
                            <div className="h4"></div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio