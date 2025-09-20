import styles from '../full.module.scss'
import oStyles from "../ObshagBestSellers.module.scss"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from '../../products';
import FlowerCard from '../../../components/FlowerCard/FlowerCard';


const HappyBirthday = () => {

const maxRandom = Math.floor(Math.random() * (products.length - 8));
  


  return (
    <div className={oStyles.productcontainer}>
           
     <div className={styles.full}>

            {products.filter((product) => product.category === "HAPPYBIRTHDAY").sort(() => 0.5 - Math.random()).slice(0, 8).map((productindex, keyGey) => (
        <FlowerCard key={keyGey} productindex={productindex}  />
        ))}

       



      </div> 
         
        <Link> <div className={styles.button}><button>VIEW ALL</button></div> </Link>

    </div>
  )
}

export default HappyBirthday