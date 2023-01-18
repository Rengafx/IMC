import React, { useState } from 'react'

const tabelaIMC = () => {
  return (
    < table border='1' style={{ borderCollapse: 'collapse' }}>

      <thead>
        <tr>
          <th>
            Classificação
          </th>
          <th>
            IMC
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> Abaixo do Peso</td>
          <td> Entre 18,5 e 24,9</td>
        </tr>
        <tr>
          <td> Peso normal</td>
          <td> Entre 25 e 29,9</td>
        </tr>
        <tr>
          <td> Obesidade Grau I</td>
          <td> Entre 30 e 34,9</td>
        </tr>
        <tr>
          <td> Obesidade Grau II</td>
          <td> Entre 35 e 39,9</td>
        </tr>
        <tr>
          <td> Obesidade Grau III ou Mórbida</td>
          <td> Maior que 40</td>
        </tr>
      </tbody>
    </table>


  )

}

const fpeso = (p, sp) => {
  return (
    <div>
      <label>
        Peso
        <input type="text" value={p} onChange={(e) => { sp(e.target.value) }} />
      </label>
    </div>
  )
}

const faltura = (a, sa) => {
  return (
    <div>
      <label>
        Altura
        <input type="text" value={a} onChange={(e) => { sa(e.target.value) }} />
      </label>
    </div>
  )
}

const fcalcular = (p, a, sr) => {
  const calc = () => {
    sr(p / (a * a))
  }
}

const fresultado = (r) => {
  return (
    <div>
      <p>Resultado:{r.toFixed(2)}</p>
    </div>
  )
}

// faltou colocar o botão calcular pois da ero em tudo

export default function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)
  const calc = () => {
    setResultado(peso / (altura * altura))
  }
  return (
    <>
        <div>
      <label>
        Peso
        <input type="text" value={peso} onChange={(e) => { setPeso(e.target.value) }} />
      </label>
    </div>
    <div>
      <label>
        Altura
        <input type="text" value={altura} onChange={(e) => { setAltura(e.target.value) }} />
      </label>
    </div>
      <div><button onClick={calc}>calcular</button></div>
      <div><button onClick={()=>setResultado(resultado-1)}>Ficar mais saudavel</button></div>
      {tabelaIMC()}
      {fresultado(resultado)}
      

    </>
  );
}



