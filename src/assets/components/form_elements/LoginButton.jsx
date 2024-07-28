import styles from '../../css/form_elements/LoginButton.module.css';
import { Link } from 'react-router-dom';

function LoginButton({to, title, isLogin}){
    return (
         <> 
            {isLogin ? (
            <Link to={to} className={styles.signin}> 
                {title}  
            </Link>) : (
            <Link to={to} className={styles.signup}> 
                {title} 
            </Link>) }
         </>
    )
}

export default LoginButton