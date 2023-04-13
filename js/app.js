/*Crear una  web con un reloj que muestre la siguiente información:

dia de la semana (jueves 25) de  mes (octubre) del año(2023)*/
function obtenerdatos(){
    let fecha= document.querySelector("#fecha")
    let hora= document.querySelector("#hora")
    let fechaActual = new Date(); // objeto day
    //console.log(fechaActual);
    //console.log(fechaActual.getDate());//1-31 dia 11 por ejemplo
    //console.log(fechaActual.getDay());//0-6 numero del dia de la semana
    //console.log(fechaActual.getMonth());//0-11 
    //console.log(fechaActual.getFullYear());
    
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
    
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    
    fecha.innerHTML=`${daysOfWeek[fechaActual.getDay()]} ${fechaActual.getDate()} de ${months[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
    
    //Martes 11 de abril 2023
    //10:35:00
    hora.innerHTML= `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`
}
setInterval(obtenerdatos,1000);