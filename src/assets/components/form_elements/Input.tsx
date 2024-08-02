import styles from '../../css/form_elements/Input.module.css'

interface InputProps {
    type: string,
    text: string,
    name: string,
    placeholder: string,
    handleOnChange: () => string,
    value: string
}

const Input: React.FC<InputProps> = ({type="text", text, 
                name, placeholder='não definido',
                handleOnChange, value}) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text} {text && ':'}</label>
            <input type={type} 
                   name={name} 
                   id={name} 
                   placeholder={placeholder} 
                   onChange={handleOnChange} 
                   value={value || ''}     
            />
        </div>
    )
}

export default Input