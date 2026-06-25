document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carrusel_slide");
    const botonAnterior = document.querySelector(".carrusel__boton--anterior");
    const botonSiguiente = document.querySelector(".carrusel__boton--siguiente");
    let indiceActual = 0;

    function mostrarSlide(indice) {
    
        slides.forEach(slide => slide.classList.remove("activo"));
        
      
        if (indice >= slides.length) indiceActual = 0;
        if (indice < 0) indiceActual = slides.length - 1;

       
        slides[indiceActual].classList.add("activo");
    }

    
    botonSiguiente.addEventListener("click", () => {
        indiceActual++;
        mostrarSlide(indiceActual);
    });

    botonAnterior.addEventListener("click", () => {
        indiceActual--;
        mostrarSlide(indiceActual);
    });

   
    setInterval(() => {
        indiceActual++;
        mostrarSlide(indiceActual);
    }, 5000);
});


window.onload = function(){

    const formulario = document.getElementById("formularioContacto");
    const mensaje = document.getElementById("mensajeFormulario");

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        mensaje.style.display = "block";

        mensaje.innerHTML = `
            <h3> Mensaje enviado correctamente</h3>
            <p>Gracias por contactar a PASION FUTBOLERA.</p>
            <p>Nos comunicaremos contigo pronto.</p>
        `;

        formulario.reset();

        setTimeout(() => {
            mensaje.style.display = "none";
        }, 5000);

    });

};