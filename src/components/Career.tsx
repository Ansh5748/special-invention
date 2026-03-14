import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source Contribution</h4>
                <h5>Honeynet - DICOMHawk</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Done 4+ months of open source contribution to DICOMHawk, a DICOM parser and viewer built with React.js and TypeScript. Implemented new features, fixed bugs, and improved documentation to enhance the project's functionality and usability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE - 1</h4>
                <h5>Tectonic</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Served production level automated e-commerce store using React.js, JavaScript and CSS. Developed optimized and reusable components, integrated payment gateways, authentication flow and optimized performance to create seamless shopping experiences for customers.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Freelancer</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working as a freelancer, building custom web applications for clients using React.js, Node.js, and MongoDB. Collaborating closely with clients to understand their requirements and deliver tailored solutions that meet their business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
