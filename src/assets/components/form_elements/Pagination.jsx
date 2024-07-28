import { Link } from 'react-router-dom';
import styles from '../../css/form_elements/Pagination.module.css';

function Pagination({totalItems, 
                     currentPage, 
                     pages, 
                     perPage, 
                     next, 
                     prev, 
                     totalCurrentResults  }){

    return (
        <section className={styles.main}>

            {(currentPage-1) > 0 && <Link to='' className={styles.prev}> Anterior </Link> }
            {(currentPage-3) > 0 && currentPage != 1 && <Link to='' className={styles.other}> {1} </Link> }
            {(currentPage-4) > 0 && <Link to='' className={styles.reticence}> ... </Link> }
            {(currentPage-2) > 0 && <Link to='' className={styles.other}> {currentPage-2} </Link> }
            {(currentPage-1) > 0 && <Link to='' className={styles.other}> {currentPage-1} </Link> }
            
            <Link to='' className={styles.current}> {currentPage} </Link>

            {(currentPage+1) < totalItems && <Link to='' className={styles.other}> {currentPage+1} </Link> }
            {(currentPage+2) < totalItems && <Link to='' className={styles.other}> {currentPage+2} </Link> }
            {(currentPage+4) <= totalItems && <Link to='' className={styles.reticence}> ... </Link> }
            {(currentPage > 0 && currentPage < totalItems) && <Link to='' className={styles.reticence}>{totalItems}</Link> }

            {(currentPage+1) <= totalItems && <Link to='' className={styles.next}> Próximo </Link> }
    
        </section>
    )
}

export default Pagination