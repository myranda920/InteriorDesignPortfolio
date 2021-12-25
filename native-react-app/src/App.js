import Header from './components/Header.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
     {/* <!--PRELOADER--> */}
  
  <div className="prague-loader">
      <div className="prague-loader-wrapper">
          <div className="prague-loader-bar">
              ANDREA PEREZ
          </div>
      </div>
  </div>
  {/* <!--/PRELOADER--> */}

  <Header />
  

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
  {/*<!--  <div className="container-fluid no-padd">
      <div className="row-fluid">
          <div className="wpb_column vc_column_container col-sm-12 no-padd">
                      <div className="project-detail-parallax" data-parallax-speed="0.5" data-smoothscrolling="">


                          <div className="project-detail-parallax-item ">
                              <div className="detail-parallax-item-bg js-detail-parallax-item-bg ">
                                  <img src="img/BannerSketch.jpg"
                                      className="attachment-full size-full" alt="banner image" />
                              </div>

                              <div className="detail-parallax-item-header">
                                  <h6 className="detail-parallax-item-header-subtitle">
                                      INTERIOR </h6>
                                  <h1 className="detail-parallax-item-header-title">
                                      Daniel Moore Appartaments </h1>

                              </div>

                          </div>


                          <div className="project-detail-parallax-item ">
                              <div className="detail-parallax-item-bg js-detail-parallax-item-bg ">
                                  <img src="img/BannerSketch.jpg"
                                      className="attachment-full size-full" alt="banner image" />
                              </div>

                          </div>

                          <div className="project-detail-parallax-cover"></div>
                      </div>

          </div>
      </div>
  </div> */}


  <div className="container no-padd">
      <div className="row-fluid  margin-lg-40t margin-sm-70t">
          <div className="no-padd padd-only-md-right col-sm-8 col-lg-4 col-md-offset-0 col-md-5 col-sm-offset-2 col-xs-12  margin-lg-50t margin-sm-0t">
              <div className="team-wrapper  no-figure">
                  <div className="trans_figures enable_anima">
                  </div>

              </div>
          </div>
          <div className="vc_column_container padd-only-xs col-sm-12 col-lg-offset-1 col-lg-7 col-md-offset-0 col-md-7 col-sm-offset-0 col-xs-12  margin-sm-20t">
              <div className="heading  left dark">
                  <div className="subtitle ">ABOUT ME</div>
                  <h2 className="title">Make with love all what i do.</h2>
                  <div className="content ">
                      <p>I am proficient with many different
                          tools, but my personal favourite is Rivvet. I also have great appreciation for digital sculpting. Selection of my
                          most up to date works can be seen in the portfolio section.</p>
                      <h6>MY SKILLS</h6>
                      <ul>
                          <li>Rivvet</li>
                          <li>Unreal Engine 4</li>
                          <li>Substance Suite</li>
                          <li>Marmoset Toolbag</li>
                      </ul>
                      <p></p>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div className="row-fluid row-no-padding margin-lg-90t margin-xs-15t">
      <div className="no-padd col-sm-12 ">
          <div className="column-inner ">
              <div className="prague-shortcode-parent ">
                  <div className="prague-shortcode-parent-img">
                      <span className="overlay"></span>
                      <img src="img/backsideparallax.jpg" data-lazy-src="img/backsideparallax.jpg" className="s-img-switch"
                          alt="middle-banner image" />
                  </div>

                  <div className="prague-shortcode-content-wrapp">
                      <div className="prague-shortcode-heading  light left">
                          <div className="parent-subtitle">SERVICES</div>

                          <h2 className="parent-title">This is what I do.</h2>
                      </div>

                      <div data-unique-key="0bf3c8aa9017e52dd041b7e2c3327621" className="js-load-more" data-start-page="1"
                          data-max-page="2" data-next-link="onepage-home.html">
                          <div className="row prague_services prague_count_col3 prague_gap_col15  no-footer-content prague-load-wrapper"
                              data-columns="prague_count_col3" data-gap="prague_gap_col15">
                              <div className="portfolio-item-wrapp prague_filter_class">
                                  <div className="portfolio-item">

                                      <div className="prague-services-wrapper">
                                          <span className="services-item-icon icon-circle-compass"></span>

                                          <h3 className="services-item-title">Planning</h3>
                                          <div className="services-item-description">
                                              <p>Our master plans provide a comprehensive look at where an
                                                  organization is today.</p>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                              <div className="portfolio-item-wrapp prague_filter_class  p_f_f9e81a7 column_paralax">
                                  <div className="portfolio-item">

                                      <div className="prague-services-wrapper">
                                          <span className="services-item-icon icon-lightbulb"></span>

                                          <h3 className="services-item-title">Interior</h3>
                                          <div className="services-item-description">
                                              <p>You may engage your architect to provide an interior design
                                                  service, advising on loose furniture.</p>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                              <div className="portfolio-item-wrapp prague_filter_class  p_f_f9e81a7">
                                  <div className="portfolio-item">

                                      <div className="prague-services-wrapper">
                                          <span className="services-item-icon icon-layers"></span>

                                          <h3 className="services-item-title">Exterior</h3>
                                          <div className="services-item-description">
                                              <p>Working together with your architect, you will share your
                                                  project needs, dreams and goals.</p>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                          </div>


                      </div>
                  </div>

              </div>
          </div>
      </div>
  </div>

  <div className="margin-lg-20t margin-sm-30t">
      <div className="container">
          <div className="row">

              <div className="column colum-container col-sm-12 no-padd margin-lg-20b">
                  <div className="heading  left dark">

                      <div className="subtitle ">LAST PROJECTS</div>
                      <h2 className="title">Make it with passion.</h2>
                  </div>
              </div>

              <div className="no-padd-left no-padd-right margin-lg-20t">
                  <div className="wrapper">
                      <div data-unique-key="139714cb2b9c35c987d2544328454258" className="js-load-more" data-start-page="1"
                          data-max-page="5" data-next-link="http://prague.loc/page/2/">
                          <div className="row prague_list prague_count_col1 prague_gap_col10  no-footer-content no-figure prague-load-wrapper"
                              data-columns="prague_count_col1" data-gap="prague_gap_col10">
                              <div className="project-list-item">
                                  <div className="project-list-outer">

                                      <div className="project-list-wrapper">

                                          <div className="project-list-img">
                                              <img src="img/project1.jpg" data-lazy-src="img/project1.jpg" className="s-img-switch"
                                                  alt="seascape-villa image" />
                                          </div>

                                          <div className="project-list-content">

                                              <div className="project-list-category">2020</div>
                                              <h3 className="project-list-title"><a href="#" target="_self">Seascape
                                                      Villa</a></h3>
                                              <div className="project-list-excerpt">
                                                  <p>The Seascape Villas project constitutes one of the first
                                                      urban interventions in this very unique context, a
                                                      landscape dominated by mountains and sea.</p>
                                              </div>
                                              <a href="#" className="project-list-link a-btn-arrow-2"
                                                  target="_self">
                                                  <span className="arrow-right"></span>
                                                  READ</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="project-list-item  column_paralax">
                                  <div className="project-list-outer">

                                      <div className="project-list-wrapper">

                                          <div className="project-list-img">
                                              <img src="img/project2.jpg" data-lazy-src="img/project2.jpg"
                                                  className="s-img-switch" alt="european-lard-station image" />
                                          </div>

                                          <div className="project-list-content">

                                              <div className="project-list-category">2020</div>


                                              <h3 className="project-list-title"><a href="#"
                                                      target="_self">European Lard Station</a></h3>
                                              <div className="project-list-excerpt">
                                                  <p>Hemicycle and offices for the Headquarters of the European
                                                      Parliament including: a 750-seat hemicycle, 1133 offices
                                                      for members of Parliament, 18 commission halls and catering
                                                      centre and service areas.</p>

                                              </div>

                                              <a href="#" className="project-list-link a-btn-arrow-2"
                                                  target="_self">
                                                  <span className="arrow-right"></span>
                                                  READ</a>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="project-list-item">
                                  <div className="project-list-outer">


                                      <div className="project-list-wrapper">

                                          <div className="project-list-img">
                                              <img src="img/project3.jpg" data-lazy-src="img/project3.jpg" className="s-img-switch"
                                                  alt="yabroudi-villa image" />
                                          </div>

                                          <div className="project-list-content">

                                              <div className="project-list-category">2019</div>

                                              <h3 className="project-list-title"><a href="#" target="_self">Yabroudi
                                                      Villa</a></h3>
                                              <div className="project-list-excerpt">
                                                  <p>The project’s architecture expresses complementary features
                                                      of a villa, made up of calm, quiet areas designed for
                                                      family life, as well as reception areas, which are open and
                                                      welcoming.</p>
                                              </div>

                                              <a href="#" className="project-list-link a-btn-arrow-2"
                                                  target="_self">
                                                  <span className="arrow-right"></span>
                                                  READ</a>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="project-list-item">
                                  <div className="project-list-outer">


                                      <div className="project-list-wrapper">

                                          <div className="project-list-img">
                                              <img src="img/project4.jpg" data-lazy-src="img/project4.jpg"
                                                  className="s-img-switch" alt="cultural-complex-centre image" />
                                          </div>

                                          <div className="project-list-content">

                                              <div className="project-list-category">2019</div>


                                              <h3 className="project-list-title"><a href="#"
                                                      target="_self">Cultural Complex Centre</a></h3>
                                              <div className="project-list-excerpt">
                                                  <p>Located near Muscat main entrance, the Cultural Centre
                                                      emerges from a unique landscape, between the sea and the
                                                      mountains, as an oasis where palm trees and mineral
                                                      colonnades offer cool public spaces.</p>

                                              </div>

                                              <a href="#" className="project-list-link a-btn-arrow-2"
                                                  target="_self">
                                                  <span className="arrow-right"></span>
                                                  READ</a>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

  {/* <!--/MAIN BODY--> */}

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

export default App;
