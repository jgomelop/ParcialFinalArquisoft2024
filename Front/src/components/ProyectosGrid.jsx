import useFetchProyects  from "../hooks/useFetchProyects ";
import ProyectoItem from "./ProyectoItem";


export const ProyectosGrid = ({ proyect }) => {

  const { proyects, isLoading } = useFetchProyects( proyect );
  
  return (
    <>     
      {
        isLoading
        && (<h2>Cargando...</h2>)
      }

      <div className="card-grid">
        {
          proyects.map((proyect) => (
            <ProyectoItem
              key={proyect.id}
              { ...proyect }
            />
          ))
        }
      </div>
    </>
  )
}

export default ProyectosGrid;