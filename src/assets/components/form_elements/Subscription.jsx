import styles from '../../css/form_elements/Subscription.module.css';
import { Link } from 'react-router-dom';
import logoPharma from '../../../../public/casa.svg';

function TruncateName({name, limit}){
    if(name.length <= limit){
        return name
    }

    return name.substring(0, limit) + '...';
}
function Subscription({to, image, name}){
    return (
        <Link to={to} className={styles.main}>
            <div className={styles.image}>
                {image ? <img src={image} alt="" /> :
                <img src={logoPharma} style={{opacity: .6}} alt="" /> }
            </div>
           <TruncateName name={name} limit={15} /> 
        </Link>
    )
}

export default Subscription