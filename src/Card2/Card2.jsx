import React from "react";
import styles from "./Card2.module.css"

import Card2design from "../Card2design/Card2design";
import card21 from "../assets/card21.png"
import { Button } from "../Button/Button";
 const Card2 = ()=>{

    return(
<>
<div className={styles.Card2_section}>
    <div className={styles.container}>
      <div className={styles.heading_text}> 
      <h2>Popular Courses</h2>
           <img src="data:image/png;base64,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" alt="image"></img>
      </div>
    <div className={styles.card_section_content}>
    <div className={styles.card2}>
        
        <Card2design imagesrc={card21} cont="Dave conservatoire is the Entirely free online" stu="56 students" rupe="$72.00"/>
        <Card2design imagesrc={card21} cont="Dave conservatoire is the Entirely free online" stu="56 students" rupe="$72.00"/>
        <Card2design imagesrc={card21} cont="Dave conservatoire is the Entirely free online" stu="56 students" rupe="$72.00"/>
        <Card2design imagesrc={card21} cont="Dave conservatoire is the Entirely free online" stu="56 students" rupe="$72.00"/>
             
              </div>
              <Button text="View All Courses" />    
    </div>
    </div>

</div>
</>
    );
};
export default Card2