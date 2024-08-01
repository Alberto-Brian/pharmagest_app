import styles from '../../css/pages/Home2.module.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { PiTidalLogoFill } from "react-icons/pi";
import { CgMicrosoft } from "react-icons/cg";
import SearchInput from '../form_elements/SeachInput';
import Profile from '../form_elements/Profile';
import LoginButton from '../form_elements/LoginButton';
import Pagination from '../form_elements/Pagination';
import ProvinceList from '../form_elements/ProvinceList';
import HomeCard from '../form_elements/HomeCard';
import Menu from '../pages/Menu';
import News from '../utils/News';

//IMAGES
import ImageFarmacy from '../../../../public/imageFarmacy.jpg';
import FarmaciaPopular from '../../../../public/Farmácia Popular.png';
import FarmaciaSaoJoao from '../../../../public/Farmácias São João.jfif';
import HappyFarmacy from '../../../../public/Happy Pharmacy,600x600.jpg';
import ImagesFarmcacy from '../../../../public/imageFarmacy.jpg';
import ImagesFif from '../../../../public/images.jfif';
import Imagespng from '../../../../public/images.png';
import Inquerito from '../../../../public/inquerito.jfif';
import MyPharmacy from '../../../../public/my pharmacy.jfif';
import Pharmacist from '../../../../public/pharmacist.png';
import Publicidade from '../../../../public/publicidade.jfif';
import Novassol from '../../../../public/Novassol.png';
import { BiMenu } from 'react-icons/bi';

function Home2(){
  const [menu_show, setMenu_show] = useState(false);
  let cardWidth = '22%';
  let mainWidth = '100%';

  {!menu_show && (cardWidth = '221.6px')}
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
                <div> <ProvinceList h={provinceListHeight}/> </div>
                <div > 
                  <div>
                    <LoginButton h={loginButtonHeight} to='#' title='Entrar' isLogin={true} />  
                    <LoginButton h={loginButtonHeight} to='#' title='Inscrever-se' isLogin={false} />  
                  </div>

                  <div>
                    <FaMoon className={styles.moon_icon} /> 
                    <Profile w={profileWidth} h={profileHeight}/>
                  </div>
                </div>
           </div>
           <div className={styles.main}>
               <Menu show={menu_show}/>
                <div style={{width: mainWidth}}>
                  <HomeCard w={cardWidth} h={cardHeight} image={ImageFarmacy} name='Farmácia Esmeraldakklll' />
                  <HomeCard w={cardWidth} h={cardHeight} image={FarmaciaPopular} name='Farmácia Popular' />
                  <HomeCard w={cardWidth} h={cardHeight} image={FarmaciaSaoJoao} name='Medipharma'/>
                  <HomeCard w={cardWidth} h={cardHeight} image={HappyFarmacy} name='Testando'/>
                  <HomeCard name='IPharmcy' w={cardWidth} h={cardHeight} image={ImagesFarmcacy}/>
                  <HomeCard name='Default Pharmacy' w={cardWidth} h={cardHeight} image={Pharmacist}/>
                  <HomeCard name='Public Pharmacy' w={cardWidth} h={cardHeight} image={Publicidade}/>
                  <HomeCard name='Farmácia Novassol' w={cardWidth} h={cardHeight} image={Novassol}/>
                  {/* <HomeCard w='22%' h='45%' image={Imagespng}/>
                  <HomeCard w='22%' h='45%' image={ImagesFif}/>
                  <HomeCard w='22%' h='45%' image={MyPharmacy}/>
                  <HomeCard w='22%' h='45%' image={Inquerito}/> */}
                </div>
                {!menu_show && <News />}
            
           </div>
           <div className={styles.footer}>
               <div>
                 <Link className={styles.button_card_position}>
                    <CgMicrosoft />
                 </Link>

                 <Link className={styles.button_card_position}>
                    <CgMicrosoft />
                 </Link>
               </div>
               <div>
                  <Pagination currentPage={45} totalItems={100}/>
               </div>
           </div>

          </div>
        </div>
    )
}

export default Home2