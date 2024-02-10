import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
function Login(){
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Ingresa</h2>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Correo</strong></label>
                        <input typer="email" placeholder='Ingresa tu Correo' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Contraseña</strong></label>
                        <input typer="password" placeholder='Ingresa tu Contraseña'className='form-control rounded-0'/>
                    </div>
                    <button className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
                    <p>Te recomendamos leer nuestra política de privacidad</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text decoration-none'>Crear una cuenta</Link>
                </form>
            </div>
        </div>
    )
}

export default Login