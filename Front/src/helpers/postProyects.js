export const postProyects = async (proyectoData) => {
  try {
    const url = 'https://tu-api.com/proyectos';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(proyectoData)
    });

    if (!response.ok) {
      throw new Error('Error al crear el proyecto');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear el proyecto:', error.message);
    throw error;
  }
}
