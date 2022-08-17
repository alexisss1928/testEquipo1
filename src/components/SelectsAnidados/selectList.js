import { useFetch } from "./useFetch"
import styles from "./style-selects.module.scss"

const SelectList = ({title,url,handleChange}) => {
    const {data} = useFetch(url);

    
    if(!data) return null;

    let id = `select-${title}`;
    let label = title.charAt(0).toUpperCase() + title.slice(1);
    let options = data.response[title];
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <br/><br/>
            <select className={`${styles.inputSelect} `}
             name={id} id={id} onChange={handleChange}>
            <option value="">-   -   - Selecciona una opción  -   -   - </option>
                {data && options.map((el) => <option key={el} value={el}>{el}</option>)}
            </select>
        </div>
    )
}

export default SelectList