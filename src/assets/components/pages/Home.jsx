import styles from '../../css/pages/Home.module.css';
import { FaMoon } from "react-icons/fa";
import SearchInput from '../form_elements/SeachInput';
import Profile from '../form_elements/Profile';
import HomeButton from '../form_elements/HomeButton';


function Home(){
    return (
        <section className={styles.home_container}>
           <div className={styles.header}>
                <div></div>
                <div> <SearchInput /> <Profile /></div>
                <div className={styles.moon_icon}> <FaMoon /> </div>
           </div>
           <div className={styles.main}>
                <div>
                  <HomeButton to='/Login' icon='BiLogInCircle' title='Login' />
                  <HomeButton to='/Login' icon='BiLogInCircle' title='Login' />
                  <HomeButton to='/Login' icon='BiLogInCircle' title='Login' />
                </div>
                <div></div>
                <div></div>
           </div>
           <div className={styles.footer}></div>
        </section>
    )
}

export default Home