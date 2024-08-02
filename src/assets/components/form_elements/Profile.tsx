import styles from '../../css/form_elements/Profile.module.css';
import { useRef, useEffect } from 'react';
import person from '../../../../public/person_icon.svg';
import HomeButton from './HomeButton';
import Truncate from '../utils/Truncate';

interface ProfileProps {
    w: string,
    h: string,
    image: string
}

const Profile: React.FC<ProfileProps> = ({w, h, image}) => {

    const img_profile_ref = useRef(null);
    const btn_profile_ref = useRef(null);
    const name_profile_ref = useRef(null);
    const view_profile_ref = useRef(null);
    const view_box_ref = useRef(null);

    // const [display, setDisplay] = useState(false); 
    useEffect(()=>{

        const btn_profile = document.querySelector('#btn_profile') as HTMLElement;
        const view = document.querySelector('#view') as HTMLElement;
        const name = document.querySelector('#name') as HTMLElement;
        let display = false;

        
        document.addEventListener('click', (e) => {
            if(e.target === img_profile_ref.current  || 
               e.target === btn_profile_ref.current  ||
               e.target === name_profile_ref.current){ 
                    // display = !display ;
                    display = true;
                } else if( e.target === view_profile_ref.current ||
                       e.target === view_box_ref.current) {
                           display = true;
                        } else {
                            display= false;
            }

            show(display)
        })

        function show(display: boolean){
                if(display) {
                            view.style.display = 'flex'
                            view.style.opacity = '1'
                            btn_profile.style.transform = 'translate(-13.8em, -0.3em)';
                        }
                        else {
                            view.style.display = 'none';
                            view.style.opacity = '0'
                            btn_profile.style.transform = 'translateX(0em)';
                        }
        }
    }, [])

    return (

        <>
            <button id='btn_profile' className={`${styles.main} `} style={{width: w, height: h}} ref={btn_profile_ref}>
            {image ? <img src={image} alt="Foto de perfil" 
            className={styles.img_profile} 
            ref={img_profile_ref}/> :
                        <img src={person} alt="Foto de perfil"
                        // style={{width: '80%', height:'80%'}}
                        ref={img_profile_ref}/>
            }
            </button>
            
            <section id='view' className={styles.optionsView} ref={view_profile_ref}>
                <span id='name' className={styles.profile_name} ref={name_profile_ref}>
                    <Truncate text='Alberto Kiowa Massanza' limit={22} />
                </span>

                <article className={styles.profile_content} ref={view_box_ref}>
                    <HomeButton showName={true} to='' icon='GoPerson' title='Seu perfil'/>
                    <hr className={styles.hr} />
                    <HomeButton showName={true} to='' icon='IoLogoGoogle' title='Conta Google'/>
                    <HomeButton showName={true} to='' icon='MdOutlineSwitchAccount ' title='Mudar de conta'/>
                    <HomeButton showName={true} to='' icon='TbLogout2' title='Terminar sessão'/>
                    <hr className={styles.hr} />
                    <HomeButton showName={true} to='' icon='IoMoonOutline' title='Tema'/>
                    <HomeButton showName={true} to='' icon='BiWorld' title='Localização: Luanda'/>
                    <HomeButton showName={true} to='' icon='MdOutlineKeyboard' title='Atalhos do teclado'/>
                    <hr className={styles.hr} />
                    <HomeButton showName={true} to='' icon='MdOutlineSettings' title='Definições'/>
                    <hr className={styles.hr} />
                    <HomeButton showName={true} to='' icon='IoMdHelpCircleOutline' title='Ajuda'/>
                </article>
            </section>
        </>
    )
}

export default Profile