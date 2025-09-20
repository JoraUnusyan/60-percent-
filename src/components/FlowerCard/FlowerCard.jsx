import React from 'react'
import styles from './FlowerCard.module.scss'
import { Link } from 'react-router-dom'
const FlowerCard = ({productindex}) => {
  return (
    <Link>  <div className={styles.product}>
            <img src={productindex.imageproduct} className={styles.razmer} />
            <div className={styles.productinfo}>
              <div className={styles.producttext}>
                <h5>{productindex.productname}</h5>
                <p>{productindex.productprice}</p>
              </div>
               <div className={styles.categoryinfo}>  <img src={productindex.productproverka ? productindex.imageiconON : productindex.imageiconOFF} className={styles.imagew} />
                                 <p>{productindex.category}</p>
                          </div>

            </div>

          </div></Link>
  )
}

export default FlowerCard