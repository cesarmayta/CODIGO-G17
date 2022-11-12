import { Link } from "react-router-dom";
import black_logo from "../../../img/logos/black-logo.png";

export const Header = () => {
  return (
    <header className="main-header header-transparent sticky-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand logo" to={"/"}>
            <img src={black_logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav header-ml">
              <li className="nav-item dropdown active">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Index
                </a>
                <ul
                  className="dropdown-menu dm-2"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="index.html">
                      Index 01
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index-2.html">
                      Index 02
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index-3.html">
                      Index 03
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink9"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Candidates
                </a>
                <ul
                  className="dropdown-menu dm-2"
                  aria-labelledby="navbarDropdownMenuLink9"
                >
                  <li>
                    <a className="dropdown-item" href="candidate-list.html">
                      Candidate Listing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="candidate-details.html">
                      Candidate Details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="add-resume.html">
                      Add Resume
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="employer-dashboard.html"
                    >
                      Candidate Dashboard
                    </a>
                    <ul className="dropdown-menu dm-2">
                      <li>
                        <a className="dropdown-item" href="dashboard.html">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="edit-profile.html">
                          Edit Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="add-resume.html">
                          Add Resume
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="bookmark.html">
                          bookmark
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="applied.html">
                          Applied
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="messages.html">
                          Messages
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="alerts.html">
                          Job Alert
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="transaction.html">
                          Transaction
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Employers
                </a>
                <ul
                  className="dropdown-menu dm-2"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="employer-list.html">
                      Employer Listing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="employer-details.html">
                      Employer Details
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="employer-dashboard-post-job.html"
                    >
                      Post a Job
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="employer-dashboard.html"
                    >
                      Employer Dashboard
                    </a>
                    <ul className="dropdown-menu dm-2">
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-dashboard.html"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-dashboard-edit-profile.html"
                        >
                          Edit Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-dashboard-post-job.html"
                        >
                          Post a Job
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-dashboard-manage-job.html"
                        >
                          Manage Job
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-dashboard-manage-candidate.html"
                        >
                          Manage Candidate
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-dashboard-messages.html"
                        >
                          Messages
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-dashboard-transaction.html"
                        >
                          Transaction
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink10"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Jobs
                </a>
                <ul
                  className="dropdown-menu dm-2"
                  aria-labelledby="navbarDropdownMenuLink10"
                >
                  <li>
                    <Link className="dropdown-item" to={"/job-list"}>
                      Job Listing
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="job-details.html">
                      Job Details
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown megamenu-li">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div
                  className="dropdown-menu megamenu"
                  aria-labelledby="dropdown01"
                >
                  <div className="megamenu-area">
                    <div className="row sobuz">
                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="megamenu-section">
                          <h6 className="megamenu-title">Pages</h6>
                          <a className="dropdown-item" href="about.html">
                            About Us
                          </a>
                          <a className="dropdown-item" href="pricing-plan.html">
                            Pricing Plan
                          </a>
                          <a
                            className="dropdown-item"
                            href="terms-and-condition.html"
                          >
                            Terms And Condition
                          </a>
                          <a className="dropdown-item" href="how-it-work.html">
                            How It Work
                          </a>
                          <a className="dropdown-item" href="invoices.html">
                            Invoice
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="megamenu-section">
                          <h6 className="megamenu-title">Pages</h6>
                          <a className="dropdown-item" href="contact.html">
                            Contact Us
                          </a>
                          <a className="dropdown-item" href="gallery.html">
                            Gallery
                          </a>
                          <a className="dropdown-item" href="typography.html">
                            Typography
                          </a>
                          <a className="dropdown-item" href="checkout.html">
                            Checkout
                          </a>
                          <a className="dropdown-item" href="faq.html">
                            Faq
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="megamenu-section">
                          <h6 className="megamenu-title">Pages</h6>
                          <a className="dropdown-item" href="icon.html">
                            Icons
                          </a>
                          <a className="dropdown-item" href="coming-soon.html">
                            Coming Soon
                          </a>
                          <a className="dropdown-item" href="login.html">
                            Login
                          </a>
                          <a className="dropdown-item" href="404.html">
                            Error Page
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink7"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul
                  className="dropdown-menu dm-2"
                  aria-labelledby="navbarDropdownMenuLink7"
                >
                  <li>
                    <a className="dropdown-item" href="blog-columns-1.html">
                      Blog 1 Columns
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-columns-2.html">
                      Blog 2 Columns
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-columns-3.html">
                      Blog 3 Columns
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-details.html">
                      Blog Detele
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <a className="nav-link" href="login.html">
                  <i className="flaticon-logout"></i>Sign In
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="employer-dashboard-post-job.html"
                  className="nav-link link-color"
                >
                  <i className="flaticon-plus"></i> Post a Job
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
