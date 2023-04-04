import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export function Footer(){
  return(
    <div class="p-3 mb-2 bg-secondary text-white ">
      <div>
        <div className="d-flex justify-content-center">
          <h1>Juncos Pierino</h1>
        </div>
        <div className="d-flex justify-content-center">
          <h3>Full Stack Development</h3>
        </div>
        <div className="d-flex justify-content-center">
          <NavLink to='/contacto'><button class="btn btn-primary" type="button" >Contactame</button></NavLink> 
        </div>
      </div>
    </div>
  )
}