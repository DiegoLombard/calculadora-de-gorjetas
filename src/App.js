import React from 'react';
import './styles.css'
import Gorjeta01 from './img/gorjeta01.png'
import { useState } from 'react';



function App() {

  const [conta, setConta] = useState(0)
  const [porcentagem, setPorcentagem] = useState(0)
  const [resultado, setResultado] = useState(0)

  const calcular = () =>{

    let calculo = Number(conta) * Number(porcentagem) /100;
    setResultado(calculo);

  }

  return (
   <div className='container'>
    <img src={Gorjeta01} alt="Larga a Gorjeta" title='Larga a Gorjeta' width="350px" height="auto"/>

    <div className="info">
      <h1>Calculadora de Gorjeta</h1>

      <h2>Digite o valor da conta:</h2>
      <input placeholder='Ex: 50,00' onChange={(txt) => setConta(txt.target.value)} />

      <h2>Selecione a porcentagem da gorjeta:</h2>
      <select onChange={(txt) => setPorcentagem(txt.target.value)}>
        <option value="sel">selecione...</option>
        <option value="5" >5%</option>
        <option value="10">10%</option>
        <option value="15">15%</option>
        <option value="20">20%</option>
      </select>

      <button onClick={calcular}>Larga a Gorjeta!</button>
      {resultado != 0 && <h2>Resultado: {resultado}</h2>}
      

    </div>
   </div>
  );
}

export default App;
