import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Nav from './nav'
const HeaderStyles = styled.header`
.bar{
    border-bottom:5 px solid black;
    display:grid;
    grid-template-columns:auto 1fr;
    justify-content:space-between;
    align-items:center;
}

.sub-bar{

    border-bottom:1px solid grey;
    align-items: center;
}
`
export default function Header() {
    return (            
        <div className={styles.grid}>
            <div className='bar'>
            <p className={styles.p1}>
                DNA Break Database
            </p> 
            </div>
            <div className={styles.footer}>
                <select>
                    <option>Data Type</option>
                    <option>DNABreak</option>
                    <option>second</option>
                    <option>third</option>
                </select>
            <input placeholder="DNA break sites" type="text" size="200"></input>
            <button>search</button>
            </div>
                <Nav/>            
        </div>
    )
}