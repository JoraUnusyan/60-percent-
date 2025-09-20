import React from 'react'
import styles from './ProductList.module.scss'
import { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import strelka from '../../images/icons/strelka.png';

const ProductList = () => {

  const [shopall, setShopAll] = useState(false);
  const [byoccasion, setByOcassion] = useState(false);
  const [category, setCategory] = useState(false);
  const [price, setPrice] = useState(false);

  return (
    <div className={styles.containerproduct} >

      <div className={styles.list1} onClick={() => setShopAll(!shopall)}>
        <div className={styles.shoplist}><p>SHOP ALL</p>
          <img src={strelka} className={`${styles.strelka} ${shopall ? styles.rotate : ""}`} /></div>

        {shopall ? (<div className={styles.menu}>
          <Link to="/new-arrivals" className={styles.linkdecor}>Пока ничего</Link>
          <Link to="/new-arrival2s" className={styles.linkdecor}>Точно ничего</Link>
        </div>) : false}

      </div>



      <div className={styles.list1} onClick={() => setByOcassion(!byoccasion)}>
        <div className={styles.shoplist}>
          <p>BY OCCASION</p>
          <img src={strelka} className={`${styles.strelka} ${byoccasion ? styles.rotate : ""}`} />
        </div>
        {
          byoccasion ? (<div className={styles.menu}>
            <Link to="/new-arrivals" className={styles.linkdecor}>Пока ничего</Link>
            <Link to="/new-arrival2s" className={styles.linkdecor}>Нет ничего</Link> </div>) : false
        }
      </div>


      <div className={styles.list1} onClick={() => setCategory(!category)}>
        <div className={styles.shoplist}>
          <p>BY CATEGORY</p>
          <img src={strelka} className={`${styles.strelka} ${category ? styles.rotate : ""}`} />
        </div>
        {
          category ? (<div className={styles.menu}>
            <Link to="/new-arrivalsads" className={styles.linkdecor}>Тут пусто</Link>
            <Link to="/new-arrival2sasda" className={styles.linkdecor}>Тут тоже</Link> </div>) : false
        }
      </div>





      <div className={styles.list1} onClick={() => setPrice(!price)}>
        <div className={styles.shoplist}>
          <p>BY PRICE</p>
          <img src={strelka} className={`${styles.strelka} ${price ? styles.rotate : ""}`} />
        </div>
        {
          price ? (<div className={styles.menu}>
            <Link to="/new-arrivalsads" className={styles.linkdecor}>Нету</Link>
            <Link to="/new-arrival2sasda" className={styles.linkdecor}>НЕТ!!!</Link> </div>) : false
        }
      </div>


      <div className={styles.list1}><Link className={styles.linkdecor}>SPECIAL</Link></div>
      <div className={styles.list1}><Link className={styles.linkdecor}>FAQ</Link></div>
      <div className={styles.list1}><Link className={styles.linkdecor}>CONTACS</Link></div>



    </div>
  )
}

export default ProductList