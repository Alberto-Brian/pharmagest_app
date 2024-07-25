import styles from '../../css/form_elements/SubmitButton.module.css'
function SubmitButton({value}){
    return <input className={styles.button_control} type="submit" value={value} />
}

export default SubmitButton