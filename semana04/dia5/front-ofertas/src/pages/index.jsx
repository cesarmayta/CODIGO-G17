import { JobBox } from "../components/commons/job-box/JobBox";
import { jobs } from "../utils/data";

export const HomePage = () => {
  return (
    <>
      <div className="banner banner_video_bg" id="banner">
        <div className="pattern-overlay">
          <a
            id="bgndVideo"
            className="player"
            data-property="{videoURL:'https://www.youtube.com/watch?v=5e0LxrLSzok',containment:'.banner_video_bg', quality:'large', autoPlay:true, mute:true, opacity:1}"
          ></a>
        </div>
        <div
          id="bannerCarousole"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item banner-max-height active">
              <div className="carousel-caption banner-slider-inner"></div>
            </div>
          </div>
        </div>
        <div className="banner-inner">
          <div className="container">
            <div className="text-center">
              <h3 className="b-text">Find your job</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              <div className="inline-search-area ml-auto mr-auto none-768">
                <div className="search-boxs">
                  <div className="search-col">
                    <input
                      type="text"
                      name="search"
                      className="form-control has-icon b-radius"
                      placeholder="Job title, Keywords or company name"
                    />
                  </div>
                  <div className="search-col">
                    <select
                      className="selectpicker search-fields"
                      name="location"
                    >
                      <option>location</option>
                      <option>New York</option>
                      <option>Australian</option>
                      <option>Canada</option>
                      <option>London</option>
                    </select>
                  </div>
                  <div className="find">
                    <button className="btn button-theme btn-search btn-block b-radius">
                      <i className="fa fa-search"></i>
                      <strong>Find Job</strong>
                    </button>
                  </div>
                </div>
              </div>
              <div className="banner-counter-box none-768">
                <div className="counter-box">
                  <h1 className="counter">2967</h1>
                  <p>Jobs Posted</p>
                </div>
                <div className="counter-box">
                  <h1 className="counter">167</h1>
                  <p>Companies</p>
                </div>
                <div className="counter-box">
                  <h1 className="counter">150</h1>
                  <p>Candidates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popular-categories content-area-7">
        <div className="container">
          <div className="main-title text-center">
            <h1>Popular Categories</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="categorie-box">
                <i className="flaticon-money"></i>
                <h5>Accounting / Finance</h5>
                <span>(2143)</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="categorie-box">
                <i className="flaticon-mortarboard"></i>
                <h5>Education Training</h5>
                <span>(742)</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="categorie-box">
                <i className="flaticon-shout"></i>
                <h5>Digital Marketing</h5>
                <span>(341)</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="categorie-box">
                <i className="flaticon-radar"></i>
                <h5>Telecommunication</h5>
                <span>(410)</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="categorie-box">
                <i className="flaticon-sale"></i>
                <h5>Sales & Marketing</h5>
                <span>(23)</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="categorie-box">
                <i className="flaticon-pencil"></i>
                <h5>Writing & Translations</h5>
                <span>(43)</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="categorie-box">
                <i className="flaticon-doctor"></i>
                <h5>Health</h5>
                <span>(35)</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="categorie-box">
                <i className="flaticon-truck"></i>
                <h5>Transportation / Logistics</h5>
                <span>(7)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="job-section content-area-5 bg-grea">
        <div className="container">
          <div className="main-title text-center">
            <h1>Recent Jobs</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {
                jobs.length > 0 &&
                  jobs.map((job, index) => <JobBox key={job.title + index} job={job} />)
              }
              <div className="text-center clearfix">
                <a href="job-list.html" className="browse-all">
                  Browse All Jobs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="counters bg-color-full-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="counter-box">
                <i className="flaticon-user"></i>
                <h1 className="counter">1967</h1>
                <p>Members</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="counter-box">
                <i className="flaticon-work"></i>
                <h1 className="counter">667</h1>
                <p>Jobs</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="counter-box">
                <i className="flaticon-document"></i>
                <h1 className="counter">475</h1>
                <p>Resumes</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="counter-box">
                <i className="flaticon-factory"></i>
                <h1 className="counter">475</h1>
                <p>Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="container">
          <div className="main-title">
            <h1>What Our Users Say</h1>
          </div>
          <div className="slick-slider-area">
            <div
              className="row slick-carousel"
              data-slick='{"slidesToShow": 2, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
            >
              <div className="slick-slide-item">
                <div className="testimonial-inner">
                  <div className="content-box">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>
                  </div>
                  <div className="media">
                    <a href="#">
                      <img
                        src="https://picsum.photos/50/50"
                        alt="testimonial-avatar"
                        className="img-fluid"
                      />
                    </a>
                    <div className="media-body align-self-center">
                      <h5>Eliane Perei</h5>
                      <h6>Web Developer</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slick-slide-item">
                <div className="testimonial-inner">
                  <div className="content-box">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>
                  </div>
                  <div className="media">
                    <a href="#">
                      <img
                        src="https://picsum.photos/50/50"
                        alt="testimonial-avatar"
                        className="img-fluid"
                      />
                    </a>
                    <div className="media-body align-self-center">
                      <h5>Maria Blank</h5>
                      <h6>Office Manager</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slick-slide-item">
                <div className="testimonial-inner">
                  <div className="content-box">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>
                  </div>
                  <div className="media">
                    <a href="#">
                      <img
                        src="https://picsum.photos/50/50"
                        alt="testimonial-avatar"
                        className="img-fluid"
                      />
                    </a>
                    <div className="media-body align-self-center">
                      <h5>Karen Paran</h5>
                      <h6>Support Manager</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slick-slide-item">
                <div className="testimonial-inner">
                  <div className="content-box">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever
                    </p>
                  </div>
                  <div className="media">
                    <a href="#">
                      <img
                        src="https://picsum.photos/50/50"
                        alt="testimonial-avatar"
                        className="img-fluid"
                      />
                    </a>
                    <div className="media-body align-self-center">
                      <h5>John Pitarshon</h5>
                      <h6>Creative Director</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partners content-area-15 bg-grea">
        <div className="container">
          <div className="main-title text-center">
            <h1>Companies We've Helped</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="slick-slider-area">
            <div
              className="row slick-carousel"
              data-slick='{"slidesToShow": 5, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 3}}, {"breakpoint": 768,"settings":{"slidesToShow": 2}}]}'
            >
              <div className="slick-slide-item">
                <img
                  src="https://picsum.photos/130/66"
                  alt="brand"
                  className="img-fluid"
                />
              </div>
              <div className="slick-slide-item">
                <img
                  src="https://picsum.photos/130/66"
                  alt="brand"
                  className="img-fluid"
                />
              </div>
              <div className="slick-slide-item">
                <img
                  src="https://picsum.photos/130/66"
                  alt="brand"
                  className="img-fluid"
                />
              </div>
              <div className="slick-slide-item">
                <img
                  src="https://picsum.photos/130/66"
                  alt="brand"
                  className="img-fluid"
                />
              </div>
              <div className="slick-slide-item">
                <img
                  src="https://picsum.photos/130/66"
                  alt="brand"
                  className="img-fluid"
                />
              </div>
              <div className="slick-slide-item">
                <img
                  src="https://picsum.photos/130/66"
                  alt="brand"
                  className="img-fluid"
                />
              </div>
              <div className="slick-slide-item">
                <img
                  src="https://picsum.photos/130/66"
                  alt="brand"
                  className="img-fluid"
                />
              </div>
              <div className="slick-slide-item">
                <img
                  src="https://picsum.photos/130/66"
                  alt="brand"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog content-area">
        <div className="container">
          <div className="main-title">
            <h1>Latest Blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="slick-slider-area">
            <div
              className="row slick-carousel"
              data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
            >
              <div className="slick-slide-item">
                <div className="blog-3">
                  <div className="blog-photo">
                    <img
                      src="https://picsum.photos/350/231"
                      alt="blog"
                      className="img-fluid"
                    />
                    <div className="date-box">
                      <span>27</span>Feb
                    </div>
                  </div>
                  <div className="detail">
                    <h3>
                      <a href="blog-details.html">
                        How To Get Out Of Stress At Work
                      </a>
                    </h3>
                    <div className="post-meta">
                      <span>
                        <a href="#">
                          <i className="flaticon-male"></i>Amdin
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="flaticon-comment"></i>27
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="fa fa-heart-o"></i>27
                        </a>
                      </span>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                    </p>
                  </div>
                </div>
              </div>
              <div className="slick-slide-item">
                <div className="blog-3">
                  <div className="blog-photo">
                    <img
                      src="https://picsum.photos/350/231"
                      alt="blog"
                      className="img-fluid"
                    />
                    <div className="date-box">
                      <span>23</span>Feb
                    </div>
                  </div>
                  <div className="detail">
                    <h3>
                      <a href="blog-details.html">
                        Back To Work After Vacation
                      </a>
                    </h3>
                    <div className="post-meta">
                      <span>
                        <a href="#">
                          <i className="flaticon-male"></i>Amdin
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="flaticon-comment"></i>27
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="fa fa-heart-o"></i>27
                        </a>
                      </span>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                    </p>
                  </div>
                </div>
              </div>
              <div className="slick-slide-item">
                <div className="blog-3">
                  <div className="blog-photo">
                    <img
                      src="https://picsum.photos/350/231"
                      alt="blog"
                      className="img-fluid"
                    />
                    <div className="date-box">
                      <span>23</span>Feb
                    </div>
                  </div>
                  <div className="detail">
                    <h3>
                      <a href="blog-details.html">Job Motivational Quote</a>
                    </h3>
                    <div className="post-meta">
                      <span>
                        <a href="#">
                          <i className="flaticon-male"></i>Amdin
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="flaticon-comment"></i>27
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="fa fa-heart-o"></i>27
                        </a>
                      </span>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                    </p>
                  </div>
                </div>
              </div>
              <div className="slick-slide-item">
                <div className="blog-3">
                  <div className="blog-photo">
                    <img
                      src="https://picsum.photos/350/231"
                      alt="blog"
                      className="img-fluid"
                    />
                    <div className="date-box">
                      <span>23</span>Feb
                    </div>
                  </div>
                  <div className="detail">
                    <h3>
                      <a href="blog-details.html">Job Motivational Quote</a>
                    </h3>
                    <div className="post-meta">
                      <span>
                        <a href="#">
                          <i className="flaticon-male"></i>Amdin
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="flaticon-comment"></i>27
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="fa fa-heart-o"></i>27
                        </a>
                      </span>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slick-prev slick-arrow-buton">
              <i className="fa fa-angle-left"></i>
            </div>
            <div className="slick-next slick-arrow-buton">
              <i className="fa fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="intro-section bg-color-full-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="intro-text">
                <h3>Gat a Deax App</h3>
                <p>
                  Searching for jobs never been that easy. Now you can find job
                  matched your career expectation
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="app-download-button">
                <a href="#" className="android-app">
                  <i className="flaticon-robot"></i>Google Play
                </a>
                <a href="#" className="apple-app">
                  <i className="flaticon-apple"></i>Apple Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
