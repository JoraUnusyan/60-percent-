import React from 'react'
import styles from './ClientsComment.module.scss'
import { useState, useEffect } from 'react'
import verx from '../../images/icons/verx.png'
import vniz from '../../images/icons/vniz.png'
import CommentList from './CommentList'

const ClientsComment = () => {

  const [timecomment, setTimeComment] = useState(0)

  useEffect(() => {
    const time = setInterval(() => {
      setTimeComment((timer) => (timer + 1) % CommentList.length)
    }, 4000)

    return () => clearInterval(time);
  }, [])
 const prevIndex = (timecomment - 1 + CommentList.length) % CommentList.length
  const nextIndex = (timecomment + 1) % CommentList.length

  return (

    <div className={`${styles.fullage} container`}>
      <div className={styles.pagespace}>
        <div className={styles.info}>
          <h4>OUR HAPPY CLIENTS</h4>
          <p>What they say about us</p>
        </div>

        <div className={styles.slidecontainer}>
          {CommentList.map((inform, i) => {
            let position = styles.standart;

            if (i === timecomment) {
              position = styles.active;
            }
            else if (i === (timecomment - 1 + CommentList.length) % CommentList.length) {
              position = styles.commentleft;
            }
            else if (i === (timecomment + 1) % CommentList.length) {
              position = styles.commentright;
            }

            return (
              <div className={`${styles.fullslide} ${position}`} onClick={() => setTimeComment(i)} key={i}>
                <div className={styles.infopole} >
                  <img src={vniz} className={styles.verx} />
                  <img src={verx} className={styles.vniz} />
                  <h3>{inform.name}</h3>
                  <p>{inform.comment}</p>
                  <div className={position === styles.active ? styles.divyonok : styles.notdivyonok}></div>
                </div>
              </div>
            )

            


          })}


        </div>
    
 <div className={styles.navigate}>

  <button
    className={styles.arrow}
    onClick={() =>
      setTimeComment((timecomment - 1 + CommentList.length) % CommentList.length)
    }
  >
    ‹
  </button>


  <div className={styles.dots}>
    {[prevIndex, timecomment, nextIndex].map((i, index) => {
      const dotIndex = timecomment % 3
      const isActive = index === dotIndex

      return (
        <span
          key={i}
          className={`${styles.krugoff} ${isActive ? styles.krugon : ''}`}
          onClick={() => setTimeComment(i)}
        ></span>
      )
    })}
  </div>


  <button
    className={styles.arrow}
    onClick={() => setTimeComment((timecomment + 1) % CommentList.length)}
  >
    ›
  </button>
</div>

    

      </div>





    </div>
  )
}

export default ClientsComment