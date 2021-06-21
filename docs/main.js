
const entrenamientos        = [];
const componentes           = [];

// selectores generales
const intro = document.querySelector('#intro') // intro

// Selectores entrenamiento
const bloqueEntrenamiento       = document.querySelector('#bloque-entrenamiento')
const inputFechaProgramada      = document.querySelector('#input-fechaProgramada');
const inputTipoEntrenamiento    = document.querySelector('#input-tipoEntrenamiento');
const inputDuracion             = document.querySelector('#input-duracion');
const inputVueltas              = document.querySelector('#input-vueltas');

// Selectores componente
const bloqueEjercicios          = document.querySelector('#bloque-ejercicios')
const inputPeso                 = document.querySelector('#input-peso');
const inputElemento             = document.querySelector('#input-elemento');
const inputEjercicio            = document.querySelector('#input-ejercicio');
const inputRepeticiones         = document.querySelector('#input-repeticiones');
const listadoComponentes        = document.querySelector('#componentes');

// Selectores de planificación
const listaEntrenamientos       = document.querySelector('#entrenamientos');

// Selectores de botones
const botonComponente           = document.querySelector('#buttonInputComponente');
const botonEntrenamiento        = document.querySelector('#buttonInputEntrenamiento');
const botonAgregaEntrenamiento  = document.querySelector('#buttonAgregaEntrenamiento');
const botonDefinirEntrenamiento = document.querySelector('#buttonDefinirEntrenamiento');

// script para la intro de inicio:

// metodos

const init = ()=>{
    botonEntrenamiento.disabled = true;
    botonAgregaEntrenamiento.disabled = true;
    botonDefinirEntrenamiento.disabled = true;
    botonComponente.disabled = false;
    botonAgregaEntrenamiento.style.visibility = "hidden";
    bloqueEntrenamiento.style.visibility = "hidden";
    bloqueEjercicios.style.visibility = "visible";

};

init();

const habilitaEntrenamiento = ()=>{

    botonComponente.disabled = true;
    botonDefinirEntrenamiento.disabled = true;
    botonEntrenamiento.disabled = false;
    bloqueEntrenamiento.style.visibility = "visible";
    bloqueEjercicios.style.visibility = "hidden";
    
}

// Ejercicio : ${ element.ejercicio }, Repeticiones: ${ element.repeticiones }, Peso: ${ element.peso }, Elemento ${ element.elemento }, Metros: ${ element.metros }</li>` } );

const componente = (elemento, peso, ejercicio, repeticiones)=>{
    
    componentes.push({
            elemento: elemento,
            peso: peso,
            ejercicio: ejercicio,
            repeticiones: repeticiones
        });

        let componentesHTML = '';

        // esto de aca hay que integrarlo con el espacio donde van los ejercicios definidos para el treino
        componentes.forEach( element =>{ 
            
            componentesHTML = componentesHTML + `
        
            <li> 
            ${ (element.repeticiones != '' ? element.repeticiones : '') } 
            ${ element.ejercicio } 
            ${ (element.elemento != '' ? `con  ${element.elemento}` : '') }
            ${ (element.peso != '' ? `con  ${element.peso} kilos` : '') } 
            </li>`
        
        });
        
        listadoComponentes.innerHTML= componentesHTML;
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
        element.componentes.forEach( element1 =>{ componentesHTML = componentesHTML + `
        
        <li class="card__title"> 
        ${ (element1.repeticiones != '' ? element1.repeticiones : '') } 
        ${ element1.ejercicio } 
        ${ (element1.elemento != '' ? `con  ${element1.elemento}` : '') }
        ${ (element1.peso != '' ? `con  ${element1.peso} kilos` : '') } 

        </li>
        `} )
        
        // en elsiguiente html hay que integrar con la card creada
        listaEntrenamientosHTML =listaEntrenamientosHTML + `
        
        <div class="animate__animated animate__fadeIn">
        <div class="card-container">
              <div class="card card-1">
                <div class="card__icon"><i class="fas fa-bolt"></i></div>
                <p class="card__exit">${ (element.fechaProgramada != '' ? element.fechaProgramada : '') }<i class="fas fa-times"></i></p>
                <div class="underline"></div>
                <br>
                <h3>
                    ${ (element.tipoDeEntrenamiento != '' ? `${element.tipoDeEntrenamiento}` : '') }
                    ${ (element.duracion != '' ? `${element.duracion} minutos` : '') }
                    ${ (element.vueltas != '' ? `${element.vueltas} vueltas` : '') }
                </h3>
                  <ul>
                    ${ componentesHTML }
                  </ul>
                <p class="card__apply">Aca pueden ir los comentarios del wod</p>
              </div>
            </div>
            </div>
            `;
          
    });

    listaEntrenamientos.innerHTML = listaEntrenamientosHTML;
}

// variables componentes
let elemento        = '';
let peso            = '';
let ejercicio       = '';
let repeticiones    = '';

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
 

// listeners botones
botonComponente.addEventListener( 'click', (e)=>{ 
    e.preventDefault();
    componente(elemento, peso, ejercicio, repeticiones) });
botonEntrenamiento.addEventListener( 'click', (e)=>{ 
    e.preventDefault();
    entrenamiento( tipoDeEntrenamiento, duracion, vueltas, fechaProgramada, componentes );
    agregaEntrenamiento(entrenamientos);
    init()
 });
// botonAgregaEntrenamiento.addEventListener( 'click', ()=>{ agregaEntrenamiento(entrenamientos) } );
botonDefinirEntrenamiento.addEventListener( 'click', (  ()=> {habilitaEntrenamiento()} ) )