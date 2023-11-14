import React from 'react'

const Profile = () => {
  return (
    <>
    <div className="profile-page">
        <div className="wrapper">
          <div className="page-header page-header-small" filter-color="green">
            <div className="page-header-image" data-parallax="true" style={{backgroundImage: 'url("images/cc-bg-1.jpg")'}} />
            <div className="container">
              <div className="content-center">
                <div className="cc-profile-image"><a href="#"><img src="images/joxe.jpg" alt="Image" /></a></div>
                <div className="h2 title">Jonathan Lukas</div>
                <p className="category text-white">Web Developer, Graphic Designer,  Photographer (AMEN) </p><a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Hire Me</a><a className="btn btn-primary" href="https://drive.google.com/file/d/1akYzSBZ5gt-RDpbnrlL_9GseBu6ZXFy1/view?usp=sharing" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Certificate</a>
              </div>
            </div>
            <div className="section">
              <div className="container">
                <div className="button-container"><a className="btn btn-default btn-round btn-lg btn-icon" href="https://www.facebook.com/profile.php?id=100006319423152&mibextid=LQQJ4d" rel="tooltip" title="Follow me on Facebook"><i className="fa fa-facebook" /></a><a className="btn btn-default btn-round btn-lg btn-icon" href="https://instagram.com/nathanlukas_?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" rel="tooltip" title="Follow me on Instagram"><i className="fa fa-instagram" /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile