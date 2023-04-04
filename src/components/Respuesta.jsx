import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";

export function Respuesta() {
  const [timeDays,setTimeDays]=useState('00')
  const [timeHours,setTimeHours]=useState('00')
  const [timeMinutes,setTimeMinutes]=useState('00')
  const [timeSeconds,setTimeSeconds]=useState('00')

  useEffect(()=> {
    startTimer()
  })
  
  const startTimer = () =>  {
    const countDownDate = new Date( 'Mon Jun 27 2023 16:33:26 GMT-0300').getTime()
    const inteval =setInterval(()=> {
      const now = new Date().getTime()
      const distance = countDownDate - now 
      const days = Math.floor(distance / (1000 * 60 * 60 * 24)) 
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)/(1000 * 60 * 60))) 
      const minutes = Math.floor((distance % (1000 * 60 * 60 )/(1000 * 60 ))) 
      const seconds = Math.floor((distance % (1000 * 60  )/1000 )) 

      setTimeDays(days)
      setTimeHours(hours)
      setTimeMinutes(minutes)
      setTimeSeconds(seconds)
    })
  }
  return(
    <div className="container">
      <div className="text-center">
        <h1>Gracias por su Mensaje</h1>
      </div>
      <table className="table table-bordered table-primary table-striped table-hover table align-middle caption-top">
          <caption className="text-center"><strong>Cuenta Regresiva</strong></caption>
          <thead >
            <tr>
              <th>Dias</th>
              <th>horas</th>
              <th>Minutos</th>
              <th>Segundos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{timeDays}</td>
              <td>{timeHours}</td>
              <td>{timeMinutes}</td>
              <td>{timeSeconds}</td>
              
            </tr>
            
          </tbody>
        </table>
        <div className="d-flex justify-content-center"> 
          <NavLink to='/home'><button class="btn btn-primary" type="button">Regresar</button></NavLink>
        </div>  
      
      
      
      
      
      
      
      
      
      
      
      
      {/* <div className="row">
        <h1>Gracias por contactarme, le contestare a la brevedad</h1>
        <div>
          <h4>Cuenta Regresiva</h4>
        </div>
        
      </div>
      <div className="row">
      <div className="d-flex justify-content-center border align-items-baseline badge bg-primary text-wrap ">
          <div className="row">
          <div className='col'> 
            <div className="border">
              <p>{timeDays}</p>
            </div>
            <p><small>Dias</small></p>
          </div>
          </div>
          <div className="col">
            <div className="border">
              <p>{timeHours}</p>
            </div>
            <p><small>Hs</small></p>
          </div>
          <div className="col">
            <div className="border">
              <p>{timeMinutes}</p>
            </div>
            <p><small>Min</small></p>
          </div>
          <div className="col">
            <div className="border">
              <p>{timeSeconds}</p>
              
            </div>
            <p><small>Seg</small></p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <NavLink to='/home'>
            <button class="btn btn-primary" type="button">Regresar</button>
          </NavLink>
        </div>
      </div> */}
    </div>
  )
}