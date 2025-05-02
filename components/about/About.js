import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>Why We Exist</h2>
        <div className="about_content">
          <div className="about_left">
            <p className="about_text">
              The importance of therapeutic touch in our everyday lives often
              goes overlooked. Massage therapy isn’t just about relaxation—it’s
              about restoration, nervous system regulation, and reclaiming our
              right to softness in a world that constantly demands our strength.
            </p>
            <p className="about_text">
              For working people—especially those balancing careers, family, and
              expectations—the physical toll is real. Chronic tension,
              migraines, burnout, and poor sleep aren’t just “life.” They’re
              signals. And you deserve better.
            </p>
            <p className="about_text">
              You deserve care that understands your unique experience, your
              hair, your boundaries, and your brilliance. As a minority massage
              therapist, my practice is rooted in professionalism, respect, and
              cultural competence. I create safe, welcoming spaces for people of
              the working world to unwind without judgment, pressure, or
              performance.
            </p>
            <p className="about_text">
              Massage isn’t a luxury—it’s maintenance. And healing in our
              community starts with how we care for ourselves and each other.
              Let’s redefine rest. One session at a time.”
            </p>
          </div>
          <div className="about_right">
            <img src="/images/about.png" alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
