import Head from 'next/head'
import Image from 'next/image'
import RadialProgressBar from '../components/radialProgressBar'
import SideMenu from '../components/sideMenu'
import {useContext} from 'react'
import ThemeSwith from '../components/themeSwith'
import styles from '../styles/home.module.scss'
import React from 'react'
import { Context } from '../context/context'
export default function Home() {
  const {mode,setMode} = useContext(Context)
  const setStyler=(mode)=>{
if (mode==true) {
  return {
    container:styles.containerDark,
    aboutMe:styles.aboutMeDark,
  }
}
else if(mode==false){
 
  return {
    container:styles.containerLight,
    aboutMe:styles.aboutMeLight,
      
  }
}
  }
  const ThemeStyle=setStyler(mode)
  return (<>
<div className={ThemeStyle.container}>
<ThemeSwith setMode={setMode} mode={mode}/>
   <div className={styles.rotatedBox}></div>
   <div className={ThemeStyle.aboutMe}>
   <div className={styles.profilePic}>
    <Image src={'/PROFILEIMG.jpg'}layout="fill"objectFit='cover'style={{borderRadius:"30px"}}></Image>
   </div>
    <h1>
    I'M POURIYA CHIBAIE <br/>
    <span>WEB DEVELOPER</span>
    
    </h1>
    <p className={styles.textInHome}>
    I am a computer engineer and front-end developer focused on crafting 
    clean & user‑friendly experiences, I am passionate about building
     excellent software that improves the lives of those around me.</p>
   <button  className={styles.aboutBtn}>MORE ABOUT ME <div className={styles.arrowBtn}>
   <img className={styles.iconArrow} src="/rightArrow.svg" alt="arrow icon" />
   </div>
   </button>
   </div>
   <SideMenu theme={mode} />
</div>
  </>
  )
}
