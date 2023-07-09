import { useState } from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Formulario } from './components/Formulario';
import { Time } from './components/Time';
import { times } from './components/Dados/ListaTimes';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoCadastrarColaborador={colaborador => aoColaboradorAdicionado(colaborador)} times={times}/>
      {times.map(item => 
      <Time 
        nome={item.Nome} 
        key={item.Value}
        corPrimaria={item.corPrimaria} 
        corSecundaria={item.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === item.Value)}
        />)}
    </div>
  );
}

export default App;
