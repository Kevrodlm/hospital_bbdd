import React from 'react';

import './App.css';

import {Link} from 'react-router-dom';

function Signup() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Registrarse</h2>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Nombre</strong></label>
                        <input typer="text" placeholder='Ingresa tu Nombre' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Apellido Paterno</strong></label>
                        <input typer="text" placeholder='Ingresa tu Apellido Paterno' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Apellido Materno</strong></label>
                        <input typer="text" placeholder='Ingresa tu Apellido Materno' className='form-control rounded-0'/>
                    </div>
                    
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>DNI</strong></label>
                        <input typer="number" placeholder='Ingresa tu DNI' className='form-control rounded-0'/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Teléfono</strong></label>
                        <input typer="number" placeholder='Ingresa tu Teléfono' className='form-control rounded-0'/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Fecha de nacimiento</strong></label>
                        <input typer="date" placeholder='Ingresa tu Fecha de nacimiento' className='form-control rounded-0'/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Nacionalidad</strong></label>
                        <input typer="text" placeholder='Ingresa tu Nacionalidad' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Género</strong></label>
                        <input typer="text" placeholder='Ingresa tu Género' className='form-control rounded-0'/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Correo</strong></label>
                        <input typer="email" placeholder='Ingresa tu Correo' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Contraseña</strong></label>
                        <input typer="password" placeholder='Ingresa tu Contraseña'className='form-control rounded-0'/>
                    </div>
                    <button className='btn btn-success w-100 rounded-0'><strong>Registrarte</strong></button>
                    <p>Te recomendamos leer nuestra política de privacidad</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text decoration-none'>¿Ya tienes una cuenta? Logeate</Link>
                </form>
            </div>
        </div>
  );
}

export default Signup;
