import styles from '../../css/pages/Home0.module.css';
import { FaMoon } from "react-icons/fa";
import SearchInput from '../form_elements/SeachInput';
import Profile from '../form_elements/Profile';
import HomeButton from '../form_elements/HomeButton';
import Pagination from '../form_elements/Pagination';
import Province from '../form_elements/Province';
import HomeCard from '../form_elements/HomeCard';
import Logo from '../../../../public/Nova pasta/logo.png';
import ImageFarmacy from '../../../../public/imageFarmacy.jpg';

function Home0(){
    return (
        <div className={styles.home_container}>
           <div className={styles.header}>
                <div>
                   {/* <img src={Logo} alt="Logotipo pharmagest" /> */}
                </div>
                <div> <SearchInput /> <Profile /></div>
                <div className={styles.moon_icon}> <FaMoon /> </div>
           </div>
           <div className={styles.main}>
                <div>
                  <HomeButton to='/Login' icon='BiLogIn' title='Entrar' />
                  <HomeButton to='/Login' icon='IoCreateSharp' title='Criar conta' />
                  <HomeButton to='/Login' icon='TbLogout2' title='Sair' />
                </div>
                <div>
                  <HomeCard image={ImageFarmacy} name='Farmácia Esmeralda More Content'/>
                  <HomeCard image={ImageFarmacy} name='Farmácia Popular'/ >
                  <HomeCard image={ImageFarmacy} name='Medipharma'/>
                  <HomeCard image={ImageFarmacy} name='Testando'/>
                  <HomeCard image={ImageFarmacy}/>
                  <HomeCard image={ImageFarmacy}/>
                  <HomeCard image={ImageFarmacy}/>
                  <HomeCard image={ImageFarmacy}/>
                  <HomeCard image={ImageFarmacy}/>
                  <HomeCard image={ImageFarmacy}/>
                  <HomeCard image={ImageFarmacy}/>
                </div>
                <div>
                    <Province />
                </div>
           </div>
           <div className={styles.footer}>
               <div>
                  <HomeButton to='/Login' icon='CgMicrosoft' />
               </div>
               <div>
                  <Pagination currentPage={2} totalItems={88}/>
               </div>
           </div>
        </div>
    )
}

export default Home0