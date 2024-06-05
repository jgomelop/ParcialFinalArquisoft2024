import BuscadorProyectos from './components/BuscadorProyectos';
import { useState } from 'react';
import ProyectosGrid from './components/ProyectosGrid';

export const Proyectos = () => {
  const [proyectos, setProyectos] = useState(['']);

  const onAddCedula = (newCedula) => {
    if (proyectos.includes(newCedula.toLowerCase())) return;
    setProyectos([newCedula, ...categories]);
  }

  return (
    <>
      <BuscadorProyectos onNewCedula={onAddCedula}/>

      {proyectos.map((proyect)=> (
          <ProyectosGrid
            key={proyect}
            proyect={proyect}
          />
      ))}
    </>
  )
}

export default Proyectos;
