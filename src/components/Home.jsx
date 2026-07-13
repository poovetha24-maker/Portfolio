
import { motion } from "framer-motion";

function Home() {
const downloadResume = () => {
  const link = document.createElement("a");

  link.href = `${window.location.origin}/Portfolio/Resume_Poovetha_R.pdf`;

  link.setAttribute("download", "Resume_Poovetha_R.pdf");

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section id="home" className="home">
      <div className="home-content">
      
        <div className="home-text">
          <motion.div
  className="home-text"
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
></motion.div>
          <h1>Hello, I'm Poovetha</h1>

          <h2>B.Tech Student | Frontend Developer</h2>

          <p>
            I create responsive and user-friendly web applications
            using React.js and modern web technologies.
          </p>

          <div className="home-buttons">
            <button>
              View My Work
            </button>

            <button
              className="secondary-btn"
              onClick={downloadResume}
            >
              Download Resume
            </button>
          </div>
        </div>

       <div className="profile-image">
  <img
    src={`${import.meta.env.BASE_URL}profile.jpg`}
    alt="Profile"
  />
</div>

      </div>
    </section>
  );
}

export default Home;