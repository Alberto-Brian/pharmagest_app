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
           <div> <SearchInput w='' h='' /> <Profile w='' h='' image='' /></div>
                <div> <ProvinceList w='' h='' /> </div>
                <div > 
                  <LoginButton to='#' title='Entrar' isLogin={true} w='' h=''/>  
                  <LoginButton to='#' title='Inscrever-se' isLogin={false} w='' h=''/>  
                  <FaMoon className={styles.moon_icon} /> 
                </div>
           </div>
           <div className={styles.main}>
                <div>
                  <HomeCard w='' h='' to='' image={ImageFarmacy} name='Farmácia Esmeralda More Content'/>
                  <HomeCard w='' h='' to='' image={ImageFarmacy} name='Farmácia Popular'/>
                  <HomeCard w='' h='' to='' image={ImageFarmacy} name='Medipharma'/>
                  <HomeCard w='' h='' to='' image={ImageFarmacy} name='Testando'/>
                  <HomeCard w='' h='' to='' name='' image={ImageFarmacy}/>
                  <HomeCard w='' h='' to='' name='' image={ImageFarmacy}/>
                  <HomeCard w='' h='' to='' name='' image={ImageFarmacy}/>
                  <HomeCard w='' h='' to='' name='' image={ImageFarmacy}/>
                  <HomeCard w='' h='' to='' name='' image={ImageFarmacy}/>
                  <HomeCard w='' h='' to='' name='' image={ImageFarmacy}/>
                  <HomeCard w='' h='' to='' name='' image={ImageFarmacy}/>
                </div>
           </div>
           <div className={styles.footer}>
               <div>
                  <HomeButton to='/Login' icon='CgMicrosoft' title='' showName={false} />
               </div>
               <div>
                  <Pagination currentPage={34} totalItems={100} pages={0} perPage={0} next={0}  prev={0} totalCurrentResults={0}/>
               </div>
           </div>
        </div>
    )
}

export default Home1