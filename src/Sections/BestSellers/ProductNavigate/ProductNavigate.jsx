import styles from "./ProductNavigate.module.scss"
import oStyles from "../ObshagBestSellers.module.scss"
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AllProduct from "../AllProduct/AllProduct";
import HappyBirthday from "../HappyBirthday/HappyBirthday"
import { CSSTransition } from "react-transition-group";
import "./fade.css";
import Congratulation from "../Congratulation/Congratulation"
import Getwell from "../Getwell/Getwell"
import Anniversary from "../Anniversary/Anniversary"


const ProductNavigate = () => {

    const [active, setActive] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)

    const NewClick = (num) => {
  setActive(num === 1 ? !active : false);
  setActive2(num === 2 ? !active2 : false);
  setActive3(num === 3 ? !active3 : false);
  setActive4(num === 4 ? !active4 : false);
  setActive5(num === 5 ? !active5 : false);
    };

const nodeRef = useRef(null);
const nodeRef2 = useRef(null);
const nodeRef3 = useRef(null);
const nodeRef4 = useRef(null);
const nodeRef5 = useRef(null);


    return (
        <div className={styles.AllProduct + " " + "container"}>

            <div className={styles.textinfo}>
                <h3>OUR BEST SELLERS</h3>
                <p>Select a category or go to the section with a convinient filter by product</p>
            </div>

            <div className={styles.ProductNavigation}>

                <Link><button className={`${styles.button} ${active ? styles.butonactive : styles.butonoff}`} onClick={() => NewClick(1)}>ALL PRODUCTS</button></Link>



                <Link>  <button className={`${styles.button} ${active2 ? styles.butonactive : styles.butonoff}`} onClick={() => NewClick(2)}>HAPPY BIRTHDAY</button></Link>




                <Link> <button className={`${styles.button} ${active3 ? styles.butonactive : styles.butonoff}`} onClick={() => NewClick(3)}>CONGRATULATION</button></Link>



                <Link> <button className={`${styles.button} ${active4 ? styles.butonactive : styles.butonoff}`} onClick={() => NewClick(4)} >ANNIVERSARY</button></Link>




                <Link><button className={`${styles.button} ${active5 ? styles.butonactive : styles.butonoff}`} onClick={() => NewClick(5)}>GET WELL</button></Link>








            </div>
        
        <div className="fade-wrapper">
  <CSSTransition
    in={active}
    timeout={300}
    classNames="fade"
    unmountOnExit
    nodeRef={nodeRef}
  >
    <div ref={nodeRef} className="fade-item">
      <AllProduct />
    </div>
  </CSSTransition>

  <CSSTransition
    in={active2}
    timeout={300}
    classNames="fade"
    unmountOnExit
    nodeRef={nodeRef2}
  >
    <div ref={nodeRef2} className="fade-item">
      <HappyBirthday />
    </div>
  </CSSTransition>

  <CSSTransition
    in={active3}
    timeout={300}
    classNames="fade"
    unmountOnExit
    nodeRef={nodeRef3}
  >
    <div ref={nodeRef3} className="fade-item">
      <Congratulation />
    </div>
  </CSSTransition>

  <CSSTransition
    in={active4}
    timeout={300}
    classNames="fade"
    unmountOnExit
    nodeRef={nodeRef4}
  >
    <div ref={nodeRef4} className="fade-item">
      <Anniversary />
    </div>
  </CSSTransition>

  <CSSTransition
    in={active5}
    timeout={300}
    classNames="fade"
    unmountOnExit
    nodeRef={nodeRef5}
  >
    <div ref={nodeRef5} className="fade-item">
      <Getwell />
    </div>
  </CSSTransition>
</div>

        </div>
    )
}

export default ProductNavigate