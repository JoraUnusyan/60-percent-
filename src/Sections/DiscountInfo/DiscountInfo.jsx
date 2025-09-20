import React, { useState } from 'react';
import styles from './DiscountInfo.module.scss';
import backgroundklubnik from '../../images/background/backgroundklubnik.png';

const DiscountInfo = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
     
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      console.log('Email отправлен:', email);
      setEmail(''); 
    } catch (error) {
      console.error('Ошибка при отправке:', error);
    }
  };

  return (
    <div
      className={styles.discountfull}
      style={{ backgroundImage: `url(${backgroundklubnik})`, backgroundRepeat: 'no-repeat' }}
    >
      <div className={styles.discountcontainer}>
        <h6>GET DISCOUNT INFO</h6>
        <p>
          Subscribe discount newsletter for get notification <br />
          about new information discount, etc.
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputfull}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {email && (
              <button
                type="button"
                className={styles.deletebutton}
                onClick={() => setEmail('')}
              >
                ✕
              </button>
            )}
          </div>

          <div className={styles.buttonattack}>
            <button type="submit" className={styles.subsc}>
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DiscountInfo;