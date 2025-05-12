import React from "react";
import "./testimonials.css";
import { testimonials_data } from "@/constants/testimonials-data";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-list">
          {testimonials_data.map((item) => {
            return (
              <div className="testimonial" key={item.id}>
                <p>{item.text}</p>
                <img
                  src={item.img}
                  alt={item.name}
                  width={"96"}
                  height={"96"}
                />
                <h3>{item.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
