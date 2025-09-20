import React from 'react'
import styles from './Instainfo.module.scss'
import insta from '../../images/icons/instaicon.png'
import products from '../products.js'

  const divClasses = [
    styles.div1,
    styles.div2,
    styles.div3,
    styles.div4,
    styles.div5,
  ];

const Instainfo = () => {

    const maxRandom = Math.floor(Math.random() * (products.length - 8));
    
    return (
        <div className={styles.fullinsta}>

            <div className={styles.instatext}>
                <h4>Follow us on Instagram</h4>
                <p>To be the first to know about special deals, <br />
                    new and spare products, discount codes and more</p>
                    <a href="https://www.instagram.com/">@strawbarbie_syd<img src={insta}/></a>
            </div>


            <div className={styles.imagefull}>
                {products.slice(maxRandom, maxRandom + 5).map((image, i) => (
                  
                    <div className={divClasses[i]}><img src={image.imageproduct} key={i}/></div>
                
                ))}
            </div>

          
          


        </div>
    )
}

export default Instainfo