import React from "react";
import { NavLink } from "react-router-dom";
import S from '../styles/Principal.module.css'

export function FormContact(){
  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col">
    //       <h1>Contacto</h1>
    //       <h2>Comunicate conmigo!</h2>
    //       <h2>pierinoe@gmail.com</h2>
    //       <h2>4000, San Miguel de Tucuman, Tucuman</h2>
    //       <h2>+5438156748433</h2>
    //     </div>
    //     <div>
    //       <form action="">
    //         <div>
    //           <label>Nombre:</label>
    //           <input
    //           type='text'
    //           placeholder="Nombre y apellido"
    //           name="nombre"
    //           />
    //         </div>
    //         <div>
    //           <label>Email:</label>
    //           <input
    //           type='text'
    //           placeholder="Ingrese un mail valido"
    //           name="email"
    //           />
    //         </div>
    //         <div>
    //           <label>Nombre:</label>
    //           <input
    //           type='text'
    //           placeholder="Nombre y apellido"
    //           name="nombre"
    //           />
    //         </div>
    //         <div>
    //           <label>Asunto:</label>
    //           <input
    //           type='text'
    //           placeholder="Ingrese su consulta"
    //           name="asunto"
    //           />
    //           <div>
    //             <NavLink to='/respuesta'>
    //               <button>Enviar</button>
    //             </NavLink>
    //           </div>
    //           <div className="d-flex justify-content-center"> 
    //             <NavLink to='/home'><button class="btn btn-primary" type="button">Regresar</button></NavLink>
    //           </div>  
    //         </div>

    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className={`container d-flex justify-content-center align-item-center ${S.container1}`}>
      <div className={`row ${S.rowForm}`}>
        <div className="column col-lg-6">
          <h2>Contacto</h2>
          <a href="tel:+5438156748433"><h3>+5438156748433</h3></a>
          <a href="mailto:pierinoe@gmail.com"><h3>pierinoe@gmail.com</h3></a>
          <h3>4000, San Miguel de Tucuman, Tucuman</h3>
          <NavLink to='/home'><button class="btn btn-primary" type="button">Regresar</button></NavLink>
          
          
        </div>
        <div className="column col-lg-6">
        <form>
          <div className="row">
            <div className="column col-md-5 col-lg-6">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
            </div>
            <div className="column col-md-5 col-lg-6">
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Mail</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Asunto</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Mensaje</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="text-center">
            <NavLink to='/respuesta'><button type="submit" class="btn btn-primary">Submit</button></NavLink>
            
    
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}