import styles from '../../css/form_elements/HomeCard.module.css';
import { Link } from 'react-router-dom';

function HomeCard({image, name, w, h}){
    return(
        <Link className={styles.main} style={{width: w, height: h}}>
            <section>
                {name && <h4>{name}</h4> }
                <img src={image} alt="" />
                {!name && <p> sem descrição </p>}
            </section>
        </Link>
    )
}

export default HomeCard