import React from "react";
import "./services.css";
import Item from "./Item";
import { data } from "@/constants/services-data";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2>Massage Services</h2>
        <div className="service-list">
          {data.map((item) => (
            <Item
              key={item.id}
              img={item.img}
              title={item.title}
              text={item.text}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
