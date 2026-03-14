import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para"
        style={{
        fontSize: "1.05rem",
        lineHeight: "1.8",
        color: "#ffffff",
        maxWidth: "750px",
        margin: "0 auto",
        wordSpacing: "2px"
      }}>
          Versatile Full Stack Developer with a strong foundation in building end-to-end web and mobile applications, scalable backend systems, and cloud-native infrastructure. 
          Experienced in both frontend and backend development, mobile application development, cloud platforms, and DevOps practices. 
          Contributed to open-source projects in the cybersecurity domain, applying practical knowledge to enhance system security, automation, and performance monitoring. 
          Committed to writing clean, maintainable code and delivering efficient, user-focused digital solutions.
          Passionate about continuous learning, collaboration, and solving real-world problems through technology
        </p>
      </div>
    </div>
  );
};

export default About;
