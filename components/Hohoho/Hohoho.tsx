import React from 'react'

const styles = require('./Hohoho.module.css');

const Hohoho = ({small}) => {
    return <>
        <div className={`${styles.containerHohoho} ${small && styles.containerHohoho_small}`}>
            <ul>
                <li className={styles.hohoho}>
                    <h2></h2><h2></h2><h2></h2>
                </li>
                <li className={styles.santaclaus}>
                    <div className={styles.chapeu}>
                        <div className={styles.cone2}></div>
                        <div className={styles.cone1}></div>
                    </div>
                    <div className={styles.face}>
                        <div className={styles.eyes}></div>
                        <div className={styles.nariz}></div>
                        <div className={styles.barba}>
                            <div className={styles.boca}></div>
                        </div>
                    </div>
                    <div className={styles.orelhas}></div>
                </li>
                <li className={styles.hohoho}>
                    <h2></h2><h2></h2><h2></h2>
                </li>
            </ul>
        </div>
    </>
}

export default Hohoho
