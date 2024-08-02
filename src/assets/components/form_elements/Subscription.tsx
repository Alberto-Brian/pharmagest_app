import styles from '../../css/form_elements/Subscription.module.css';
import { Link } from 'react-router-dom';
import logoPharma from '../../../../public/casa.svg';
import Truncate from '../utils/Truncate';

interface SubscriptionProps {
    to: string,
    image: string,
    name: string
}

const Subscription: React.FC<SubscriptionProps> = ({to, image, name}) => {
    return (
        <Link to={to} className={styles.main}>
            <section className={styles.profile}>
                {image ? <img src={image} alt="" /> :
                <img src={logoPharma} style={{opacity: .6}} alt="" /> }
            </section>
           <Truncate text={name} limit={15} /> 
        </Link>
    )
}

export default Subscription