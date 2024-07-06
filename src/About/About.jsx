import React from "react";
import styles from "./About.module.css";
import about from "../assets/about.png";
import { Button } from "../Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about_content}>
        <div className={styles.about_left_content}>
          <img src={about} />
        </div>
        <div className={styles.about_right_content}>
          <h2 className={styles.about_area}>
            Welcome to <br />
            <span>Echooling LMS Platform</span>
          </h2>
          <p className={styles.about__paragraph}>
            {" "}
            Education is both the act of teaching knowledge to others and the
            act of receiving knowledge from someone else.
          </p>
          <p className={styles.para}>
            Have questions?<span> Get Free Guide</span>
          </p>
          <p className={styles.para2}>
            Education also refers to the knowledge received through schooling
            instruction and to the institution of teaching as a whole. The main
            purpose of education is the integral development of a person.
          </p>
          <div className={styles.Button_about}>
            <Button text="Read More" />
            <div class={styles.last_li}>
                <em>Get Support</em>
                <a href="/mailto:support@react.com">support@react.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
