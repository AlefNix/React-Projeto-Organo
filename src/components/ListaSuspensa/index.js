import "./ListaSuspensa.css"

export const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option hidden>Selecione o time...</option>
                {props.itens.map(item => <option key={item.Value} value={item.Value}>{item.Nome}</option>)}
            </select>
        </div>
    )
}