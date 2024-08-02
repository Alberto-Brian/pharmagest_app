import styles from '../../css/utils/News.module.css';
import Truncate from './Truncate';
import logoPharma from '../../../../public/casa.svg';
import defaultImageNew from '../../../../public/pub.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../utils/baseURl';



function News(){


    const [news, setNews] = useState([]);
    const [pharmacies, setPharmacies] = useState([]);
    
    //Ir à base de dados e pegar informações sobre as notícias...

    // useEffect(() => {
    //     const getData = async() => {
    
    //   const [newsResponse, pharmaciesResponse] = await Promise.all([    
            //axios.get(baseUrl + 'news'),
            //axios.get(baseUrl + 'pharmacies'),
        // ]) 
        
            // setNews(newsResponse.data.data);
            // setPharmacies(pharmaciesResponse.data.data);

    //     }
    //     getData();
    // }, [])

        for(const i=0; i<news.length; i++){
             news[i].avatar = (pharmacies.filter(pharmacy => pharmacy.id === news[i].id)).avatar;
        }
    return (
        <section className={styles.main}>
            <article className={styles.image}>
                <img src="../../../../public/pub.jpg" alt="default new image" />
            </article>
            <article className={styles.content}>
                <div className={styles.pharmacy}>
                    <section className={styles.data}>
                        <button>
                            {news.avatar ? <img src={news.avatar} alt="Foto de perfil" /> 
                                   : <img src={logoPharma} className={styles.avatar} alt="" />}
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