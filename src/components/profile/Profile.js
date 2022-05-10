import { Button, Typography } from '@mui/material'
import React from 'react'
import styles from "./profile.module.css"

export const Profile = ({src,onClick,name,company,bio}) => {

   

    
  return (
   
           <div className={styles.profile} >
                <Typography variant='h4'>{name}</Typography>
                <Typography variant='h4'>{company}</Typography>
                  <img  src={src} alt="profile picture" />
                  <p>{bio}</p>
                  <Button variant='contained'
                  style={{
                      backgroundColor:"grey",
                      float:"right",
                      color:"black",
                      borderTopLeftRadius:" 10px 45%",
                      borderBottomLeftRadius:" 10px 45%",
                      borderTopRightRadius:" 10px 45%",
                      borderBottomRightRadius: "10px 45%",
                  }}
                  onClick={onClick}>close</Button>
            </div>
    
    
  )
}
