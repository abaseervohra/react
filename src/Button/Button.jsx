import React  from "react";
import styles from './Button.module.css'


export const Button = ({text})=>{
    console.log(text)
    return(
        <div className={styles.buttonContainer}>
        <button className={styles.btn}>
          {text}
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
            className={styles.featherArrowRight}
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    )      
}