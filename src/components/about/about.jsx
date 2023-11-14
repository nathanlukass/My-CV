import React from 'react'

const About = () => {
  return (
    <>
    <div className="section" id="about">
        <div className="container">
          <div className="card" data-aos="fade-up" data-aos-offset={10}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">About</div>
                  <p>Hello! I am Jonathan. I'm From Klabat University, I am an active student in the 5th semester, I am taking the Faculty of Computer Science majoring in Information Engineering</p>
                  </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">Basic Information</div>
                  <div className="row">
                    <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                    <div className="col-sm-8">20</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                    <div className="col-sm-8">jhonatanlukas05@gmail.com</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
                    <div className="col-sm-8">+6289-7952-0945</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                    <div className="col-sm-8">Bitung City, North Sulawesi, Indonesia</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
                    <div className="col-sm-8">English, Bahasa</div>
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

export default About