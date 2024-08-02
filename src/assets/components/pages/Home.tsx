import styles from '../../css/pages/Home.module.css';
import React from 'react';
import { FaMoon } from "react-icons/fa";
import SearchInput from '../form_elements/SeachInput';
import Profile from '../form_elements/Profile';
import HomeButton from '../form_elements/HomeButton';
import Pagination from '../form_elements/Pagination';
import Province from '../form_elements/Province';
import HomeCard from '../form_elements/HomeCard';
// import Logo from '../../../../public/Nova pasta/logo.png';

function Home(){
    return (
        <div className={styles.home_container}>
           <div className={styles.header}>
                <div>
                   {/* <img src={Logo} alt="Logotipo pharmagest" /> */}
                </div>
                <div> <SearchInput w='' h='' /> <Profile w='' h='' image='' /></div>
                <div className={styles.moon_icon}> <FaMoon /> </div>
           </div>
           <div className={styles.main}>
                <div>
                  <HomeButton showName={true} to='/Login' icon='BiLogIn' title='Entrar' />
                  <HomeButton showName={true} to='/Login' icon='IoCreateSharp' title='Criar conta' />
                  <HomeButton showName={true} to='/Login' icon='TbLogout2' title='Sair' />
                </div>
                <div>
                  <HomeCard w='' h='' image='' to='' name='' />
                  <HomeCard w='' h='' image='' to='' name='' />
                  <HomeCard w='' h='' image='' to='' name='' />
                  <HomeCard w='' h='' image='' to='' name='' />
                  <HomeCard w='' h='' image='' to='' name='' />
                  <HomeCard w='' h='' image='' to='' name='' />
                  <HomeCard w='' h='' image='' to='' name='' />
                </div>
                <div>
                    <Province />
                </div>
           </div>
           <div className={styles.footer}>
               <div>
                  <HomeButton to='/Login' icon='CgMicrosoft' title='' showName={false} />
               </div>
               <div>
                  <Pagination pages={0} perPage={0} next={0}  prev={0} totalCurrentResults={0} currentPage={8} totalItems={88}/>
               </div>
           </div>
        </div>
    )
}

export default Home