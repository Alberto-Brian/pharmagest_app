import styles from '../../css/form_elements/Profile.module.css';
import person from '../../../../public/person_icon.svg';
import { useRef, useEffect } from 'react';
function Profile({w, h, image}){

    const img_profile_ref = useRef(null);
    const btn_profile_ref = useRef(null);
    const name_profile_ref = useRef(null);
    const view_profile_ref = useRef(null);
    const view_box_ref = useRef(null);

    // const [display, setDisplay] = useState(false); 
    useEffect(()=>{

        const btn_profile = document.querySelector('#btn_profile');
        const view = document.querySelector('#view');
        const name = document.querySelector('#name');
        let display = false;

        document.addEventListener('click', (e) => {
            if(e.target === img_profile_ref.current  || 
               e.target === btn_profile_ref.current  ||
               e.target === name_profile_ref.current){ 
                    display = !display ;
                } else if( e.target === view_profile_ref.current ||
                       e.target === view_box_ref.current) {
                           display = true;
                           console.log(display);
                        } else {
                            display= false;
                            console.log(display);
            }

            show(display)
        })

        function show(display){
                if(display) {
                            view.style.display = 'flex'
                            view.style.opacity = '1'
                            btn_profile.style.transform = 'translateX(-12.8em)';
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
            {image ? <img src={image} alt="Foto de perfil" className={styles.img_profile} ref={img_profile_ref}/> :
                        <img src={person} alt="Foto de perfil" ref={img_profile_ref}/>
                }
            </button>
            
            <section id='view' className={styles.optionsView} ref={view_profile_ref}>
                <button id='name' className={styles.profile_name} ref={name_profile_ref}>
                    Alberto Kiowa Massanza
                </button>

                <article className={styles.profile_content} ref={view_box_ref}>
                        
                </article>
            </section>
        </>
    )
}

export default Profile