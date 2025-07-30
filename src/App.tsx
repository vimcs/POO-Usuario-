// src/App.tsx

import { useState } from 'react';
import { Usuario } from './models/Usuario';
import './App.css';

function App() {
  const usuario = new Usuario('Lucas', 28, '123456');

  const [senhaDigitada, setSenhaDigitada] = useState('');
  const [senhaCorreta, setSenhaCorreta] = useState<boolean | null>(null);

  const verificar = () => {
    const resultado = usuario.verificarSenha(senhaDigitada);
    setSenhaCorreta(resultado);
  };

  return (
    <div>
      <h1>{usuario.apresentar()}</h1>

      <input
        type="password"
        placeholder="Digite sua senha"
        value={senhaDigitada}
        onChange={(e) => setSenhaDigitada(e.target.value)}
      />
      <button onClick={verificar}>Verificar Senha</button>

      {senhaCorreta !== null && (
        <p>Senha {senhaCorreta ? 'correta' : 'incorreta'}!</p>
      )}
    </div>
  );
}

export default App;
