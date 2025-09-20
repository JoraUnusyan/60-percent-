import styles from "./DeliveryBanner.module.scss"
import React, { useState, useEffect } from "react";
import slide1 from "../../images/icons/gruzavik2.png";
import slide2 from "../../images/icons/serdechko.png";
import slide3 from "../../images/icons/podarok.png";
import slide4 from "../../images/icons/povriglxark.png";

const DeliveryBanner = () => {
  
    

    return (
    <div className={styles.DeliveryFULL}>
        <div className={`${styles.DeliveryInfo} ${styles.DeliveryContainer}`}>

         <div className={styles.Deliver}> <img src={slide1} className={styles.animation1}/> <p>Next day delivery <br /> /7days a week</p> </div>
         <div className={styles.Deliver}> <img src={slide2} className={styles.animation2}/> <p>Handcrafted chocolate <br />strawberries & bouquets</p> </div>
         <div className={styles.Deliver}> <img src={slide3} className={styles.animation3}/> <p>Free delivery <br />over $199</p> </div>
         <div className={styles.Deliver}> <img src={slide4} className={styles.animation4}/> <p>2 in 1 gourmet <br /> arrangements</p> </div>

        </div>
    </div>
  )
}

export default DeliveryBanner