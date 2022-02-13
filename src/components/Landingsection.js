import '../public/css/swiper.min.css'
import '../public/css/slick.min.css'
import '../public/css/magnific-popup.css'
import '../public/font-awesome/css/font-awesome.min.css'
import '../public/css/et-line-font.css'
import '../public/css/before-after.min.css'

import '../public/css/unit-test.css'
import '../public/css/style.css?v=9'
import '../public/css/custom-style.css'

function Landingsection() {
   
  
    return (
  <>
  {/* <!--MAIN BODY--> */}
  <div className="row">
      <div className="col-xs-12 no-padd">
          <div className="container-fluid top-banner no-padd  big fullheight light">
              <img src="img/BannerSketch.jpg" className="s-img-switch" alt="top-banner image" />
              <div className="index-overlay">
                  <div className="content">
                      <div className="prague-svg-animation-text"></div>
                      <div className="subtitle">Having an idea.</div>
                      <h1 className="title">Creating spaces.</h1>
                      <div className="a-btn creative">
                          <span className="a-btn-line "></span>
                          EXTERIOR & INTERIOR
                      </div>
                  </div>
                  <div className="top-banner-cursor"></div>
              </div>
          </div>
          <div className="project-detail-parallax-cover"></div>
      </div>
  </div>
  </>
    );
}


export default Landingsection;