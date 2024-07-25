import { FaSearch } from "react-icons/fa";
import styles from '../../css/form_elements/SearchInput.module.css';

function SearchInput(){
    return (
        <section className={styles.main}>
            <input type="text" name='search' placeholder="Procurar"/>
            <span className={styles.icon}> <FaSearch /> </span>
        </section>
    )
} 

export default SearchInput;