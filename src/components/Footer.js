import '../public/css/swiper.min.css'
import '../public/css/slick.min.css'
import '../public/css/magnific-popup.css'
import '../public/font-awesome/css/font-awesome.min.css'
import '../public/css/et-line-font.css'
import '../public/css/before-after.min.css'

import '../public/css/unit-test.css'
import '../public/css/style.css?v=9'
import '../public/css/custom-style.css'

function Footer() {
    const thisIsAVariableForHomeText = 'Home';
  
    return (
      <>
  {/* <!-- START FOOTER --> */}
  <footer className="prague-footer default">
      <img  src="#" data-lazy-src="img/home/ffa51a33625455.56b20f01c3608.jpg" className="s-img-switch" alt="footer banner" />
      <div className="footer-content-outer">
          <div className="footer-top-content">
              <div className="prague-footer-main-block">
                  <div className="prague-logo">
                      <a href="index.html">
                          <img src="img/apinteriordesign.ico" data-lazy-src="img/apinteriordesign.ico" className="attachment-full size-full"
                              alt="logo" /> </a>
                  </div>

              </div>
              <div className="prague-footer-info-block">

                  <h6 className="footer-info-block-title">GET IN TOUCH</h6>

                  <div className="footer-info-block-content">
                      <p><a href="tel:+7(885)5896985">+1 (424) 644 - 4510</a></p>
                      <p><a href="mailto:prague-architects@info.com">AndreaPerez@gmail.com</a></p>
                      <p>30659 Delta Dr Nuevo, Ca 92567</p>
                  </div>

              </div>
          </div>
          <div className="footer-bottom-content">

              <div className="prague-social-nav">

                  <ul className="social-content">
                      <li>
                          <a target="_blank">
                              <i aria-hidden="true" className="fa fa-twitter"></i>
                          </a>
                      </li>
                      <li>
                          <a target="_blank" href="https://www.facebook.com/an.drea.7355079">
                              <i aria-hidden="true" className="fa fa-facebook"></i>
                          </a>
                      </li>
                      <li>
                          <a target="_blank">
                              <i aria-hidden="true" className="fa fa-pinterest-p"></i>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </footer>
  {/* <!--/END FOOTER--> */}
      </>
  );
}



export default Footer;