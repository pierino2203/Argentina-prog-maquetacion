export const cuentaRegresiva = (deadLine) =>{
  const now = new Date(),
    remainTime = (new Date(deadLine) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes =('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime/(3600*24))
    console.log(`Dias: ${remainDays} ` + `Horas: ${remainHours}` + ` Minutos: ${remainMinutes}` + ` Segundos: ${remainSeconds}`)
    return{
      remainTime,
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
    }
}

export  const countDown = (deadLine,elem)  =>  {
    let el = document.getElementById(elem)
    const timeUpdate = setInterval( () => {
    let t = cuentaRegresiva(deadLine)
    el = `${t.remainDays}dias:${t.remainHours}horas:${t.remainMinutes}minutos:${t.remainSeconds}segundos:`
  },1000)
  
}