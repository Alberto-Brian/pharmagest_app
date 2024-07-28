import styles from '../../css/pages/Home1.module.css';
import { FaMoon } from "react-icons/fa";
import SearchInput from '../form_elements/SeachInput';
import Profile from '../form_elements/Profile';
import HomeButton from '../form_elements/HomeButton';
import LoginButton from '../form_elements/LoginButton';
import Pagination from '../form_elements/Pagination';
import ProvinceList from '../form_elements/ProvinceList';
import HomeCard from '../form_elements/HomeCard';
import ImageFarmacy from '../../../../public/imageFarmacy.jpg';

function Home1(){
    return (
        <div className={styles.home_container}>
           <div className={styles.header}>
                <div>  <Profile /> <SearchInput /> </div>
                <div> <ProvinceList /> </div>
                <div > 
                  <LoginButton to='#' title='Entrar' isLogin={true} />  
                  <LoginButton to='#' title='Inscrever-se' isLogin={false} />  
                  <FaMoon className={styles.moon_icon} /> 
                </div>
           </div>
           <div className={styles.main}>
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
           </div>
           <div className={styles.footer}>
               <div>
                  <HomeButton to='/Login' icon='CgMicrosoft' />
               </div>
               <div>
                  <Pagination currentPage={34} totalItems={100}/>
               </div>
           </div>
        </div>
    )
}

export default Home1