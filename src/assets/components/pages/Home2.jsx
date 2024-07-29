import styles from '../../css/pages/Home2.module.css';
import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { PiTidalLogoFill } from "react-icons/pi";
import { CgMicrosoft } from "react-icons/cg";
import SearchInput from '../form_elements/SeachInput';
import Profile from '../form_elements/Profile';
import HomeButton from '../form_elements/HomeButton';
import LoginButton from '../form_elements/LoginButton';
import Pagination from '../form_elements/Pagination';
import ProvinceList from '../form_elements/ProvinceList';
import HomeCard from '../form_elements/HomeCard';
import Subscription from '../form_elements/Subscription';

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

function Home2(){
  // 21 - 42
  const cardWidth = '22%';
  const cardHeight = '42%';
    return (
        <div className={styles.main}>
          <section className={styles.menu}> 
            <div className={styles.logo_box}>
              <button> 
                 <HiOutlineMenu className={styles.menu_icon}/>
              </button>

              <Link to='#'>
                <div className={styles.logo_name_box}>
                  <PiTidalLogoFill className={styles.logo} />
                  <h4 className={styles.name}> Pharmagest </h4>
                </div>
              </Link>
            </div>
            <div className={styles.menu_box}>
                <HomeButton to='' icon='RiHomeHeartLine' title='Casa'/>
                <HomeButton to='' icon='LuHistory' title='Histórico'/>
                
                <hr className={styles.hr}/>

                <HomeButton to='' icon='GiMedicalPackAlt' title='A sua Farmácia'/>
                <HomeButton to='' icon='IoNewspaperOutline' title='Notícias'/>
                
                <hr className={styles.hr}/>

                <HomeButton to='' icon='IoMdHelpCircleOutline' title='Ajuda'/>
                <HomeButton to='' icon='MdOutlineFeedback' title='Enviar feedback'/>
                <HomeButton to='' icon='MdOutlineSettings' title='Definições'/>

                <hr className={styles.hr}/>
                <h6 className={styles.title}>Subscrições</h6>

                <Subscription to='' image='' name='Farmácia Esmeralda'/>
                <Subscription to='' image='../../../../public/pharmacist.png' name='Farmácia Novassol'/>
                <Subscription to='' image='' name='Farmácia Esmeralda'/>
                <Subscription to='' image='' name='Farmácia Esmeralda'/>
                <Subscription to='' image='' name='Farmácia Esmeralda'/>
                <Subscription to='' image='' name='Farmácia Esmeralda'/>
                <Subscription to='' image='' name='Farmácia Esmeralda'/>
                <Subscription to='' image='' name='Farmácia Esmeralda'/>
                <Subscription to='' image='' name='Farmácia Esmeralda'/>

                <hr className={styles.hr}/>
                <h6 className={styles.title}>Sobre Pharmagest</h6>

                <div className={styles.pharmagest_box}>
                  <Link to=''>Direitos do autor</Link>
                  <Link to=''>Contactar-nos</Link>
                  <Link to=''>Termos</Link>
                  <Link to=''>Privacidade</Link>

                  <Link to=''>Política e segurança</Link>
                  <Link to=''>Como funciona a Pharmagest</Link>
                  <Link to=''>Testar novas funcionalidades</Link>

                  <p>&copy; 2024 Pharmaghest</p>
                </div>
            </div>
          </section>
          <div className={styles.home_container}>
           <div className={styles.header}>
                <div> <SearchInput w='94%'/> </div>
                <div> <ProvinceList /> </div>
                <div > 
                  <div>
                    <LoginButton to='#' title='Entrar' isLogin={true} />  
                    <LoginButton to='#' title='Inscrever-se' isLogin={false} />  
                  </div>

                  <div>
                  <FaMoon className={styles.moon_icon} /> 
                  <Profile w='21%' h='50%'/>
                  </div>
                </div>
           </div>
           <div className={styles.main}>
                <div>
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
                  <Pagination currentPage={22} totalItems={100}/>
               </div>
           </div>

          </div>
        </div>
    )
}

export default Home2