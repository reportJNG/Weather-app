
'use client';

import styles from './Button.module.css';
import {FiMap} from 'react-icons/fi'
interface buttonprops{
    getlocation:()=>void;
}
export default function Buttons({getlocation}:buttonprops){
    
    
    return(
        <div className={styles.containerbuttons}>
                <button className={styles.mainbtn} onClick={getlocation}>
                    <FiMap/>
                </button>
                <button className={styles.profolio} onClick={()=>window.open('https://remalihamza.vercel.app/','_blank')}>
                    More +
                </button>
        </div>
    )
}