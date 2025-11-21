// =============== CAMBIO DE SECCIONES ===============
function mostrarSeccion(id) {
    const secciones = document.querySelectorAll(".page");
    const botones = document.querySelectorAll(".menu-pdf a");

    // Ocultar todas las secciones
    secciones.forEach(sec => {
        sec.style.display = "none";
        sec.classList.remove("fade");
    });

    // Quitar clase active de todos los botones
    botones.forEach(btn => btn.classList.remove("active"));

    // Mostrar la sección seleccionada con animación
    const activa = document.getElementById(id);
    activa.style.display = "block";
    setTimeout(() => activa.classList.add("fade"), 50);

    // Activar el botón correspondiente
    const botonActivo = Array.from(botones).find(btn => 
        btn.textContent.trim().toUpperCase() === id.toUpperCase()
    );
    if (botonActivo) botonActivo.classList.add("active");
}

// =============== STARFIELD (FONDO DE ESTRELLAS) ===============
(function() {
    const canvas = document.getElementById("starfield");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const numStars = 200;
    const stars = [];

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            z: Math.random() * width
        });
    }

    function animate() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;

        ctx.fillStyle = "rgba(10, 15, 40, 0.4)";
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = "#ffffff";
        stars.forEach(star => {
            star.z -= 1.5;

            if (star.z <= 0) {
                star.z = width;
                star.x = Math.random() * width;
                star.y = Math.random() * height;
            }

            const k = 200 / star.z;
            const px = (star.x - width / 2) * k + width / 2;
            const py = (star.y - height / 2) * k + height / 2;

            if (px >= 0 && px <= width && py >= 0 && py <= height) {
                const size = (1 - star.z / width) * 3;
                ctx.fillRect(px, py, size, size);
            }
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Redimensionar canvas al cambiar tamaño de ventana
    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
})();

// =============== ENLACES CLICABLES DE MARTE ===============
document.addEventListener("DOMContentLoaded", function() {
    const link3 = document.getElementById("link-3");
    const link4 = document.getElementById("link-4");
    const link5 = document.getElementById("link-5");
    const link6 = document.getElementById("link-6");

    if (link3) link3.onclick = () => window.open("https://science.nasa.gov/mars/", "_blank");
    if (link4) link4.onclick = () => window.open("https://www.worldhistory.org/trans/es/1-10341/marte/", "_blank");
    if (link5) link5.onclick = () => window.open("https://unamglobal.unam.mx/global_revista/de-que-esta-hecho-marte/", "_blank");
    if (link6) link6.onclick = () => window.open("https://www.esa.int/Space_in_Member_States/Spain/Historia_de_la_exploracion_de_Marte", "_blank");
});

// =============== ACORDEÓN PREGUNTAS FRECUENTES (SOL) ===============
function toggleRespuesta(elemento) {
    const respuesta = elemento.nextElementSibling;
    if (respuesta && respuesta.classList.contains("respuesta")) {
        respuesta.style.display = respuesta.style.display === "block" ? "none" : "block";
    }
}

// =============== ZOOM EN IMÁGENES DEL SOL (opcional, sigue funcionando con recuadros) ===============
function zoomImage(img) {
    if (img.requestFullscreen) {
        img.requestFullscreen();
    } else if (img.webkitRequestFullscreen) {
        img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) {
        img.msRequestFullscreen();
    } else {
        alert("Haz clic en pantalla completa para ver mejor esta imagen");
    }
}

// =============== INICIO AUTOMÁTICO ===============
document.addEventListener("DOMContentLoaded", function() {
    mostrarSeccion("inicio"); // Aseguramos que arranque en INICIO
});