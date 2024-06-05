import React from 'react'
import useForm from '../hooks/useForm'
import { postProyects } from '../helpers/postProyects';

const RegistrarProyecto = () => {
  const {
    formState,
    onInputChange,
    onResetForm,
    id_proyecto,
    name,
    description,
    begin_date,
    end_date
  } = useForm({
    id_proyecto: '',
    name: '',
    description: '',
    begin_date: '',
    end_date: ''
  });

  const onSubmit = (event) => {
    event.preventDefault();
    postProyects(formState);
  };

  return (
    <div className="container-fluid p-5 bg-form-proyect text-white">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card text-dark">
            <div className="card-header bg-search-proyect text-white">
              <h3 className="text-center">Registrar Proyecto</h3>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit} aria-label="form">
                <div className="form-group">
                  <label htmlFor="id_proyecto">ID Proyecto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ID Proyecto"
                    name="id_proyecto"
                    value={id_proyecto}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Nombre del Proyecto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del Proyecto"
                    name="name"
                    value={name}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Descripción</label>
                  <textarea
                    className="form-control"
                    placeholder="Descripción"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="begin_date">Fecha de Inicio</label>
                  <input
                    type="date"
                    className="form-control"
                    name="begin_date"
                    value={begin_date}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="end_date">Fecha de Finalización</label>
                  <input
                    type="date"
                    className="form-control"
                    name="end_date"
                    value={end_date}
                    onChange={onInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-success btn-block mt-3 button-style">Registrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrarProyecto
