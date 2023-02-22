import Navbar from "./Component/Navbar";
import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Component/Home";
import Registro from "./Component/Registro";
import Login from "./Component/Login";
import DetallesProp from "./Component/DetallesProp";
import TodosLosFavoritos from "./Component/TodosLosFavoritos";
import MiPerfil from "./Component/MiPerfil";
import Admin from "./Component/Admin";
import AdminEditarProp from "./Component/AdminEditarProp";
import Citas from "./Component/Citas";
import AdminCitas from "./Component/AdminCitas";
import BusquedaEncontrada from "./Component/BusquedaEncontrada";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/editar/:id" element={<AdminEditarProp />} />
        <Route path="registro" element={<Registro />} />
        <Route path="login" element={<Login />} />
        <Route path="/detalles/:id" element={<DetallesProp />} />
        <Route path="/favoritos" element={<TodosLosFavoritos />} />
        <Route path="/perfil" element={<MiPerfil />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/admincitas" element={<AdminCitas />} />
        <Route path="/encontrado" element={<BusquedaEncontrada />} />
      </Routes>
    </>
  );
}

export default App;
