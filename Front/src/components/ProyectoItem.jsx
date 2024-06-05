
export const ProyectoItem = ({ id_proyecto, name, description, begin_date, end_date }) => {
  return (
    <div className="card">
      <p>{id_proyecto}</p>
      <p>{name}</p>
      <p>{description}</p>
      <p>{begin_date}</p>
      <p>{end_date}</p>
    </div>
  )
}

export default ProyectoItem;
