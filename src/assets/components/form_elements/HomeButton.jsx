import styles from '../../css/form_elements/HomeButton.module.css'
import { TbLogout2 } from "react-icons/tb";
import { IoCreateSharp } from "react-icons/io5";
import { BiLogIn } from "react-icons/bi";
import { CgMicrosoft } from "react-icons/cg";
import { TiHome } from "react-icons/ti"
import { BiSolidHomeHeart } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import { FaHouseMedical } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";

import { Link } from 'react-router-dom';

function HomeButton ({to, icon, title, w, h}){


    const setIcon = (icon) => {
        switch(icon){
            case 'TbLogout2': 
            return <TbLogout2 className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'IoCreateSharp': 
            return <IoCreateSharp className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'IoNewspaper': 
            return <IoNewspaper className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'IoSettings': 
            return <IoSettings className={styles.icon} style={{width: w, height: h}}/>;
           
            case 'FaHouseMedical': 
            return <FaHouseMedical className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'IoMdHelpCircle': 
            return <IoMdHelpCircle className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'BiLogIn':
            return <BiLogIn className={styles.icon} style={{width: w, height: h}}/>;
           
            case 'MdOutlineFeedback':
            return <MdOutlineFeedback className={styles.icon} style={{width: w, height: h}}/>;
           
            case 'BiSolidHomeHeart':
            return <BiSolidHomeHeart className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'CgMicrosoft':
            return <CgMicrosoft className={styles.icon} style={{width: w, height: h}}/>; 

            case 'TiHome':
            return <TiHome className={styles.icon} style={{width: w, height: h}}/>;
           
            case 'LuHistory':
            return <LuHistory className={styles.icon} style={{width: w, height: h}}/>;
        }
    }

    return (
        <section className={styles.main}>
            <Link to={to}>
                {setIcon(icon)}
                 {title} 
            </Link>
        </section>
    )
}

export default HomeButton