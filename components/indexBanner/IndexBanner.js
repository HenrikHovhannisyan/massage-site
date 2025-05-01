import React from "react";
import "./indexBanner.css";

const IndexBanner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="banner_container">
          <div className="banner_left">
            <h1>Sheepish Serenity Massage</h1>
            <p>
              Luxury Wellness & Therapeutic Touch for people of the Working
              World
            </p>
            <small>
              Serving Orlando, Oviedo, Metrowest, and surrounding Central
              Florida communities.
            </small>
          </div>
          <div className="banner_right">
            <img src="/man.png" alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexBanner;
