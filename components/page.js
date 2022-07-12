import Nav from './nav'
import styles from '../styles/Home.module.css'
import Header from './header'

export default function Page({children}) {
   return (    
   <body>
        <div className={styles.main}>
     <Header/> 
        {children}  
      </div> 
    </body>
   
        
    )
}