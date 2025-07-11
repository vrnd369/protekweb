import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css'
import howItStartedImage from "../Assets/image1.png"; // Adjust the path as necessary

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200
    });
  }, []);

  return (
    <section className="how-it-started">
      <div className="about-heading" data-aos="fade-down">
        <h1>About Us</h1>
      </div>
      <div className="left-content" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <h2 className="title">
          <span className="typing-effect">Building the Future of Design</span>
        </h2>
        <p className="description">
          Kawruh was founded by Robert Anderson, a passionate lifelong learner,
          and Maria Sanchez, a visionary educator. Their shared dream was to
          create a digital haven of knowledge accessible to all. United by their
          belief in the transformational power of education, they embarked on a
          journey to build "Kawruh." With relentless dedication, they gathered a
          team of experts and launched this innovative platform, creating a global
          community of eager learners, all connected by the desire to explore, learn,
          and grow.
        </p>
      </div>
      <div className="right-content" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
        <div className="how-it-started-image" data-aos="zoom-in-left">
          <img src={howItStartedImage} alt="Founders of Kawruh" />
        </div>
        <div className="how-it-started-stats">
          <div className="stat-item">
            <h3>3.5</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>23</h3>
            <p>Project Challenges</p>
          </div>
          <div className="stat-item">
            <h3>830+</h3>
            <p>Positive Reviews</p>
          </div>
          <div className="stat-item">
            <h3>100K</h3>
            <p>Trusted Students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;