import { useEffect, useState } from "react";

export default function App() {
  
  const [fotos, setFotos] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dados = await reposta.json()           ;
        setFotos(dados);
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {}
      </ul>
    </>
  );
}
