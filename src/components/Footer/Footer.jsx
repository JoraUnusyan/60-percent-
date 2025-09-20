import React from 'react'
import styles from './Footer.module.scss'
import Apple from '../../images/icons/Apple.png'
import Mastercard from '../../images/icons/Mastercard.png'
import Visa from '../../images/icons/Visa.png'
import PayPal from '../../images/icons/PayPal.png'
import instaicon from "../../images/icons/instaicon.png"
import { Link } from 'react-router-dom'
import pochta from '../../images/icons/pochta.png'
import phon from '../../images/icons/phone.png'

const Footer = () => {

  return (
    <div className={styles.fullfooter}>
      <div className={styles.footerspace}>
        <div className={styles.serviz}>
          <h6>SERVICES</h6>
          <Link className={styles.info} to="/Delivery">Delivery & Pick Up</Link>
          <Link className={styles.info} to="/FAQ">FAQ</Link>
          <Link className={styles.info} to="/CarryFlowers">How to carry the flowers</Link>
          <Link className={styles.info} to="/Corporate">Corporate gifts</Link>
          <Link className={styles.info} to="/Policy">Privacy Policy</Link>
          <Link className={styles.info} to="/Cancelation">Cancelation & Refund Policy</Link>
          <Link className={styles.info} to="/TermsService">Terms Of Service</Link>
        </div>

        <div className={styles.contact}>
          <h6>CONTACT US</h6>
          <a href="https://www.instagram.com/"><img src={instaicon} className={styles.hovers} />@strawbarbie_syd</a>
          <p onClick={() => navigator.clipboard.writeText("strawbarbie.syd@gmail.com")} className={styles.pochta} > <img src={pochta} />strawbarbie.syd@gmail.com </p>
          <p onClick={() => navigator.clipboard.writeText("+61423051336")} className={styles.phon} > <img src={phon} /> +61423051336 </p>
          <p className={styles.pikap}>
            Pick Up Address: <br />
            1 C Betty Cuthbert Avenue, <br />
            Sydney Olympic Park, 2127</p>
            <p className={styles.stravbarbie}>©2022 StrawBarbie</p>
        </div>


        <div className={styles.pay}>
          <div className={styles.payicon}><img src={Apple}/></div>
          <div className={styles.payicon}><img src={Mastercard}/></div>
          <div className={styles.payicon}><img src={Visa}/></div>
          <div className={styles.payicon}><img src={PayPal}/></div>
        </div>
      </div>
    </div>
  )
}

export default Footer