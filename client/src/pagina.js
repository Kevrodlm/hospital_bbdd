import './App.css';
import React from 'react';
import { useState, useEffect   } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';


function Pagina() {
  //set inputs
  const[nombres,setNombres] =useState("");
  const[apellidop,setApellidoP] =useState("");
  const[apellidom,setApellidoM] =useState("");
  const[direccion,setDirección] =useState("");
  const[telefeno,setTelefono] =useState("");
  const[edad,setEdad] =useState(0);
  const[cantidadmas,setMascotas] =useState(0);
  //boton registrar
  
  //la lista
  const[ClientList,setClient] = useState([]);
  useEffect(() => {
    getClient(); 
  }, []);

  const add = ()=>{
    Axios.post("http://localhost:3001/create",{
      nombres:nombres,
      apellidop:apellidop,
      apellidom:apellidom,
      direccion:direccion,
      telefeno:telefeno,
      edad:edad,
      cantidadmas:cantidadmas,
    }).then(()=>{
      getClient();
      alert("Usuario registrado");
    });
  }

  //llamada a nuestra informacion
  const getClient = ()=>{
    Axios.get("http://localhost:3001/lista")
    .then((response) => {
      setClient(response.data);
    })
    .catch((error) => {
      console.error('Error al obtener la lista de clientes:', error);
    });
  }
  

  return (
    
    <div className="container">
    <div className="card text-center">
      <div className="card-header bg-dark text-white">
        GESTION DE Clientes por atender
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nombres:</span>
          <input type="text" onChange={(event)=>{setNombres(event.target.value)}} 
            className="form-control" placeholder="Ingrese un nombre" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Apellido Paterno:</span>
          <input type="text" onChange={(event)=>{setApellidoP(event.target.value)}} 
            className="form-control" placeholder="Ingrese un Apellido Paterno" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Apellido Materno:</span>
          <input type="text" onChange={(event)=>{setApellidoM(event.target.value)}} 
            className="form-control" placeholder="Ingrese un Estudio de Apellido Paterno" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Dirección:</span>
          <input type="text" onChange={(event)=>{setDirección(event.target.value)}} 
            className="form-control" placeholder="Ingrese una Dirección" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Teléfono:</span>
          <input type="number" onChange={(event)=>{setTelefono(event.target.value)}} 
            className="form-control" placeholder="Ingrese una Teléfono" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Edad:</span>
          <input type="number" onChange={(event)=>{setEdad(event.target.value)}} 
            className="form-control" placeholder="Ingrese una Edad" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Cantidad de mascotas:</span>
          <input type="number" onChange={(event)=>{setMascotas(event.target.value)}} 
            className="form-control" placeholder="Ingrese una Cantidad de mascotas" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
        
      </div>
      <div className="card-footer text-body-secondary">
        <button className= 'btn btn-success' onClick={add}>Registrar</button>
      </div>
    </div>
    
    <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col" className="table-active">DNI</th>
          <th scope="col" className="table-active">Nombres</th>
          <th scope="col" className="table-active">Apellido paterno</th>
          <th scope="col" className="table-active">Apellido materno</th>
          <th scope="col" className="table-active">Dirección</th>
          <th scope="col" className="table-active">Teléfono</th>
          <th scope="col" className="table-active">Edad</th>
          <th scope="col" className="table-active">Cantidad_mascotas</th>
        </tr>
      </thead>
      <tbody>
        {ClientList.map((val, key) => (
          <tr key={key} className={key % 2 === 0 ? 'table-light' : 'table'}>
            <th scope="row">{val.DNI}</th>
            <td>{val.Nombres}</td>
            <td>{val.Apellido_paterno}</td>
            <td>{val.Apellido_materno}</td>
            <td>{val.Dirección}</td>
            <td>{val.Teléfono}</td>
            <td>{val.Edad}</td>
            <td>{val.Cantidad_mascotas}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Pagina;
