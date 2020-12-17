import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SvgComponent from '../components/Add'
import {TimelineProp} from '../components/icons'

export default function Home() {
  return (
    <div className= {styles.container}>
    <SvgComponent />
    <TimelineProp/>
    </div>
  )   
 }
   
 