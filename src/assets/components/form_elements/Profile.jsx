import styles from '../../css/form_elements/Profile.module.css';
import person from '../../../../public/person_icon.svg';

function Profile(){
    return (
        <section className={styles.main}>
            <img src={person} alt="" />
        </section>
    )
}

export default Profile