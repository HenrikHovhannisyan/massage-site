import React from "react";
import Link from "next/link";
import "./services.css";

const Item = ({ img, title, text, url }) => {
  return (
    <div className="services_item">
      <img src={img} alt={title} />
      <div className="item_container">
        <h3>{title}</h3>
        <p>{text}</p>
        <hr />
        <Link href={url}>Book Now</Link>
      </div>
    </div>
  );
};

export default Item;
