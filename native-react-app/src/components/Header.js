import '../public/css/swiper.min.css'
import '../public/css/slick.min.css'
import '../public/css/magnific-popup.css'
import '../public/font-awesome/css/font-awesome.min.css'
import '../public/css/et-line-font.css'
import '../public/css/before-after.min.css'

import '../public/css/unit-test.css'
import '../public/css/style.css?v=9'
import '../public/css/custom-style.css'



function Header() {
  return (
    <>
    {/* <!--HEADER--> */}

  <header className="prague-header simple sticky-menu sticky-mobile-menu light ">
      {/* <!--LOGO--> */}
      <div className="prague-logo">
          <a href="index.html">
              <img src="img/aplogomini.png" className="image_logo" alt="logo" /></a>
      </div>
      {/* {/* <!--/LOGO--> */} 

      <div className="prague-header-wrapper">
          {/* <!--NAVIGATION--> */} 
          <div className="prague-navigation">
              <div className="pargue-navigation-wrapper">
                  <div className="prague-navigation-inner">
                      <nav>
                          <ul className="main-menu">
                              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children "><a
                                      href="index.html">Home</a>
                              </li>
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a
                                      href="#">Projects</a>
                              </li>
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a
                                      href="#">Project Details</a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent menu-item-has-children"><a
                                  href="blog.html">Blog</a>
                              </li>
                          </ul>
                      </nav>

                  </div>
              </div>
          </div>
          {/* {/* <!--/NAVIGATION--> */} 

          {/* <!-- mobile icon --> */} 
          <div className="prague-nav-menu-icon">
              <a href="#">
                  <i></i>
              </a>
          </div>
          {/* <!-- /mobile icon --> */} 

          {/* <!--SOCIAL--> */} 
          <div className="prague-social-nav">
              <a href="#">
                  <i className="fa fa-chain-broken" aria-hidden="true"></i>
              </a>

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
          {/*  <!--/SOCIAL--> */} 

      </div>
  </header>
  {/* <!--END HEADER--> */}
   </>
  );
}



export default Header;