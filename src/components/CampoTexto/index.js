import "./CampoTexto.css"

export const CampoTexto = (props) => {

    const placeholderFormatado = `${props.placeholder}...`
    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    } 


    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderFormatado} value={props.valor}/>
        </div>
    )
}