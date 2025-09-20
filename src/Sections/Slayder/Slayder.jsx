import React, { useState, useEffect } from "react";
import slide1 from "../../images/slides/slide1.png";
import slide2 from "../../images/slides/slide2.png";
import slide3 from "../../images/slides/slide3.png";
import styles from "./Slayder.module.scss"

const slides = [
  {
    id: 1,
    image: slide1,
    Name: "GOURMET GIFTS",
    Surname: "FOR ANY OCCASION",
  },
  {
    id: 2,
    image: slide2,
    Name: "FRESH FLOWERS",
    Surname: "DELIVERED DAILY",
  },
  {
    id: 3,
    image: slide3,
    Name: "SPECIAL OFFERS",
    Surname: "LIMITED TIME ONLY",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const time = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000)

    return () => clearInterval(time);
  }, [])


  return (
    <div className={styles.megasuperslider}>
      {slides.map((slide, i) => (
        <div className={`${styles.slide} ${i === index ? styles.active : ""}`} key={slide.id} style={{ backgroundImage: `url(${slide.image})` }}>

          <div className={styles.centrtext}>
            <h2>{slide.Name}</h2>
            <p>{slide.Surname}</p>
            <button className={styles.buttonshop}>SHOP</button>
          </div>
        </div>))}
      <div className={styles.krug}>
        {slides.map((_, i) => (
          <span key={i} className={`${styles.krugoff} ${i === index ? styles.krugon : ""}`}onClick={() => setIndex(i)}></span>
        ))}
      </div>
    </div>
  );
}