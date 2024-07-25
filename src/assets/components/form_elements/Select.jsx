import styles from '../../css/form_elements/Select.module.css'

function Select({text, name, options, handleOnChange, value, 
                 default_option='Selecione uma opção'}){
    return (
        <div className={styles.select_control}>
            <label htmlFor={name}>{text}</label>
            <select 
            onChange={handleOnChange}
            value={value || ''}
            name={name} 
            id={name}>
                <option>{default_option}</option>
                {options.map((item) => (
                    <option value={item.id} key={item.id}>{item.name}</option>
                )) }
            </select>
        </div>
    )
}

export default Select