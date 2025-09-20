import React from 'react'
import styles from './Header.module.scss'
import { useState } from 'react'
import LogoHeader from '../../images/icons/LogoHeader.png';
import search from '../../images/icons/search.png';
import { Link, NavLink } from "react-router-dom";
import gruzavik from '../../images/icons/gruzavik.png';
import shop from '../../images/icons/shop.png';
import account from '../../images/icons/account.png';

export const Header = () => {



  
    return (

        <header className={styles.fullheader + " " + "container"}>

            <div className={styles.reclam + " " + "container"}>
                <p>7 DAYS A WEEK | Order by 5 pm For The Next Day Delivery
                    | Delivering within 50 km from Sydney Olympic Park |
                    Free Delivery Over $199 | Free Pick Up Available</p> </div>


            <div className={styles.headerinfo + " " + "container"}>
                      
                    <Link to="/home" className={styles.homedecor}><img src={LogoHeader} className={styles.logoheight}/></Link>  
                      <div className={styles.search}>
                         
                        <input type="search" placeholder='Search...' className={styles.inputsearch} /> 
                         <img src={search} className={styles.searchimg}/>

                      </div>

                       <div className={styles.Subscribe}> <Link className={styles.linkdecor}>Subscrive & Save</Link> </div>

                        <div className={styles.headericons}>
                          
                             <Link><img src={gruzavik}/></Link> 
                             <Link><img src={account}/></Link> 
                             <Link><img src={shop}/></Link> 
                        </div>
                 </div>  


             
               
 <img src="" className={styles.logo} />




           




            <div className={styles.headercategory + " " + "container"}></div>





        </header>
    )

}
