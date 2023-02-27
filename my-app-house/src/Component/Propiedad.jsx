import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import styled from "styled-components";

const Propiedad = ({ prop }) => {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3001/api/favorito/agregar/${usuario.id}`, {
        idUsuario: usuario.id,
        idPropiedades: prop.id,
        nombre: prop.nombre,
        precio: prop.precio,
        imagen: prop.imagen,
      })
      .then(() => swal("Propiedad agregada a Favoritos!"));
  };
  return (
    <Prop>
      <div className="card">
        <div className="row ">
          <div className="col-md-6">
            <img
              src={prop?.imagen[1]}
              className="img-fluid rounded-start"
              alt={prop?.nombre}
            />
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <>
                {usuario.nombre ? (
                  <div>
                    <Link to="/favoritos">
                      <button
                        class="favorito"
                        className="btn btn-warning"
                        onClick={handleSubmit}
                      >
                        💛
                      </button>
                    </Link>

                    <Link to={"/citas"}>
                      <button className="btn btn-warning">Contactar</button>
                    </Link>

                    <Link to={`/detalles/${prop.id}`}>
                      <button className="btn btn-warning">⭐ Detalles</button>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to={`/detalles/${prop.id}`}>
                      <button className="btn btn-warning">⭐ Detalles</button>
                    </Link>
                  </div>
                )}
              </>
              <hr />
              <h5 className="card-title">${prop?.precio}</h5>
              <h5 className="card-title">{prop?.nombre}</h5>
              <p className="card-text">
                <small className="text-muted">{prop?.ubicacion}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">{prop?.disponibilidad}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Prop>
  );
};

export default Propiedad;

const Prop = styled.div`
  .img-fluid {
    border-radius: 40px;
    margin-left: 18px;
    margin-bottom: 19px;
    margin-top: 17px;
  }
  .btn {
    margin-right: 12px;
    border: solid #fe4236;
    background-color: #fe4236;
    color: white;
  }
`;
