import styles from '../../css/form_elements/LoginButton.module.css';
import { Link } from 'react-router-dom';

function LoginButton({to, title, isLogin, w, h}){
    return (
         <> 
            {isLogin ? (
            <Link to={to} className={styles.signin} style={{width: w, height: h}}> 
                {title}  
            </Link>) : (
            <Link to={to} className={styles.signup} style={{width: w, height: h}} > 
                {title} 
            </Link>) }
         </>
    )
}

export default LoginButton