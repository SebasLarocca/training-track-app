
const entrenamientos        = [];
const componentes           = [];

// selectores generales
const main = document.querySelector('#main');
const intro = document.querySelector('#intro')

// Selectores entrenamiento
const inputFechaProgramada      = document.querySelector('#input-fechaProgramada');
const inputTipoEntrenamiento    = document.querySelector('#input-tipoEntrenamiento');
const inputDuracion             = document.querySelector('#input-duracion');
const inputVueltas              = document.querySelector('#input-vueltas');

// Selectores componente
const inputPeso                 = document.querySelector('#input-peso');
const inputElemento             = document.querySelector('#input-elemento');
const inputEjercicio            = document.querySelector('#input-ejercicio');
const inputRepeticiones         = document.querySelector('#input-repeticiones');
const inputMetros               = document.querySelector('#input-metros');

// Selectores de planificación
const listaEntrenamientos       = document.querySelector('#entrenamientos');

// Selectores de botones
const botonComponente           = document.querySelector('#buttonInputComponente');
const botonEntrenamiento        = document.querySelector('#buttonInputEntrenamiento');
const botonAgregaEntrenamiento  = document.querySelector('#buttonAgregaEntrenamiento');
const botonDefinirEntrenamiento = document.querySelector('#buttonDefinirEntrenamiento');

// script para la intro de inicio:
main.style.visibility = "hidden";
setTimeout(() => {
    intro.style.visibility = 'hidden';
    main.style.visibility = "visible";
    
}, 1000);

// metodos

const init = ()=>{
    botonEntrenamiento.disabled = true;
    botonAgregaEntrenamiento.disabled = true;
    botonDefinirEntrenamiento.disabled = true;
    botonComponente.disabled = false;

};


init();

const habilitaEntrenamiento = ()=>{

    botonComponente.disabled = true;
    botonDefinirEntrenamiento.disabled = true;
    botonEntrenamiento.disabled = false 
}

const componente = (elemento, peso, ejercicio, repeticiones, metros)=>{
    
    componentes.push({
            elemento: elemento,
            peso: peso,
            ejercicio: ejercicio,
            repeticiones: repeticiones,
            metros: metros,
        });

        console.log( componentes )
        botonDefinirEntrenamiento.disabled = false;
};

const entrenamiento = (tipoDeEntrenamiento, duracion, vueltas, fechaProgramada, componentes )=>{
     
    const fecha = new Date();

    entrenamientos.push({ 
  
        tipoDeEntrenamiento: tipoDeEntrenamiento,
        duracion: duracion,
        vueltas: vueltas,
        fechaCreacion: fecha,
        fechaProgramada: fechaProgramada,
        componentes: componentes,
    })

     console.log( entrenamientos );
};

const agregaEntrenamiento = ( entrenamientos )=>{
    
    let listaEntrenamientosHTML = '';

    entrenamientos.forEach(element => {
        element.componentes.forEach( element1 => {console.log(element1.elemento)} )
    });     

    entrenamientos.forEach(element => {

        let componentesHTML = '';
        element.componentes.forEach( element1 =>{ componentesHTML = componentesHTML + (element1.elemento)} )
        listaEntrenamientosHTML =listaEntrenamientosHTML + `
        
        <li>
        ${element.fechaProgramada} 
        Tipo: ${element.tipoDeEntrenamiento}
        Duración: ${element.duracion}
        Vueltas: ${element.vueltas}
        Ejercicios: ${ componentesHTML }
        
        
        </li>`;
          
    });

    listaEntrenamientos.innerHTML = listaEntrenamientosHTML;
}

// variables componentes
let elemento        = '';
let peso            = '';
let ejercicio       = '';
let repeticiones    = '';
let metros          = '';

// variables entrenamiento
let fechaProgramada     = '';
let tipoDeEntrenamiento = '';
let duracion            = '';
let vueltas             = '';

// listeners campos entrenamiento
const valorFechaProgramada = inputFechaProgramada.addEventListener( 'change', (e)=>{ 
    fechaProgramada = inputFechaProgramada.value;
    console.log( fechaProgramada );
 } );

const valorTipoDeEntrenamiento = inputTipoEntrenamiento.addEventListener( 'keyup', (e)=>{ 
    tipoDeEntrenamiento = inputTipoEntrenamiento.value;
    console.log( tipoDeEntrenamiento );
 } );

const valorDuracion = inputDuracion.addEventListener( 'keyup', (e)=>{ 
    duracion = inputDuracion.value;
    console.log( duracion );
 } );

const valorVueltas = inputVueltas.addEventListener( 'keyup', (e)=>{ 
    vueltas = inputVueltas.value;
    console.log( vueltas );
 } );


// listeners campos componente
const valorElemento = inputElemento.addEventListener( 'keyup', (e)=>{ 
    elemento = inputElemento.value;
    console.log( elemento );
 } );

const valorPeso = inputPeso.addEventListener( 'keyup', (e)=>{ 
    peso = inputPeso.value;
    console.log( peso );
 } );

const valorEjercicio = inputEjercicio.addEventListener( 'keyup', (e)=>{ 
    ejercicio = inputEjercicio.value;
    console.log( ejercicio );
 } );

 const valorRepeticiones = inputRepeticiones.addEventListener( 'keyup', (e)=>{ 
    repeticiones = inputRepeticiones.value;
    console.log( repeticiones );
 } );

 const valorMetros = inputMetros.addEventListener( 'keyup', (e)=>{ 
    metros = inputMetros.value;
    console.log( metros );
 } );
 

// listeners botones
botonComponente.addEventListener( 'click', (e)=>{ componente(elemento, peso, ejercicio, repeticiones, metros) });
botonEntrenamiento.addEventListener( 'click', (e)=>{ 
    entrenamiento( tipoDeEntrenamiento, duracion, vueltas, fechaProgramada, componentes );
    agregaEntrenamiento(entrenamientos);
    init()
 });
// botonAgregaEntrenamiento.addEventListener( 'click', ()=>{ agregaEntrenamiento(entrenamientos) } );
botonDefinirEntrenamiento.addEventListener( 'click', (  ()=> {habilitaEntrenamiento()} ) )