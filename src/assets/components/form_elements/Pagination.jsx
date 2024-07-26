import { Link } from 'react-router-dom';
import styles from '../../css/form_elements/Pagination.module.css';

function Pagination({totalItems, 
                     currentPage, 
                     pages, 
                     perPage, 
                     next, 
                     prev, 
                     totalCurrentResults  }){


     function pagination (currentPage, totalItems) {
        switch(current){
            case 1 : 
            return <>
                    <Link to='' className={styles.other}> {currentPage} </Link>
                    <Link to='' className={styles.current}> {currentPage + 1} </Link>
                    <Link to='' className={styles.other}> {currentPage + 2} </Link>
                    <Link to='' className={styles.other}> ... </Link>
                    <Link to='' className={styles.other}> {totalItems} </Link>
                    <Link to='' className={styles.next}> Próximo </Link>
                </>

            case totalItems : 
            return <>
                    <Link to='' className={styles.prev}> Anterior </Link>
                    <Link to='' className={styles.other}> {totalItems - (totalItems - 1) } </Link>
                    <Link to='' className={styles.other}> ... </Link>
                    <Link to='' className={styles.other}> {totalItems - 2} </Link>
                    <Link to='' className={styles.other}> {totalItems - 1} </Link>
                    <Link to='' className={styles.current}> {totalItems} </Link>
                </> 
                
                
            case 2 : 
            return <>
                    <Link to='' className={styles.prev}> Anterior </Link>
                    <Link to='' className={styles.other}> {current - 1} </Link>
                    <Link to='' className={styles.current}> {current} </Link>
                    
                    {current+1 && <Link to='' className={styles.current}> {current+1} </Link> }
                    {current+2 && <Link to='' className={styles.current}> {current+2} </Link> }
                    {current+3 && <Link to='' className={styles.current}> {current+3} </Link> }
                    {current+3 && <Link to='' className={styles.current}> ... </Link> }

                    <Link to='' className={styles.other}> {totalItems} </Link>
                    <Link to='' className={styles.next}> Próximo </Link>

                </>
        }
     }

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