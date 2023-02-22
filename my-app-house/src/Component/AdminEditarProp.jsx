import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useInput from "../Hooks/useInput";

const AdminEditarProp = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editar, setEditar] = useState({});

  const ubicacion = useInput();
  const estado = useInput();
  const nombre = useInput();
  const barrio = useInput();
  const pais = useInput();
  const disponibilidad = useInput();
  const precio = useInput();
  const descripcion = useInput();
  const categoria = useInput();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/propiedades/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        return res.data;
      })
      .then((editar) => {
        setEditar(editar);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3001/api/propiedades/${id}`,

        {
          ubicacion: ubicacion.value,
          estado: estado.value,
          nombre: nombre.value,
          barrio: barrio.value,
          pais: pais.value,
          disponibilidad: disponibilidad.value,
          precio: precio.value,
          descripcion: descripcion.value,
          categoria: categoria.value,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => navigate(`/detalles/${id}`))
      .catch((error) => error);
  };

  return (
    <div>
      <main className="form-signin">
        <form className="row" onSubmit={handleSubmit}>
          <div className="Auto">
            <label for="floatingInput">Ubicabion </label>
            <p>{editar.ubicacion}</p>
            <input
              {...ubicacion}
              type="text"
              className="form-control"
              aria-describedby="ubicacion"
              placeholder="Editar"
            />
          </div>
          <div className="Auto">
            <label for="floatingInput">Estado </label>
            <p>{editar.estado}</p>
            <input
              {...estado}
              type="text"
              className="form-control"
              placeholder="Editar"
            />
          </div>
          <div className="mb-3">
            <label for="floatingInput">Nombre </label>
            <p>{editar.nombre}</p>
            <input
              {...nombre}
              type="text"
              className="form-control"
              placeholder="Editar"
            />
          </div>
          <div className="mb-3">
            <label for="floatingInput">Barrio </label>
            <p>{editar.barrio}</p>
            <input
              {...barrio}
              type="text"
              className="form-control"
              placeholder="Editar"
            />
          </div>
          <div className="mb-3">
            <label for="floatingInput">Pais </label>
            <p>{editar.pais}</p>
            <input
              {...pais}
              type="text"
              className="form-control"
              placeholder="Editar"
            />
          </div>
          <div className="mb-3">
            <label for="floatingInput">Disponibilidad </label>
            <p>{editar.disponibilidad}</p>
            <input
              {...disponibilidad}
              type="text"
              className="form-control"
              placeholder="Editar"
            />
          </div>
          <div className="mb-3">
            <label for="floatingInput">Precio </label>
            <p>{editar.precio}</p>
            <input
              {...precio}
              type="number"
              className="form-control"
              placeholder="Editar"
            />
          </div>
          <div className="mb-3">
            <label for="floatingInput">Descripcion </label>
            <p>{editar.descripcion}</p>
            <input
              {...descripcion}
              type="text"
              className="form-control"
              placeholder="Editar"
            />
          </div>

          <button type="submit" class="w-100 btn btn-lg btn-primary">
            Guardar
          </button>
        </form>
      </main>
    </div>
  );
};

export default AdminEditarProp;
