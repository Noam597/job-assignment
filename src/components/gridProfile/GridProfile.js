import React from 'react'
import styles from "./gridProfile.module.css"
export const GridProfile = ({img,name,company,onClick}) => {
  return (<>
  
    <div className={styles.profile} onClick={onClick}>
        <img src={img} alt="profile picture"/>
        <p className={styles.name}>{name}</p>
        <p  className={styles.company}>{company}</p>
    </div>
    </>
  )
}
