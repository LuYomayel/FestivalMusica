document.addEventListener('DOMContentLoaded', function(){
    scrollNav();

    navegacionFija();
})

function scrollNav(){
    /* Lo primero es seleccionar los enlaces */
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    //Ahora hay que hacer un evento cada vez que se clickea el enlace
    //El addEventListener se puede hacer para un solo elemento y como aca son varios enlaces se usa el foreach
    enlaces.forEach( function(enlace){
        enlace.addEventListener('click', function(e){
            e.preventDefault(); //para cancelar la accion por defecto
            const seccion = document.querySelector(e.target.attributes.href.value); // aca seleccionamos el valor del href

            seccion.scrollIntoView({//esto va a hacer el scroll feo
                behavior:'smooth', //esto va a hacer el scroll lindo
            });
            
        });
    });
}

function navegacionFija(){
    const barra = document.querySelector('.header');
    // Registrar el intersection observer
    const observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }
        else{
            barra.classList.add('fijo');
        }
    });

    // Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));
}
document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i <=12; i++){
        const imagen = document.createElement('IMG');
        imagen.src =  `build/img/thumb/${i}.webp`; //para un string se usan estas comillas
        imagen.dataset.imagenId= i;

        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    console.log(e.target.dataset.imagenId);
    const id = parseInt( e.target.dataset.imagenId);
    // generando la imagen a partir del ID
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    // Overlay para poder hacer el efecto de superposicion
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    //Funcion para cerrar la imagen clickeando el overlay
    overlay.onclick = function(){
        overlay.remove();
    }


    //Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'x';
    cerrarImagen.classList.add('btn-cerrar');

    overlay.appendChild(cerrarImagen);

    //Cerrar el overlay
    cerrarImagen.onclick =function(){
        overlay.remove();
    }
    //Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}