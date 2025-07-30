import { Usuario } from './models/Usuario'
import './App.css'

function App() {
  
const ul = new Usuario('João da silva', 35);

  return (
    <>
      <p>{ul.apresentar()}</p>
    </>
  )
}

export default App
