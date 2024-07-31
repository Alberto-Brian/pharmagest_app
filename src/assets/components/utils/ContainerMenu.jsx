import styles from '../../css/utils/ContainerMenu.module.css'

function ContainerMenu(props){
    return <div className={`${styles.container} ${styles[props.customClass]}`}>
        {props.children}
        </div>
}

export default ContainerMenu