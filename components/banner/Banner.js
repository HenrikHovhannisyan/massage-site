import React from "react";
import Link from "next/link";
import "./banner.css";

const Banner = () => {
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
            <div className="banner_btn">
              <Link href="/contact">Book on Booksy</Link>
              <Link href="/contact">Hey Goldie</Link>
            </div>
          </div>
          <div className="banner_right">
            <img src="/images/man.png" alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
