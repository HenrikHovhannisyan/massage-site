import React from "react";
import "./footer.css";
import Image from "next/image";
import Link from "next/link";
import { info_data } from "@/constants/info-data";

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <div className="container">
          <div className="footer_content">
            <div className="footer_logo">
              <Image
                src="/images/footer_logo.png"
                alt="Logo"
                width={155}
                height={130}
              />
            </div>
            <div className="footer_social">
              <Link href={info_data.instagram} target="_blank">
                <Image
                  src="/images/icons/footer_instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href={info_data.facebook} target="_blank">
                <Image
                  src="/images/icons/footer_facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href={info_data.tiktok} target="_blank">
                <Image
                  src="/images/icons/tik_tok.png"
                  alt="Tik-tok"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <hr />
          <div className="container">
            <div className="footer_copyright">
              <p>© {info_data.name}</p>
              <Link href="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
