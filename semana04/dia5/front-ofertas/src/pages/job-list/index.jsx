import { useEffect, useState } from "react";
import { JobBox } from "../../components/commons/job-box/JobBox";
import { getAllJobs } from "../../services/jobsServices";
import { jobs } from "../../utils/data";

export const JobsList = () => {
  const [jobsList, setJobsList] = useState();

  useEffect(() => {
    const getData = async () => {
      const jobs = await getAllJobs();
      if (jobs.status === 200) {
        return setJobsList(jobs.data);
      }
      return alert('No se pudo cargar los datos')
    };
    getData();
  }, []);
  return (
    <>
      <div className="sub-banner bg-color-full">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>Job Listing</h1>
            <ul className="breadcrumbs">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Job Listing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="job-listing-section content-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="sidebar-right">
                <div className="widget-4 advanced-search">
                  <form method="GET" className="informeson">
                    <div className="form-group">
                      <label>Keywords</label>
                      <input
                        type="text"
                        name="search"
                        className="form-control selectpicker search-fields"
                        placeholder="Search Keywords"
                      />
                    </div>
                    <div className="form-group">
                      <label>Location</label>
                      <select
                        className="selectpicker search-fields"
                        name="Location"
                      >
                        <option>All Location</option>
                        <option>New York City</option>
                        <option>Australia</option>
                        <option>Brazil</option>
                        <option>Canada</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Categories</label>
                      <select
                        className="selectpicker search-fields"
                        name="categories"
                      >
                        <option>All Categories</option>
                        <option>Accounting / Finance</option>
                        <option>Industrial Engineer</option>
                        <option>hospital / Health Care</option>
                        <option>Design & Creative</option>
                      </select>
                    </div>
                    <br />

                    <a
                      className="show-more-options"
                      data-toggle="collapse"
                      data-target="#options-content4"
                    >
                      <i className="fa fa-plus-circle"></i> Job Type
                    </a>
                    <div id="options-content4" className="collapse">
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox13" type="checkbox" />
                        <label htmlFor="checkbox13">Full Time</label>
                      </div>
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox14" type="checkbox" />
                        <label htmlFor="checkbox14">Part Time</label>
                      </div>
                      <br />
                    </div>
                    <a
                      className="show-more-options"
                      data-toggle="collapse"
                      data-target="#options-content5"
                    >
                      <i className="fa fa-plus-circle"></i> Date Posted
                    </a>
                    <div id="options-content5" className="collapse">
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox15" type="checkbox" />
                        <label htmlFor="checkbox15">Last Hour</label>
                      </div>
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox16" type="checkbox" />
                        <label htmlFor="checkbox16">Last 24 Hours</label>
                      </div>
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox17" type="checkbox" />
                        <label htmlFor="checkbox17">Last 7 Days</label>
                      </div>
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox18" type="checkbox" />
                        <label htmlFor="checkbox18">Last 30 Days</label>
                      </div>
                      <br />
                    </div>

                    <a
                      className="show-more-options"
                      data-toggle="collapse"
                      data-target="#options-content6"
                    >
                      <i className="fa fa-plus-circle"></i> Experience
                    </a>
                    <div id="options-content6" className="collapse">
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox19" type="checkbox" />
                        <label htmlFor="checkbox19">1 Year</label>
                      </div>
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox20" type="checkbox" />
                        <label htmlFor="checkbox20">2 Year</label>
                      </div>
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox21" type="checkbox" />
                        <label htmlFor="checkbox21">3 Year</label>
                      </div>
                      <br />
                    </div>

                    <a
                      className="show-more-options"
                      data-toggle="collapse"
                      data-target="#options-content"
                    >
                      <i className="fa fa-plus-circle"></i> Offerd Salary
                    </a>
                    <div id="options-content" className="collapse">
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox2" type="checkbox" />
                        <label htmlFor="checkbox2">10k - 20k</label>
                      </div>
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox3" type="checkbox" />
                        <label htmlFor="checkbox3">20k - 30k</label>
                      </div>
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox4" type="checkbox" />
                        <label htmlFor="checkbox4">30k - 40k</label>
                      </div>
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox1" type="checkbox" />
                        <label htmlFor="checkbox1">40k - 50k</label>
                      </div>
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox7" type="checkbox" />
                        <label htmlFor="checkbox7">50k - 60k</label>
                      </div>
                      <br />
                    </div>

                    <a
                      className="show-more-options"
                      data-toggle="collapse"
                      data-target="#options-content3"
                    >
                      <i className="fa fa-plus-circle"></i> Qualification
                    </a>
                    <div id="options-content3" className="collapse">
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox11" type="checkbox" />
                        <label htmlFor="checkbox11">Intermidiate</label>
                      </div>
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox12" type="checkbox" />
                        <label htmlFor="checkbox12">Gradute</label>
                      </div>
                      <br />
                    </div>

                    <a
                      className="show-more-options"
                      data-toggle="collapse"
                      data-target="#options-content2"
                    >
                      <i className="fa fa-plus-circle"></i> Gender
                    </a>
                    <div id="options-content2" className="collapse">
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox8" type="checkbox" />
                        <label htmlFor="checkbox8">Male</label>
                      </div>
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox9" type="checkbox" />
                        <label htmlFor="checkbox9">Female</label>
                      </div>
                      <div className="checkbox checkbox-theme checkbox-circle">
                        <input id="checkbox10" type="checkbox" />
                        <label htmlFor="checkbox10">Others</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="option-bar d-none d-xl-block d-lg-block d-md-block d-sm-block">
                <div className="row">
                  <div className="col-lg-6 col-md-7 col-sm-7">
                    <div className="sorting-options2">
                      <span className="sort">Sort by:</span>
                      <select
                        className="selectpicker search-fields"
                        name="default-order"
                      >
                        <option>Relevance</option>
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Random</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-5 col-sm-5">
                    <div className="sorting-options">
                      <a href="#" className="change-view-btn active-view-btn">
                        <i className="fa fa-th-list"></i>
                      </a>
                      <a href="#" className="change-view-btn">
                        <i className="fa fa-th-large"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {jobs.length > 0 &&
                jobs.map((job, index) => (
                  <JobBox key={job.title + index} job={job} />
                ))}

              <div className="pagination-box hidden-mb-45 text-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Prev
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
