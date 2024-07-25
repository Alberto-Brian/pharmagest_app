import styles from '../../css/utils/Loading.module.css'
import loading from '../../../../public/loading.io.svg'


function Loading(){

    return (
        <div className={styles.container}>
            <img className={styles.loader} src={loading} alt="Loading..." />
        </div>
    )
}

export default Loading