//Escucha cuando el archivo se cargue
document.addEventListener('DOMContentLoaded', () =>{

//Añadimos los punteros
const recomendados = document.querySelector('main section');
const banner = document.querySelector('main div');
const destinos = document.querySelector('main select');


//Array de datos
let imagenesBanner = [
    ['imagenes/banner/1.jpg', 'imagen paisaje uno', 'paisaje 1'],
    ['imagenes/banner/2.jpg', 'imagen paisaje dos', 'paisaje 2'],
    ['imagenes/banner/3.jpg', 'imagen paisaje tres', 'paisaje 3'],
    ['imagenes/banner/4.jpg', 'imagen paisaje cuatro', 'paisaje 4'],
    ['imagenes/banner/5.jpg', 'imagen paisaje cinco', 'paisaje 5'],
    ['imagenes/banner/6.jpg', 'imagen paisaje seis', 'paisaje 6'],
    ['imagenes/banner/7.jpg', 'imagen paisaje siete', 'paisaje 7'],
    ['imagenes/banner/8.jpg', 'imagen paisaje ocho', 'paisaje 8']
];

let imagenesRecomendadas = [
    ['imagenes/viajes/viajes-1.jpg', 'imagen viaje uno', 'paisaje 1'],
    ['imagenes/viajes/viajes-2.jpg', 'imagen viaje dos', 'paisaje 2'],
    ['imagenes/viajes/viajes-3.jpg', 'imagen viaje tres', 'paisaje 3'],
    ['imagenes/viajes/viajes-4.jpg', 'imagen viaje cuatro', 'paisaje 4'],
    ['imagenes/viajes/viajes-5.jpg', 'imagen viaje cinco', 'paisaje 5'],
    ['imagenes/viajes/viajes-6.jpg', 'imagen viaje seis', 'paisaje 6'],
    ['imagenes/viajes/viajes-7.jpg', 'imagen viaje siete', 'paisaje 7'],
];

const lugares = [
    ['Paris', 'paris'],
    ['Praga', 'praga'], 
    ['Margarita','margarita'], 
    ['Helsinki','helsinki'], 
    ['Belgrado', 'belgrado'], 
    ['Berlin', 'berlin']
];
//Creamos funciones de ayuda
const agregarClase = (elemento, clase)=>{
    elemento.classList.add(clase);
} 
const crearElemento = (etiqueta, clase)=>{
    const elemento = document.createElement(etiqueta);
    elemento.classList.add(clase);
    return elemento;
}
//Creamos la seccion de viajes
const crearSeccionViaje = (numeroViajes)=>{
    for(let i = 0; i < numeroViajes; i++){
        const div = crearElemento('DIV', 'viaje')
        recomendados.append(div)
    }
}
const crearCasillasViajes = ()=>{
    const seccionViaje = document.querySelectorAll('.viaje');

    seccionViaje.forEach((e)=>{
        const divImagen = crearElemento('DIV', 'imagen-viaje');
        const divTexto = crearElemento('DIV', 'texto-viaje')
        e.append(divImagen, divTexto)
    });
};

const agregarImagenBanner = ()=>{
    const fragment = document.createDocumentFragment();
    let numeroRandom1 = Math.floor(Math.random() * imagenesBanner.length);
    let imagenBanner = document.createElement('IMG');
    imagenBanner.src = imagenesBanner[numeroRandom1][0];
    imagenBanner.alt = imagenesBanner[numeroRandom1][1];
    imagenBanner.title = imagenesBanner[numeroRandom1][2];
    imagenBanner.addEventListener('mouseover', () => {
        imagenBanner.style.filter = 'brightness(120%)';
    });
    imagenBanner.addEventListener('mouseout', () => {
        imagenBanner.style.filter = 'brightness(100%)';
    });
    fragment.append(imagenBanner);
    banner.append(fragment)
}
const agregarImagenRecomendada = ()=>{
    const viajesImg = document.querySelectorAll('.imagen-viaje');
    viajesImg.forEach((viaje)=>{
        const viajeFragment = document.createDocumentFragment();
            let numeroRandom2 = Math.floor(Math.random() * imagenesRecomendadas.length);
            let imagen = document.createElement('IMG');
            imagen.src = imagenesRecomendadas[numeroRandom2][0];
            imagen.alt = imagenesRecomendadas[numeroRandom2][1];
            imagen.title = imagenesRecomendadas[numeroRandom2][2];
            imagen.addEventListener('mouseover', () => {
                imagen.style.transform = 'scale(1.1)';
            });
            imagen.addEventListener('mouseout', () => {
                imagen.style.transform = 'scale(1)';
            });
            viajeFragment.append(imagen);
            imagenesRecomendadas.splice(numeroRandom2, 1);
            viaje.append(viajeFragment);
    });  
};

const agregarTextosViajes = ()=>{
    const viajesText = document.querySelectorAll('.texto-viaje');

    viajesText.forEach((e, i)=>{
        const viaje = document.createElement('H3');
        const texto = document.createElement('P');
        viaje.textContent = `Viaje ${i+1}`;
        texto.textContent = 'Esta es una muesta de lo que se refleja en la pagina de viajes con las recomendaciones a los distintos destinos que puedes visitar en tu proximo viaje';
        texto.classList.add('texto-viaje');
        e.append(viaje, texto);
    })
};

const agregarOpcionesDestinos = ()=>{
    lugares.forEach(([nombre, valor]) =>{
        const opcion = document.createElement('option');
        opcion.textContent = nombre;
        opcion.value = valor;
        destinos.append(opcion);
    });
};

agregarClase(banner, 'banner');
agregarClase(recomendados, 'recomendados');
agregarClase(destinos, 'destinos');

//Llamamos a las funciones
    agregarImagenBanner();
    crearSeccionViaje(3)
    crearCasillasViajes();
    agregarOpcionesDestinos();
    agregarTextosViajes();
    agregarImagenRecomendada();
    
});