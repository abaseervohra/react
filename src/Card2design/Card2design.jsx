import React from "react";
import styles from "./Card2design.module.css"
import card21 from "../assets/card21.png"

const Card2design =({ imagesrc, cont, stu, rupe }) => {
  return (
    <>
      <div className={styles.Cards}>
        <img src={imagesrc}  />
        <div className={styles.card2content}>
    <ul className={styles.card21}>
          <li>UX Design</li>
          <li>5 Lessons</li>
        </ul>
        <h1>{cont}</h1>
        <ul className={styles.coursestudent}>
          <li className={styles.stu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-users"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            {stu}
          </li>
          <li className={styles.react__user}>{rupe} </li>
        </ul>
        </div>
      </div>
    </>
  );
};
export default Card2design
