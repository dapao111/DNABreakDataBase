import Link from 'next/link';
import NavStyle from '../styles/Navstyle';
import styles from '../styles/Home.module.css'

export default function Nav() {
    return <NavStyle>        
            <Link href ="/AboutUs">Aboutus</Link> 
            <Link href ="/Download">Download</Link> 
            <Link href ="/geneBrowser">GeneBrowser</Link> 
            <Link href ="/Resource">Resource</Link> 
            <Link href ="/">Home</Link> 
        </NavStyle>      
}
