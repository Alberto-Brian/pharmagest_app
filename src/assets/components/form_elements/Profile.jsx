import styles from '../../css/form_elements/Profile.module.css';
import person from '../../../../public/person_icon.svg';

function Profile({w, h, image}){
    return (
        <section className={styles.main} style={{width: w, height: h}}>
           {image ? <img src={image} alt="Foto de perfil" /> :
                    <img src={person} alt="Foto de perfil" />
            }
        </section>
    )
}

export default Profile