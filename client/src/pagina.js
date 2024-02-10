import './App.css';
import React from 'react';
import { useState, useEffect   } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';


function Pagina() {
  //set inputs
  const[titulo,setTitulo] =useState("");
  const[idioma,setIdioma] =useState("");
  const[estudio,setEstudioFilmacion] =useState("");
  const[clasificacion,setClasificacion] =useState("");
  const[sinopsis,setSinopsis] =useState("");
  const[fecha,setFecha] =useState(0);
  //boton registrar
  
  //la lista
  const[PeliculaList,setPelicula] = useState([]);
  useEffect(() => {
    getPeli(); 
  }, []);

  const add = ()=>{
    Axios.post("http://localhost:3001/create",{
      titulo:titulo,
      idioma:idioma,
      estudio:estudio,
      clasificacion:clasificacion,
      sinopsis:sinopsis,
      fecha:fecha
    }).then(()=>{
      getPeli();
      alert("Usuario registrado");
    });
  }

  //llamada a nuestra informacion
  const getPeli = ()=>{
    Axios.get("http://localhost:3001/lista")
    .then((response) => {
      setPelicula(response.data);
    })
    .catch((error) => {
      console.error('Error al obtener la lista de películas:', error);
    });
  }
  

  return (
    
    <div className="container">
    <div className="card text-center">
      <div className="card-header bg-dark text-white">
        GESTION DE PELICULAS
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Título:</span>
          <input type="text" onChange={(event)=>{setTitulo(event.target.value)}} 
            className="form-control" placeholder="Ingrese un Título" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Idioma:</span>
          <input type="text" onChange={(event)=>{setIdioma(event.target.value)}} 
            className="form-control" placeholder="Ingrese un Idioma" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Estudio de filmación:</span>
          <input type="text" onChange={(event)=>{setEstudioFilmacion(event.target.value)}} 
            className="form-control" placeholder="Ingrese un Estudio de filmación" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Clasificación:</span>
          <input type="text" onChange={(event)=>{setClasificacion(event.target.value)}} 
            className="form-control" placeholder="Ingrese una Clasificación" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Sinopsis:</span>
          <input type="text" onChange={(event)=>{setSinopsis(event.target.value)}} 
            className="form-control" placeholder="Ingrese una Sinopsis" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Fecha:</span>
          <input type="date" onChange={(event)=>{setFecha(event.target.value)}} 
            className="form-control" placeholder="Ingrese una Fecha" aria-label="Username" aria-describedby="basic-addon1"></input>
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
          <th scope="col" className="table-active">Título</th>
          <th scope="col" className="table-active">Idioma</th>
          <th scope="col" className="table-active">Estudio</th>
          <th scope="col" className="table-active">Clasificación</th>
          <th scope="col" className="table-active">Sinopsis</th>
          <th scope="col" className="table-active">Fecha</th>
        </tr>
      </thead>
      <tbody>
        {PeliculaList.map((val, key) => (
          <tr key={key} className={key % 2 === 0 ? 'table-light' : 'table'}>
            <th scope="row">{val.id_pelicula}</th>
            <td>{val.Titulo}</td>
            <td>{val.Idioma}</td>
            <td>{val.Estudio_filmacion}</td>
            <td>{val.Clasificacion}</td>
            <td>{val.Sinopsis}</td>
            <td>{val.fecha.split('T')[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Pagina;
