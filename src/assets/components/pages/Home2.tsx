import styles from '../../css/pages/Home2.module.css';
import React, { useEffect, useState } from 'react';

//ICONS
import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
import { PiTidalLogoFill } from "react-icons/pi";
import { CgMicrosoft } from "react-icons/cg";
import { BiMenu } from 'react-icons/bi';

//COMPONENTS
import SearchInput from '../form_elements/SeachInput';
import Profile from '../form_elements/Profile';
import LoginButton from '../form_elements/LoginButton';
import Pagination from '../form_elements/Pagination';
import ProvinceList from '../form_elements/ProvinceList';
import HomeCard from '../form_elements/HomeCard';
import Menu from '../pages/Menu';
import News from '../utils/News';
import Truncate from '../utils/Truncate';

//IMAGES
import Novassol from '../../../../public/Novassol.png';
import ImageFarmacy from '../../../../public/imageFarmacy.jpg';
import FarmaciaPopular from '../../../../public/Farmácia Popular.png';
import HappyFarmacy from '../../../../public/Happy Pharmacy,600x600.jpg';
import ImagesFarmcacy from '../../../../public/imageFarmacy.jpg';
import Imagespng from '../../../../public/images.png';
import Pharmacist from '../../../../public/pharmacist.png';
import FarmaciaSaoJoao from '../../../../public/Farmácias São João.jfif';
import ImagesFif from '../../../../public/images.jfif';
import Inquerito from '../../../../public/inquerito.jfif';
import MyPharmacy from '../../../../public/my pharmacy.jfif';
import Publicidade from '../../../../public/publicidade.jfif';


function Home2(){
  const [menu_show, setMenu_show] = useState(false);
  let cardWidth = '22%';
  let mainWidth = '100%';

    //221.6px
  {!menu_show && (cardWidth = '215.6px')}
    //74%
  {!menu_show && (mainWidth = '74%')}
  const cardHeight = '42%';

  const searchWidth = '95%'
  const searchHeight = '75%'

  const provinceListWidth = '40%';
  const provinceListHeight = '53%';

  const loginButtonWidth = '50%';
  const loginButtonHeight = '57%';

  const profileWidth = '22%';
  const profileHeight = '43%';


  useEffect(()=> {
    const menu_button_ref = document.querySelector('#menu_button_ref');
    
    const handleClick = () => {
       setMenu_show(prevState => !prevState);
    }
      if(menu_button_ref) menu_button_ref.addEventListener('click', handleClick);
      return () =>{
        if(menu_button_ref) menu_button_ref.removeEventListener('click', handleClick);
      } 

    }, [])

  console.log(menu_show);
    return (
        <div className={styles.main}>
          <div className={styles.home_container}>
           <div className={styles.header}>
            <div className={styles.logo_box}>
              <div className={styles.button}> 
                 <HiOutlineMenu id='menu_button_ref' className={styles.menu_icon}/>
              </div>

              <Link to='#'>
                <div className={styles.logo_name_box}>
                  <PiTidalLogoFill className={styles.logo} />
                  <h4 className={styles.name}> Pharmagest </h4>
                </div>
              </Link>
            </div>
                <div> <SearchInput w={searchWidth} h={searchHeight}/> </div>
                <div> <ProvinceList w='' h={provinceListHeight}/> </div>
                <div > 
                  <div>
                    <LoginButton w='' h={loginButtonHeight} to='#' title='Entrar' isLogin={true} />  
                    <LoginButton w='' h={loginButtonHeight} to='#' title='Inscrever-se' isLogin={false} />  
                  </div>

                  <div>
                    <FaMoon className={styles.moon_icon} /> 
                     <article className={styles.notification}>
                      <span className={styles.notification_number}> <Truncate text='11' limit={1} symbol='+'/> </span>
                      <IoMdNotifications className={styles.notification_icon} />
                     </article>
                    <Profile image='' w={profileWidth} h={profileHeight}/>
                  </div>
                </div>
           </div>
           <div className={styles.main}>
               <Menu show={menu_show}/>
                <div style={{width: mainWidth}}>
                  <HomeCard to='' w={cardWidth} h={cardHeight} image={ImageFarmacy} name='Farmácia Esmeraldakklll' />
                  <HomeCard to='' w={cardWidth} h={cardHeight} image={FarmaciaPopular} name='Farmácia Popular' />
                  {/* <HomeCard to='' w={cardWidth} h={cardHeight} image={FarmaciaSaoJoao} name='Medipharma'/> */}
                  <HomeCard to='' w={cardWidth} h={cardHeight} name='My Pharmacy' image={ImagesFif}/>
                  <HomeCard to='' w={cardWidth} h={cardHeight} image={HappyFarmacy} name='Testando'/>
                  <HomeCard to=''  w={cardWidth} h={cardHeight} image={MyPharmacy} name=''/> 
                  <HomeCard to='' name='Default Pharmacy' w={cardWidth} h={cardHeight} image={Pharmacist}/>
                  <HomeCard to='' name='Public Pharmacy' w={cardWidth} h={cardHeight} image={Publicidade}/>
                  <HomeCard to='' name='Farmácia Novassol' w={cardWidth} h={cardHeight} image={Novassol}/>
                  {/* 
                  <HomeCard to='' name='IPharmcy' w={cardWidth} h={cardHeight} image={ImagesFarmcacy}/>
                  <HomeCard to='' w='22%' h='45%' image={Imagespng}/>
                  <HomeCard to='' w='22%' h='45%' image={Inquerito} name = 'Inquerito'/>
                  */}
                </div>
                {!menu_show && <News />}
            
           </div>
           <div className={styles.footer}>
               <div>
                 <Link to='' className={styles.button_card_position}>
                    <CgMicrosoft />
                 </Link>

                 <Link to='' className={styles.button_card_position}>
                    <CgMicrosoft />
                 </Link>
               </div>
               <div>
                  <Pagination currentPage={45} totalItems={100} pages={0} perPage={0} next={0}  prev={0} totalCurrentResults={0}/>
               </div>
           </div>

          </div>
        </div>
    )
}

export default Home2