import styles from '../../css/form_elements/SubmitButton.module.css';

interface SubmitButtonProps { value: string }

const SubmitButton: React.FC<SubmitButtonProps> = ({value}) => {
    return <input className={styles.button_control} type="submit" value={value} />
}

export default SubmitButton