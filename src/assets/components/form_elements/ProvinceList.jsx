import styles from '../../css/form_elements/ProvinceList.module.css';
import { Link } from 'react-router-dom';
function ProvinceList({w, h}){
    return(
        <select className={styles.main} style={{width: w, height: h}}>
           <option value = 'Bengo'> Todas Farmácias </option>
           <option value = 'Bengo'> Bengo </option>
           <option value = 'Benguela'> Benguela </option>
           <option value = 'Bié'> Bié </option>
           <option value = 'Cabinga'> Cabinda </option>
           <option value = 'C_cubango'> C. Cubango </option>
           <option value = '_Nortr'> C. Norte </option>
           <option value = 'C_sul'> C. Sul </option>
           <option value = 'Cunene'> Cunene </option>
           <option value = 'Huila'> Huíla </option>
           <option value = 'Luanda'> Luanda </option>
           <option value = 'L_Norte'> L. Norte </option>
           <option value = 'L_sul'>L. Sul </option>
           <option value = 'Malanje'> Malanje </option>
           <option value = 'Moxico'> Moxico </option>
           <option value = 'Namibe'> Namibe </option>
           <option value = 'Uige'> Uíge </option>
           <option value = 'Zaire'> Zaire </option>
        </select>
    )
}

export default ProvinceList