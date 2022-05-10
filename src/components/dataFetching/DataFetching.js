import React,{useState,useEffect} from 'react'
import { Grid } from '@mui/material';
import axios from 'axios'
import styles from "./datafetching.module.css"
import { GridProfile } from '../gridProfile/GridProfile';
import { Profile } from '../profile/Profile';
export const DataFetching = () => {


const [data, setData] = useState([])
const [staffMember, setStaffMember] = useState(0)
const [show, setShow] = useState(false)
// const [clickedPhoto, setClickedPhoto] = useState('')

    useEffect(() => {
       axios.get('https://youngstartup.io/api/cwebsite/get_speakers_dyn')
        .then(res=>{
            console.log(res)
            console.log(res.data.speakers)
            setData(res.data.speakers)
        })
        .catch(err=>{console.log(err)})
    }
    , [])
     
   

    const displayProfile = (pic,num)=>{
      setShow(true)
      setStaffMember(num)
    } 
    
    const exitProfile = ()=>{
      setShow(false)
    }

  return (
    <div className={styles.frontpage}>
        <Grid container spacing={3} justifyContent="space-evenly">
  

       {data.map((info,index)=>(
         <Grid key={info.id} item xs={6}  md={2.25} justifyContent="start">
            <GridProfile 
            onClick={()=>{displayProfile(info,index)}}
            img={info.speaker_head_shot_to_display}
             name={info.firstname} 
             company={info.company}/>
          </Grid> 
        
       )) }
       </Grid>

       {show? <div className={styles.cover}>
       {data.map((person,i)=>{
         return(  <div> {i === staffMember && <Profile
         key={person.id}
        name={person.firstname}
        company={person.company}
        src={person.speaker_head_shot_to_display}
        bio={person.bio}
        onClick={exitProfile}
        />} 
        </div>)})}
        </div>:<></>}




       </div>
        
        
        
        
        
        
      
    
  
)}
