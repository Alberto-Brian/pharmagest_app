import styles from '../../css/pages/Menu.module.css';
import HomeButton from '../form_elements/HomeButton';
import Subscription from '../form_elements/Subscription';
import { Link } from 'react-router-dom';
function Menu({show}){
    return (
      <>
      
      {show ? (
      <section className={styles.main}>
                    <HomeButton showName={show} to='' icon='RiHomeHeartLine' title='Casa'/>
                    <HomeButton showName={show} to='' icon='LuHistory' title='Histórico'/>
                    
                    <hr className={styles.hr}/>

                    <HomeButton showName={show} to='' icon='GiMedicalPackAlt' title='A sua Farmácia'/>
                    <HomeButton showName={show} to='' icon='IoNewspaperOutline' title='Notícias'/>
                    
                    <hr className={styles.hr}/>

                    <HomeButton showName={show} to='' icon='IoMdHelpCircleOutline' title='Ajuda'/>
                    <HomeButton showName={show} to='' icon='MdOutlineFeedback' title='Enviar feedback'/>
                    <HomeButton showName={show} to='' icon='MdOutlineSettings' title='Definições'/>


                { show && (
                  <>
                  <hr className={styles.hr}/>
                  <h6 className={styles.title}>Subscrições</h6>
                  <Subscription to='' image='' name='Farmácia Esmeralda'/>
                  <Subscription to='' image='../../../../public/pharmacist.png' name='Farmácia Novassol'/>
                  <Subscription to='' image='../../../../public/novassol.png' name='Farmácia Esmeralda'/>
                  <Subscription to='' image='../../../../public/.png' name='Farmácia Esmeralda'/>
                  <Subscription to='' image='' name='Farmácia Esmeralda'/>
                  <Subscription to='' image='' name='Farmácia Esmeralda'/>
                  <Subscription to='' image='' name='Farmácia Esmeralda'/>
                  <Subscription to='' image='' name='Farmácia Esmeralda'/>
                  <Subscription to='' image='' name='Farmácia Esmeralda'/>
                  </>
                )}


                {show && (
                  <>
                      <hr className={styles.hr}/>
                      <h6 className={styles.title}>Sobre Pharmagest</h6>
                      <div className={styles.pharmagest_box}>
                      <Link to=''>Direitos do autor</Link>
                      <Link to=''>Contactar-nos</Link>
                      <Link to=''>Termos</Link>
                      <Link to=''>Privacidade</Link>

                      <Link to=''>Política e segurança</Link>
                      <Link to=''>Como funciona a Pharmagest</Link>
                      <Link to=''>Testar novas funcionalidades</Link>

                      <p>&copy; 2024 Pharmaghest</p>
                    </div>
                  </>
                )}
      </section>

      ) : (
        <section className={styles.main} style={{width: '7%'}}>
                    <HomeButton showName={show} to='' icon='RiHomeHeartLine' title='Casa'/>
                    <HomeButton showName={show} to='' icon='LuHistory' title='Histórico'/>
                    
                    <hr className={styles.hr}/>

                    <HomeButton showName={show} to='' icon='GiMedicalPackAlt' title='A sua Farmácia'/>
                    <HomeButton showName={show} to='' icon='IoNewspaperOutline' title='Notícias'/>
                    
                    <hr className={styles.hr}/>

                    <HomeButton showName={show} to='' icon='IoMdHelpCircleOutline' title='Ajuda'/>
                    <HomeButton showName={show} to='' icon='MdOutlineFeedback' title='Enviar feedback'/>
                    <HomeButton showName={show} to='' icon='MdOutlineSettings' title='Definições'/>


                { show && (
                  <>
                  <hr className={styles.hr}/>
                  <h6 className={styles.title}>Subscrições</h6>
                  <Subscription to='' image='' name='Farmácia Esmeralda'/>
                  <Subscription to='' image='../../../../public/pharmacist.png' name='Farmácia Novassol'/>
                  <Subscription to='' image='../../../../public/novassol.png' name='Farmácia Esmeralda'/>
                  <Subscription to='' image='../../../../public/.png' name='Farmácia Esmeralda'/>
                  <Subscription to='' image='' name='Farmácia Esmeralda'/>
                  <Subscription to='' image='' name='Farmácia Esmeralda'/>
                  <Subscription to='' image='' name='Farmácia Esmeralda'/>
                  <Subscription to='' image='' name='Farmácia Esmeralda'/>
                  <Subscription to='' image='' name='Farmácia Esmeralda'/>
                  </>
                )}


                {show && (
                  <>
                      <hr className={styles.hr}/>
                      <h6 className={styles.title}>Sobre Pharmagest</h6>
                      <div className={styles.pharmagest_box}>
                      <Link to=''>Direitos do autor</Link>
                      <Link to=''>Contactar-nos</Link>
                      <Link to=''>Termos</Link>
                      <Link to=''>Privacidade</Link>

                      <Link to=''>Política e segurança</Link>
                      <Link to=''>Como funciona a Pharmagest</Link>
                      <Link to=''>Testar novas funcionalidades</Link>

                      <p>&copy; 2024 Pharmaghest</p>
                    </div>
                  </>
                )}
      </section>
      ) }
     
        </>
    )
}

export default Menu