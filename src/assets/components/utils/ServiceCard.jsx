import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../../css/utils/ProjectCard.module.css';


function ServiceCard({id, name, cost, description, handleRemove}){

    function remove(e){
        e.preventDefault();
        handleRemove(id, cost);
    }
    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p> <span>Custo: </span> {cost} </p>
            <p>{description}</p>

            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    excluir
                </button>
            </div>
        </div>
    )
}
export default ServiceCard