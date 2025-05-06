import React from "react";
import Link from "next/link";
import "./banner.css";
import { info_data } from "@/constants/info-data";

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
              Massages Orlando, Oviedo, Metrowest, and surrounding Central
              Florida communities.
            </small>
            <div className="banner_btn">
              <Link
                href={info_data.booksy_link}
                target="_blank"
                alt={info_data.name}
              >
                Book on Booksy
              </Link>
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
