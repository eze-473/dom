const cambiartitulo = () =>{
    console.log("preuba a cambiar titulo")
    //buscar el elemnto doom
      const tituloprincipal = document.getElementById("titulo")
    //const tituloprincipal = document.getElementsByTagName("h1")
    //const tituloprincipal = document.querySelector("#titulo")
    console.log(tituloprincipal)
    //modificar el elemento doom
    //tituloprincipal.innerText="practica doom"
    //tituloprincipal.innerHTML="practica<strong> doom</strong>"
    //tituloprincipal.className="display-4 titulorojo"
   
    //tituloprincipal.classList.remove("titulorojo")
}
const btnvermas = document.querySelector("btn btn-secundary")
console.log("botno")
function crearparrafo(){
    console.log("pruva")
    const parrafonuevo= document.createElement("p")
    parrafonuevo.innerText = "lorem"
    parrafonuevo.className =
}
//agregar evento al boton
btnvermas.addEventListener("click",crearparrafo)