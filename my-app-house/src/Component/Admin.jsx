import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import AdminPropiedad from "./AdminPropiedad";
import AgregarPropiedad from "./AgregarPropiedad";
import styled from "styled-components";

const Admin = () => {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/usuarios", {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  const handleSubmit = (id) => {
    axios
      .delete(`http://localhost:3001/api/users/borrarUser/${id}`, {
        withCredentials: true,
      })

      .then(() => swal("Usuario eliminado!"))

      .then(() => {
        window.location.reload(false);
      });
  };

  return (
    <AdminSti>
      <>
        {usuario.admin ? (
          <div className="container  d-flex justify-content-center d-flex align-items-center">
            <div className="row ">
              <div className="mb-3 d-flex justify-content-center">
                <h1>Perfil de Administrador</h1>
              </div>

              <div className="card-body">
                <div className="mb-3 ">
                  <h1>Lista de Usuarios</h1>
                </div>

                <ul className="list-group list-group-flush">
                  {user.map((usuarios) => {
                    return (
                      <li key={usuarios.id} className="list-group-item">
                        {usuarios.nombre}
                        <br />
                        {usuarios.celular}
                        <br />
                        {usuarios.email}
                        <br />
                        {usuarios.updatedAt}
                        <br />
                        <button
                          className="btn btn-outline-warning"
                          onClick={() => handleSubmit(usuarios.id)}
                        >
                          🗑 Eliminar
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="container">
                <AgregarPropiedad />
              </div>
              <div className="container">
                <AdminPropiedad />
              </div>
            </div>
          </div>
        ) : (
          <h1>NO SOS ADMIN</h1>
        )}
      </>
    </AdminSti>
  );
};

export default Admin;

const AdminSti = styled.div`
  h1 {
    color: #123ac8;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    font-size: medium;

    padding-left: 8px;
    padding-top: 26px;
    height: 42px;

    margin-left: 13px;
    margin-top: 14px;
  }
  h5 {
    color: black;
    font-family: "Times New Roman", Times, serif;
    font-size: medium;
  }
  .btn-secondary {
    color: white;

    --bs-btn-bg: #dc3545;
  }
  .card {
    width: 660px;
    padding-bottom: 19px;
    padding-left: 21px;
    padding-top: 17px;
  }
`;
