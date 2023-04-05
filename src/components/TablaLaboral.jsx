import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";

export function TablaLaboral(){
  return  (
  <div class="container table-responsive">
     <div class="row">
      <div class='col'>
        <table className="table table-bordered table-primary table-striped table-hover table align-middle caption-top">
          <caption className="text-center"><strong>Experiencia Laboral</strong></caption>
          <thead >
            <tr>
              <th>Id</th>
              <th>Empresa</th>
              <th>Cargo</th>
              <th>Duracion</th>
              <th>Contacto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Compumax</td>
              <td>Venta de insumos de computacion-Atenciòn al publico</td>
              <td>Septiembre 2019 - Julio 2020</td>
              <td>+5411346555666</td>
            </tr>
            <tr>
              <td>2</td>
              <td>El Porvenir S.R.L</td>
              <td>Mantenimiento de Sistemas-Reparaciòn de PC</td>
              <td>Septiembre 2020 - Julio 2022</td>
              <td>+5411346555666</td>
            </tr>       
            <tr>
              <td>3</td>
              <td>Ummita en Chala</td>
              <td>Gestor de redes sociales</td>
              <td>Junio 2022 - Actual</td>
              <td>+5411346555666</td>
            </tr>  
          </tbody>
        </table>
      </div>
    </div>
    <div className="d-flex justify-content-center"> 
      <NavLink to='/home'><button class="btn btn-primary" type="button">Regresar</button></NavLink>
    </div>  
  </div>
    
      
    
  )
}