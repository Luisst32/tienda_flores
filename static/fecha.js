function mostrarHora(){
    momentoActual=new Date();
    dia= momentoActual.getHours();
    mes= momentoActual.getMinutes();
  
    horaimprimble=dia+":"+mes;
    document.getElementById('mostrarHora').innerHTML=horaimprimble

}