export const JobBox = ({ job }) => {
  return (
    <div className="job-box">
      <div className="company-logo">
        <img src="https://picsum.photos/90/90" alt="logo" />
      </div>
      <div className="description">
        <div className="float-left">
          <h5 className="title">
            <a href="job-details.html">{job.title}</a>
          </h5>
          <div className="candidate-listing-footer">
            <ul>
              <li>
                <i className="flaticon-work"></i> {job.position}
              </li>
              <li>
                <i className="flaticon-pin"></i> {job.location}
              </li>
              <li>
                <i className="flaticon-time"></i> {job.format}
              </li>
            </ul>
            <h6>Deadline: {job.deadline}</h6>
          </div>
        </div>
        <div className="div-right">
          <a href="#" className="apply-button">
            Apply Now
          </a>
          <a href="#">
            <i className="flaticon-heart favourite"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
