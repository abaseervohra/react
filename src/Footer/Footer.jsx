import React from "react";
import styles from "./Footer.module.css";
import logo2 from "../assets/logo2.png";

const Footer = () => {
  return (
    <div className={styles.footer_section}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.row1}>
            <img src={logo2} alt="Logo" />
            <ul>
              <li id={styles.row1con}>
                There are course and event custom post types so you can easily
                create and manage course, events.
              </li>
              <li>
                <i className="fa-solid fa-phone"></i> +(402) 762 441 83
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i> info@echooling.com
              </li>
            </ul>
          </div>
          <div className={styles.row2}>
            <h3 className={styles.footerTitle}>About Us</h3>
            <ul>
              <li>About</li>
              <li>Course</li>
              <li>Event</li>
              <li>Career</li>
              <li>Become a Teacher</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={styles.row3}>
            <h3 className={styles.footerTitle}>Useful Links</h3>
            <ul>
              <li>Browser</li>
              <li>Browser library</li>
              <li>Event</li>
              <li>Career</li>
              <li>Become a Teacher</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={styles.row4}>
            <h3 className={styles.footerTitle}>Newsletter</h3>
            <ul>
              <li>Get the latest Echooling news delivered to your inbox</li>
              <form action="#">
                <input type="email" required placeholder="Enter your email" />
                <button className={styles.footerFormButton}>
                  <i className="arrow_right"></i>
                </button>
              </form>
            </ul>
          </div>
        </div>
        <div className={styles.footer_bottom}>
        <div className={styles.reactCopyLeft}>
              © 2022 <a href="/">Echooling.</a> All Rights Reserved
            </div>
            <div className={styles.reactCopyRight}>
              <ul className={styles.socialLinks}>
                <li className={styles.follow}>Follow us</li>
                <li>
                  <a href="/">
                    <span
                      aria-hidden="true"
                      className={styles.socialFacebook}
                    ></span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span
                      aria-hidden="true"
                      className={styles.socialTwitter}
                    ></span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span
                      aria-hidden="true"
                      className={styles.socialLinkedin}
                    ></span>
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
