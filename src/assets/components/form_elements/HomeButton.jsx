import styles from '../../css/form_elements/HomeButton.module.css'
import { TbLogout2 } from "react-icons/tb";
import { IoCreateSharp } from "react-icons/io5";
import { BiLogIn } from "react-icons/bi";
import { CgMicrosoft } from "react-icons/cg";
import { RiHomeHeartLine } from "react-icons/ri";
import { BiSolidHomeHeart } from "react-icons/bi";
import { GiMedicalPackAlt } from "react-icons/gi";
import { LuHistory } from "react-icons/lu";
import { FaHouseMedical } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { IoLogoGoogle } from "react-icons/io";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { MdOutlineKeyboard } from "react-icons/md";
import { GoPerson } from "react-icons/go";

import { Link } from 'react-router-dom';

function HomeButton ({to, icon, title, showName, w, h}){


    const setIcon = (icon) => {
        switch(icon){
            case 'LuSunMoon': 
            return <LuSunMoon className={styles.icon} style={{width: w, height: h}}/>;
           
            case 'GoPerson': 
            return <GoPerson className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'TbLogout2': 
            return <TbLogout2 className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'IoCreateSharp': 
            return <IoCreateSharp className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'IoNewspaper': 
            return <IoNewspaper className={styles.icon} style={{width: w, height: h}}/>;
           
            case 'IoNewspaperOutline': 
            return <IoNewspaperOutline className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'IoSettings': 
            return <IoSettings className={styles.icon} style={{width: w, height: h}}/>;
           
            case 'MdOutlineSettings': 
            return <MdOutlineSettings className={styles.icon} style={{width: w, height: h}}/>;
          
            case 'MdOutlineKeyboard': 
            return <MdOutlineKeyboard className={styles.icon} style={{width: w, height: h}}/>;
           
            case 'FaHouseMedical': 
            return <FaHouseMedical className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'IoMdHelpCircle': 
            return <IoMdHelpCircle className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'IoMoonOutline': 
            return <IoMoonOutline  className={styles.icon} style={{width: w, height: h}}/>;
           
            case 'BiWorld': 
            return <BiWorld className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'IoMdHelpCircleOutline': 
            return <IoMdHelpCircleOutline className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'BiLogIn':
            return <BiLogIn className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'MdOutlineFeedback':
            return <MdOutlineFeedback className={styles.icon} style={{width: w, height: h}}/>;
           
            case 'BiSolidHomeHeart':
            return <BiSolidHomeHeart className={styles.icon} style={{width: w, height: h}}/>;
            
            case 'CgMicrosoft':
            return <CgMicrosoft className={styles.icon} style={{width: w, height: h}}/>; 

            case 'RiHomeHeartLine':
            return <RiHomeHeartLine className={styles.icon} style={{width: w, height: h}}/>;
           
            case 'LuHistory':
            return <LuHistory className={styles.icon} style={{width: w, height: h}}/>;
           
            case 'GiMedicalPackAlt':
            return <GiMedicalPackAlt className={styles.icon} style={{width: w, height: h}}/>;
           
            case 'IoLogoGoogle':
            return <IoLogoGoogle className={styles.icon} style={{width: w, height: h}}/>;

            case 'MdOutlineSwitchAccount ':
            return <MdOutlineSwitchAccount  className={styles.icon} style={{width: w, height: h}}/>;
        }
    }

    return (
        <section className={styles.main}>
            <Link to={to}>
                {setIcon(icon)}
                 {showName && title} 
            </Link>
        </section>
    )
}

export default HomeButton