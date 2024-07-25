import styles from '../../css/form_elements/HomeButton.module.css'
import { BiLogInCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';

function HomeButton ({to, icon, title}){

    return (
        <section className={styles.main}>
            <Link to={to}>
                <BiLogInCircle className={styles.icon} />
                {title}
            </Link>
        </section>
    )
}

export default HomeButton