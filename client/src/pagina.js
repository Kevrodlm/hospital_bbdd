import './App.css';
import React from 'react';
import { useState, useEffect   } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';


function Pagina() {
  //set inputs
  const[nombres,setNombres] =useState("");
  const[costo,setCosto] =useState(0);
  const[tamanio,setTamanio] =useState("");
  //boton registrar
  
  //la lista
  const[FlorList,setFlor] = useState([]);
  useEffect(() => {
    getFlor(); 
  }, []);

  const add = ()=>{
    Axios.post("http://localhost:3001/create",{
      nombres:nombres,
      costo:costo,
      tamanio:tamanio,
    }).then(()=>{
      getFlor();
      alert("Flor registrada");
    });
  }

  //llamada a nuestra informacion
  const getFlor = ()=>{
    Axios.get("http://localhost:3001/lista")
    .then((response) => {
      setFlor(response.data);
    })
    .catch((error) => {
      console.error('Error al obtener la lista de clientes:', error);
    });
  }
  

  return (
    
    <div className="container">
    <div className="card text-center">
      <div className="card-header bg-dark text-white">
        GESTION DE Productos manejados por la empresa
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nombres:</span>
          <input type="text" onChange={(event)=>{setNombres(event.target.value)}} 
            className="form-control" placeholder="Ingrese un nombre" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Costo:</span>
          <input type="number" onChange={(event)=>{setCosto(event.target.value)}} 
            className="form-control" placeholder="Ingrese un Costo" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Tamaño:</span>
          <input type="text" onChange={(event)=>{setTamanio(event.target.value)}} 
            className="form-control" placeholder="Ingrese un Tamaño" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        
      </div>
      <div className="card-footer text-body-secondary">
        <button className= 'btn btn-success' onClick={add}>Registrar</button>
      </div>
    </div>
    
    <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col" className="table-active">#</th>
          <th scope="col" className="table-active">Nombre</th>
          <th scope="col" className="table-active">Costo</th>
          <th scope="col" className="table-active">Tamaño </th>
        </tr>
      </thead>
      <tbody>
        {FlorList.map((val, key) => (
          <tr key={key} className={key % 2 === 0 ? 'table-light' : 'table'}>
            <th scope="row">{val.flores_ID}</th>
            <td>{val.nombre}</td>
            <td>{val.costo}</td>
            <td>{val.tamaño}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Pagina;
