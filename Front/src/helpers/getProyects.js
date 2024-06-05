
export const getProyects = async (cedula) => {
  const url = `http://localhost:8080/api/projects/${cedula}`
  const resp = await fetch(url);
  const { data } = await resp.json();

  const proyecto = data.map(proy => ({
    id: proy.id,
    name: proy.name,
    description:proy.description,
    employees: proy.employees
  }));

  return proyecto;
}