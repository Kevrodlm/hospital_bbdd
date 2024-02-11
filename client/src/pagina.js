import './App.css';
import React from 'react';
import { useState, useEffect   } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';


function Pagina() {
  //set inputs
  const[nombre,setNombre] =useState("");
  const[medicamentos,setMedicamentos] =useState("");
  const[sintomas,setSintomas] =useState("");
  const[mortalidad,setMortalidad] =useState(0);
  //boton registrar
  
  //la lista
  const[EnList,setEn] = useState([]);
  useEffect(() => {
    getEn(); 
  }, []);

  const add = ()=>{
    Axios.post("http://localhost:3001/create",{
    nombre:nombre,
    medicamentos:medicamentos,
    sintomas:sintomas,
    mortalidad:mortalidad,
    }).then(()=>{
      getEn();
      alert("Flor registrada");
    });
  }

  //llamada a nuestra informacion
  const getEn = ()=>{
    Axios.get("http://localhost:3001/lista")
    .then((response) => {
      setEn(response.data);
    })
    .catch((error) => {
      console.error('Error al obtener la lista de doctores:', error);
    });
  }
  

  return (
    
    <div className="container">
    <div className="card text-center">
      <div className="card-header bg-dark text-white">
        REGISTRO DE ENFERMEDADES:   
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nombre:</span>
          <input type="text" onChange={(event)=>{setNombre(event.target.value)}} 
            className="form-control" placeholder="Ingrese el Nombre de la enfermedad" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Medicamentos:</span>
          <input type="text" onChange={(event)=>{setMedicamentos(event.target.value)}} 
            className="form-control" placeholder="Ingrese el Medicamento" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Síntomas:</span>
          <input type="text" onChange={(event)=>{setSintomas(event.target.value)}} 
            className="form-control" placeholder="Ingrese sus Síntomas" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Tasa de mortalidad:</span>
          <input type="number" onChange={(event)=>{setMortalidad(event.target.value)}} 
            className="form-control" placeholder="Ingrese la Tasa de mortalidad" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        

        
      </div>
      <div className="card-footer text-body-secondary">
        <button className= 'btn btn-success' onClick={add}>Registrar</button>
      </div>
    </div>
    
    <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col" className="table-active">Nombre</th>
          <th scope="col" className="table-active">Medicamento</th>
          <th scope="col" className="table-active">Síntomas</th>
          <th scope="col" className="table-active">Tasa de mortalidad </th>
        </tr>
      </thead>
      <tbody>
        {EnList.map((val, key) => (
          <tr key={key} className={key % 2 === 0 ? 'table-light' : 'table'}>
            <td>{val.nombre}</td>
            <td>{val.medicamentos}</td>
            <td>{val.sintomas}</td>
            <td>{val.tasa_mortalidad}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Pagina;
