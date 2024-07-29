import styles from '../../css/form_elements/HomeCard.module.css';
import { Link } from 'react-router-dom';

function TruncateName({name, limit}){
    if(name.length <= limit){
        return name;
    }

    return name.substring(0, limit) + '...';
}

function HomeCard({image, name, w, h}){
    return(
        <Link className={styles.main} style={{width: w, height: h}}>
            <section>
                {name && <h4>{<TruncateName name={name} limit={18} />}</h4> }
                <img src={image} alt="" />

                <span className={styles.info}>

                </span>

                {!name && <p> sem descrição </p>}
            </section>
        </Link>
    )
}

export default HomeCard