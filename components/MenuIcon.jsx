import React from 'react'
import styles from '../styles/MenuIcon.module.css'
import {useState} from 'react'

const MenuIcon = () => {
  const [transform, setTransform] = useState(false)
  return (
    <div className={styles.Icon} onClick={() => setTransform(!transform)}>
        <div className={`${styles.one} ${transform ? styles.oneTransform : styles.oneNormal}`}></div>
        <div className={`${styles.two} ${transform ? styles.twoTransform : styles.twoNormal}`}></div>
        <div className={`${styles.three} ${transform ? styles.threeTransform : styles.threeNormal}`}></div>
    </div>
  )
}

export default MenuIcon