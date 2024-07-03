import React from "react";
import styles from "./Header.module.css";

const Headertop = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.header_top}>
        <ul className={styles.header_top_left}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <a href="tel:(+1)3344999999"> (+1) 3344 999 999</a>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href="mailto:info@reactheme.com">info@reactheme.com</a>
          </li>
        </ul>
        <ul className={styles.header_top_right}>
          <li>
            <a
              href="https://www.facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true" class="fab fa-facebook-f"></span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true" class="fab fa-twitter"></span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true" class="fab fa-linkedin-in"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.header_middle}>
        <div className={styles.header_middle_left}>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          </div>
          <div className={styles.header_middle_right}>
            <ul className={styles.listing_header} >
              <li>Home </li>
              <li>Page</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
            <div class="search-container">
  <input type="text" placeholder="search" />
  <i class="fa-solid fa-magnifying-glass"></i>
</div>

          </div>
        </div>
      </div>
  
  );
};

export default Headertop;
