import '.App.css'
import MeuComponente from './componentes/MeuComponente'

function App() {
  let nome = "Sales"
  let sobrenome = "lindo"
  return (
    <>
    <MeuComponente/>
    <h1 className="meu-nome"> salve -{nome} {sobrenome}</h1>
    <h1> ola so o sales blz {nome} {sobrenome}</h1>
    </>
    ) //JSX - Javascript XML
}

export default App
