class celulares{
    constructor(color, peso, resolucion, camara, ram,encender){
        this.color = color
        this.peso = peso
        this.resolucion = resolucion
        this.camara = camara 
        this.ram = ram
        this.encender = false
        }

    tomarfoto(){
        alert("Haz tomado una foto");
    }

    grabarvideo(){
        alert("Haz tomado un video")
    } 

    reiniciar(){
        if(this.encender == true){
            alert("Encendiendo equipo")
        } else{
            alert("El equipo se esta reiniciando")
        }  
    }

    encender(){
        alert("Equipos encendiendose")
    }
}

const celularuno = new celulares("Gris", "52gr", "1080", "8 mgpx", "2 gb");
const celulardos = new celulares("Rosado", "150gr", "720", "10 mgpx", "3 gb");
const celulartres = new celulares("negro", "152gr", "1080", "16 mgpx", "4 gb");

//fotos 

const botonHTML = document.querySelector('#foto1');
const botonHTML2 = document.querySelector('#foto2');
const botonHTML3 = document.querySelector('#foto3');

botonHTML.addEventListener('click',celularuno.tomarfoto);
botonHTML2.addEventListener('click',celulardos.tomarfoto);
botonHTML3.addEventListener('click',celulartres.tomarfoto);

//grabar 

const botonHTML4 = document.querySelector('#grabar1');
const botonHTML5 = document.querySelector('#grabar2');
const botonHTML6 = document.querySelector('#grabar3');

botonHTML4.addEventListener('click',celularuno.grabarvideo);
botonHTML5.addEventListener('click',celulardos.grabarvideo);
botonHTML6.addEventListener('click',celulartres.grabarvideo);

//reinicio

const botonHTML7 = document.querySelector('#reiniciar1');
const botonHTML8 = document.querySelector('#reiniciar2');
const botonHTML9 = document.querySelector('#reiniciar3');

botonHTML7.addEventListener('click',celularuno.reiniciar);
botonHTML8.addEventListener('click',celulardos.reiniciar);
botonHTML9.addEventListener('click',celulartres.reiniciar);

