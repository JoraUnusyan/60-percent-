import React from 'react'
import styles from '../AboutUs/AboutUs.module.scss'
import aboutdecorate from '../../images/decorate/AboutDecorate.png'
import fonkvadrat from '../../images/decorate/fonkvadrat.png'
import women from '../../images/decorate/women.png'

const AboutUs = () => {
    return (
        <div className={`${styles.fullabout} ${styles.aboutcontainer}`}>

            <div className={styles.aboutdecoration}>

                <div className={styles.kvadrat}><img src={fonkvadrat} /></div>
                <div className={styles.decor}> <img src={aboutdecorate} /></div>
                 <div className={styles.decor2}> <img src={aboutdecorate} /></div>
                      <div className={styles.womendecor}><img src={women} /></div>
          

            </div>

            <div className={styles.aboutinfo}>
                <h4>ABOUT US</h4>
                <p>We are not the only sellers of chocolate dipped <br />strawberries and flowers in Sydney,
                    but we are <br /> probably the only ones who combine the Finest <br /> Belgian Chocolate, Strawberries with Fresh Cut <br /> Flowers 
                    to bring happiness to you and your loved ones. <br /> 
                    <br />
                    We will never be below your expectations and will
                    do our best to stay a part of your memories.
                </p>
            </div>

        </div>
    )
}

export default AboutUs