import styles from '../../css/form_elements/Province.module.css';
import { Link } from 'react-router-dom';
function Province(){
    return(
        <section className={styles.main}>
            <Link to='Bengo'>Bengo</Link>
            <Link to='Benguela'>Benguela</Link>
            <Link to='Bié'>Bié</Link>
            <Link to='Cabinga'>Cabinda</Link>
            <Link to='C_cubango'>C. Cubango</Link>
            <Link to='/_Nortr'>C. Norte</Link>
            <Link to='C_sul'>C. Sul</Link>
            <Link to='/Cunene'>Cunene</Link>
            <Link to='/Huila'>Huíla</Link>
            <Link to='/Luanda'>Luanda</Link>
            <Link to='/L_Norte'>L. Norte</Link>
            <Link to='/L_sul'>L. Sul</Link>
            <Link to='/Malanje'>Malanje</Link>
            <Link to='/Moxico'>Moxico</Link>
            <Link to='/Namibe'>Namibe</Link>
            <Link to='/Uige'>Uíge</Link>
            <Link to='/Zaire'>Zaire</Link>
        </section>
    )
}

export default Province