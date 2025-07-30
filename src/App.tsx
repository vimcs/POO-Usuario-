import { Usuario } from './models/Usuario'
import './App.css'

function App() {
 
const u2 = new Usuario('Flavin do Pnel' , 54);
const ul = new Usuario('João da silva', 35);

ul.nome = 'Marcos';

  return (
    <>
      <p>{ul.apresentar()}</p>
      <p>{u2.apresentar()}</p>
    </>
  )
}

export default App
