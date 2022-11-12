import logo from "../../../img/logos/logo.png";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="footer-item clearfix">
                <img src={logo} alt="logo" className="f-logo" />
                <ul className="contact-info">
                  <li>
                    <i className="flaticon-pin"></i>20/F Green Road, Dhanmondi,
                    Dhaka
                  </li>
                  <li>
                    <i className="flaticon-mail"></i>
                    <a href="mailto:sales@hotelempire.com">
                      info@themevessel.com
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-internet"></i>
                    <a href="mailto:sales@hotelempire.com">
                      info@themevessel.com
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-phone"></i>
                    <a href="tel:+55-417-634-7071">+0477 85X6 552</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div className="footer-item">
                <h4>Helpful Links</h4>
                <ul className="links">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div className="footer-item">
                <h4>Job Seekers</h4>
                <ul className="links">
                  <li>
                    <a href="#">Create Account</a>
                  </li>
                  <li>
                    <a href="about.html">Career Counseling</a>
                  </li>
                  <li>
                    <a href="pricing-tables.html">My Oficiona</a>
                  </li>
                  <li>
                    <a href="contact.html">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div className="footer-item">
                <h4>Employers</h4>
                <ul className="links">
                  <li>
                    <a href="#">Create Account</a>
                  </li>
                  <li>
                    <a href="#">Products $ Service</a>
                  </li>
                  <li>
                    <a href="#">Post a Task</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-8 col-sm-12">
              <div className="footer-item clearfix">
                <h4>Newsletter</h4>
                <div className="Subscribe-box">
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit.
                  </p>
                  <form className="form-inline" action="#" method="GET">
                    <input
                      type="text"
                      className="form-control mb-sm-0"
                      id="inlineFormInputName3"
                      placeholder="Email Address"
                    />
                    <button type="submit" className="btn">
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <p className="copy">
                © 2019 <a href="#">Theme Vessel.</a> Trademarks and brands are
                the property of their respective owners.
              </p>
            </div>
            <div className="col-lg-4 col-md-4">
              <ul className="social-list clearfix">
                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="google">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="rss">
                    <i className="fa fa-rss"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
