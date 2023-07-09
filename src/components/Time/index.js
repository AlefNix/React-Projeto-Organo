import { Colaborador } from "../Colaborador";
import "./Time.css";

export const Time = (props) => {
    return (
        (props.colaboradores.length > 0) ?
        <section className="time" style={{backgroundColor: props.corPrimaria}}>
            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map( (colaborador, index) => <Colaborador key={index} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corPrimaria}/>)}            
            </div>
        </section>
        : ''
    )
}