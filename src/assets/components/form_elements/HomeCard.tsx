import styles from '../../css/form_elements/HomeCard.module.css';
import { Link } from 'react-router-dom';
import Truncate from '../utils/Truncate';

interface HomeCardProps {
    to: string,
    image: string,
    name: string,
    w: string, h: string
}

const HomeCard: React.FC<HomeCardProps> = ({to, image, name, w, h}) => {
    return(
        <Link to={to} className={styles.main} style={{width: w, height: h}}>
            <section>
                {name && <h4>{<Truncate text={name} limit={18} />}</h4> }
                <img src={image} alt="" />

                <span className={styles.info}>

                </span>

                {!name && <p> sem descrição </p>}
            </section>
        </Link>
    )
}

export default HomeCard