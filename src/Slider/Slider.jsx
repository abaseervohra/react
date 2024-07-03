import React from "react";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider_left}>
        <span className={styles.slider_content}>Great Quality Cocial life</span>
        <h2 className={styles.slider_content2}>
          Discover the world of<br></br>possible university.
        </h2>
        <a className={styles.react_btn_border} href="/about">
          Admissions
        </a>
      </div>
      <div className={styles.slider_right}>
  <a className={styles.button} href="/">
    <i className={styles.arrow_triangle_right}></i>

    <em className={styles.button_text}>
      Watch Video <br />
      Intro
    </em>
  </a>
</div>

    </div>
  );
};

export default Slider;
