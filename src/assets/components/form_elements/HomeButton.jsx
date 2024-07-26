import styles from '../../css/form_elements/HomeButton.module.css'
import { TbLogout2 } from "react-icons/tb";
import { IoCreateSharp } from "react-icons/io5";
import { BiLogIn } from "react-icons/bi";
import { CgMicrosoft } from "react-icons/cg";

import { Link } from 'react-router-dom';

function HomeButton ({to, icon, title}){


    const setIcon = (icon) => {
        switch(icon){
            case 'TbLogout2': 
            return <TbLogout2 className={styles.icon}/>;
            
            case 'IoCreateSharp': 
            return <IoCreateSharp className={styles.icon}/>;
            
            case 'BiLogIn':
            return <BiLogIn className={styles.icon}/>;
            
            case 'CgMicrosoft':
            return <CgMicrosoft className={styles.icon}/>; 
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