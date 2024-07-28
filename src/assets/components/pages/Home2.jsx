import styles from '../../css/pages/Home2.module.css';
import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { PiTidalLogoFill } from "react-icons/pi";
import { CgMicrosoft } from "react-icons/cg";
import SearchInput from '../form_elements/SeachInput';
import Profile from '../form_elements/Profile';
import HomeButton from '../form_elements/HomeButton';
import LoginButton from '../form_elements/LoginButton';
import Pagination from '../form_elements/Pagination';
import ProvinceList from '../form_elements/ProvinceList';
import HomeCard from '../form_elements/HomeCard';
import ImageFarmacy from '../../../../public/imageFarmacy.jpg';

function Home2(){
    return (
        <div className={styles.main}>
          <section className={styles.menu}> 
            <div className={styles.logo_box}>
              <button> 
                 <IoMenuOutline className={styles.menu_icon}/>
              </button>

              <Link to='#'>
                <div className={styles.logo_name_box}>
                  <PiTidalLogoFill className={styles.logo} />
                  <h4 className={styles.name}> Pharmagest </h4>
                </div>
              </Link>
            </div>
            <div className={styles.menu_box}>
                <HomeButton to='' icon='BiSolidHomeHeart' title='Casa'/>
                <HomeButton to='' icon='LuHistory' title='Histórico'/>
                
                <hr style={{
                  display: 'block',
                    color: 'white', 
                    background: 'white',
                    margin: '10px',
                    height: '.2em'}}/>

                <HomeButton to='' icon='FaHouseMedical' title='A sua Farmácia'/>
                <HomeButton to='' icon='IoNewspaper' title='Notícias'/>
                
                <hr style={{
                  display: 'block',
                    color: 'white', 
                    background: 'white',
                    margin: '10px',
                    height: '.2em'}}/>

                <HomeButton to='' icon='IoSettings' title='Definições'/>
                <HomeButton to='' icon='IoMdHelpCircle' title='Ajuda'/>
                <HomeButton to='' icon='MdOutlineFeedback' title='Enviar um feedback'/>

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
                  <Profile w='21%' h='42%'/>
                  </div>
                </div>
           </div>
           <div className={styles.main}>
                <div>
                  <HomeCard w='22%' h='45%' image={ImageFarmacy} name='Farmácia Esmeralda More Content'/>
                  <HomeCard w='22%' h='45%' image={ImageFarmacy} name='Farmácia Popular'/ >
                  <HomeCard w='22%' h='45%' image={ImageFarmacy} name='Medipharma'/>
                  <HomeCard w='22%' h='45%' image={ImageFarmacy} name='Testando'/>
                  <HomeCard w='22%' h='45%' image={ImageFarmacy}/>
                  <HomeCard w='22%' h='45%' image={ImageFarmacy}/>
                  <HomeCard w='22%' h='45%' image={ImageFarmacy}/>
                  <HomeCard w='22%' h='45%' image={ImageFarmacy}/>
                </div>
           </div>
           <div className={styles.footer}>
               <div>

                 <Link>
                    <CgMicrosoft />
                 </Link>
               </div>
               <div>
                  <Pagination currentPage={34} totalItems={100}/>
               </div>
           </div>

          </div>
        </div>
    )
}

export default Home2