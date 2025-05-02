import React from "react";
import Link from "next/link";
import "./videos.css";
import { videos_data } from "@/constants/videos-data";
import { info_data } from "@/constants/info-data";
import Image from "next/image";

const Videos = () => {
  return (
    <section id="video">
      <div className="container">
        <h2>Videos</h2>
        <div className="video-list">
          {videos_data.map((item) => (
            <div key={item.id} className="video-item">
              <iframe
                title={item.id}
                src={item.url}
                width="316"
                height="533"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        <Link
          href={info_data.instagram}
          target="_blank"
          className="instagram_btn"
        >
          Follow us on Instagram
          <Image
            src="/images/icons/instagram.png"
            width={18}
            height={18}
            alt="Instagram Icon"
          />
        </Link>
      </div>
    </section>
  );
};

export default Videos;
