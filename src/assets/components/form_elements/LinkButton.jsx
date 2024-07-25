import styles from '../../css/form_elements/LinkButton.module.css';
import { Link } from 'react-router-dom';

function LinkButton({to='/Projects', text='Criar Projectos'}){
    return (
        <div className={styles.button}>
            <Link to={to}>
                {text}
            </Link>
        </div>
    )
}

export default LinkButton
