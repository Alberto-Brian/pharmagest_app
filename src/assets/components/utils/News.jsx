import styles from '../../css/utils/News.module.css';
import Truncate from '../utils/Truncate';
import person from '../../../../public/person_icon.svg';


function News({image=false}){
    return (
        <section className={styles.main}>
            <article className={styles.image}>
                
            </article>
            <article className={styles.content}>
                <div className={styles.pharmacy}>
                    <section className={styles.data}>
                        <button>
                            {image ? <img src={image} alt="Foto de perfil" /> 
                                   : <img src={person} className={styles.avatar} alt="" />}
                            <img src="" alt="" />
                        </button>
                        <h6 className={styles.name}><Truncate text='Farmácia Esmeralda' limit='20' /></h6>
                    </section>
                    <p className={styles.date}>17/04/2025</p>
                    <p className={styles.title}><Truncate text='Promoção' limit='20' /></p>
                    <hr className={styles.hr}/>
                </div>
                <div className={styles.new}>
                    <p>
                        <Truncate text='lorem ipsum dolor sit amet consectetur adipisicing el
                        it. Facilis sapiente dolor voluptatem ipsum explicabo. 
                        Commodi, sunt placeat blanditiis distinctio, id architecto 
                        quidem possimus aspernatur neque pariatur odio adipisci nihil. Totam.' 
                        limit='269' />
                        
                        </p>
                </div>
            </article>
        </section>
    )
}

export default News