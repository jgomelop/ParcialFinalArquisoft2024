import { useState } from 'react';

export const BuscadorProyectos = ({onNewCedula}) => {
  const [inputValue, setInputValue] = useState(null);

  const onInputChanges = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const cleanInputValue = inputValue.trim();
    if (cleanInputValue.length <= 1) return;
    setInputValue('');
    onNewCedula(cleanInputValue)
  }

  return (
    <div className="container-fluid p-5 bg-form-proyect text-white">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card text-dark">
            <div className="card-header bg-search-proyect text-white">
              <h3 className="text-center">Busca tus proyectos</h3>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit} aria-label="form">
                <div className="form-group">
                  <label htmlFor="proyectName">Número De Cedula</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Número de cedula"
                    name="cedula"
                    value={inputValue}
                    onChange={onInputChanges}
                  />
                </div>
                <button type="submit" className="btn btn-success btn-block mt-3 button-style">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuscadorProyectos;