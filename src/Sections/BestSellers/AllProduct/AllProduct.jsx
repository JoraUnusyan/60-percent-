import styles from '../full.module.scss'
import oStyles from "../ObshagBestSellers.module.scss"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from '../../products';
import FlowerCard from '../../../components/FlowerCard/FlowerCard';

const AllProduct = () => {

const maxRandom = Math.floor(Math.random() * (products.length - 8));

 return (
    <div className={oStyles.productcontainer}>
           
     <div className={styles.full}>

        {products.slice(maxRandom, maxRandom + 8).map((productindex, keyGey) => (
        <FlowerCard key={keyGey} productindex={productindex}  />
        ))}




      </div> 
         
        <Link> <div className={styles.button}><button>VIEW ALL</button></div> </Link>

    </div>
  )
}

export default AllProduct