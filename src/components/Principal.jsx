import React from "react";
import { NavLink } from "react-router-dom";
import pier from '../imagenes/pier.jpeg'
import about from '../imagenes/about.jpg'
import { TablaLaboral } from "./TablaLaboral";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from "./Footer";
import S from '../styles/Principal.module.css'
import { Navbar } from "./Navbar";
import 'bootstrap-icons/font/bootstrap-icons.json'


export function Principal (){
  return(

    <div className={` container ${S.container}`}  >
      <div className="row p-1">
        <div className=" col-md-6  d-flex justify-content-center align-items-center col-lg-4 d-flex justify-content-center align-items-center text-dark">
          <img src={pier} alt="recipe image" className={ `rounded-circle border img-fluid ${S.imgC}`} />  
        </div>
        <div className="col-md-6 col-lg-8 d-flex justify-content-center align-items-center  text-white ">
          <div>
            <h1 ><span>Pierino Juncos</span></h1>
            <h2><span>Full Stack Develpment</span></h2>
            <div className=" border rounded-4 p-1 bg-primary text-white">
              <h2 >Perfil Profesional</h2>
              <p>Hola! Soy pierino, Full Stack Developer con formación en diseño web,
              Experiencia en tecnologías
              como Node.js, React,
              Postgres, MongoDB, entre
              otras. Siempre curioso y
              abierto a aprender nuevas
              tecnologías, con
              pensamiento creativo y uso
              lógico para resolución de
              problemas
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex flex-row-reverse ">
        <div className="column col-lg-9 col-md-7">
          <div className="mx-auto p-1 ">
            < div className=" border rounded-4  mx-auto p-1 bg-primary text-white">
              <h2>Educacion</h2>
              <div className="d-flex flex-column">
                <span><strong>Universidad Tecnologica Nacional</strong></span>
                <span> -Ingenieria en Sistemas de la Informacion (En curso)</span>
                <span><strong>Full Stack Developer </strong></span>
                <span> -Argentina Programa 4.0(Marzo 2023-en curso)</span>
              </div>
            </div>
          </div>  
          <div className="mx-auto p-1 ">
            < div className=" border rounded-4  mx-auto p-1 bg-primary text-white">
              <h2>Tecnologías</h2>
              <div className="d-flex flex-column">
                <span>-Css</span>
                <span>-JavaScript</span>
                <span>-React</span>
                <span>-Nodejs</span>
                <span>-MongoDB</span>
                <span>-Sequelize</span>
                <span>-Git</span>
                <span>-Bootstrap</span>
                <span>Express</span>
              </div>
            </div>
          </div>    
        </div>
        <div className="column col-lg-3 col-md-5 ">
          < div className="border rounded-4  m-2 p-1 bg-primary text-white">
            <h2>Idiomas</h2>
            <div className="d-flex flex-column">
              <span>*Ingles-Intermedio</span>
              <span>*Español-Nativo</span>
            </div>  
          </div>
          < div className="border rounded-4  m-2 p-1 bg-primary text-white">
            <h2>Otras Hab.</h2>
            <div className="d-flex flex-column">
              <span>*Trabajo en equipo</span>
              <span>*Disponibilidad full time</span>
            </div>
          </div>
          < div className="border rounded-4  m-2 p-1 d-flex flex-column justify-content-center align-items-center bg-primary text-white">
            <h2>Expreciencia</h2>
            <div className="">
               <NavLink to='/experiencia'><a class="btn btn-dark"  role="button">Ingresar</a></NavLink> 
            </div>
          </div>
          < div className="border rounded-4  m-2 p-1 d-flex flex-column justify-content-center align-items-center bg-primary text-white">
            <h2>Contacto</h2>
            <div className="">
              <NavLink to='/contacto'><a class="btn btn-dark" role="button">Ingresar</a></NavLink>
            </div>
          </div>
        </div>  
      </div>
    </div> 
    
  
      
        


  
      
  
    

 )
}