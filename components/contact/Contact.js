import React from "react";
import "./contact.css";
import Link from "next/link";
import { info_data } from "@/constants/info-data";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact_container">
          <div className="contact_info">
            <h2>Get in Touch</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Risus tristique augue
              bibendum tortor integer imperdiet blandit justo facilisis.
              Praesent fames tristique consequat nulla facilisi. Praesent lectus
              neque id volutpat a ultrices dignissim interdum sed.
            </p>
            <ul>
              <li>
                <Link href={`mailto:${info_data.email}`}>
                  <Image
                    src="/images/icons/email.png"
                    alt="email"
                    width={24}
                    height={24}
                  />
                  {info_data.email}
                </Link>
              </li>
              <li>
                <Link href={`tel:${info_data.phone}`}>
                  <Image
                    src="/images/icons/phone.png"
                    alt="phone"
                    width={24}
                    height={24}
                  />
                  {info_data.phone}
                </Link>
              </li>
              <li>
                <p>
                  <Image
                    src="/images/icons/location.png"
                    alt="location"
                    width={24}
                    height={24}
                  />
                  {info_data.address}
                </p>
              </li>
            </ul>
          </div>
          <div className="contact_form">
            <h2>Say Something</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea
                rows="6"
                placeholder="Your Message"
                defaultValue={""}
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
