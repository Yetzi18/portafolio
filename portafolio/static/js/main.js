/* =========================================
Portafolio Nocturno – Tim Burton Style
Autora: TuNombre
   ========================================= */

// ---------- AÑO DINÁMICO ----------
document.getElementById('yearActual').textContent = new Date().getFullYear();

// ---------- NAVEGACIÓN ACTIVA ----------
// window.addEventListener('scroll', () => {
//     let secciones = document.querySelectorAll('section');
//     let enlaces = document.querySelectorAll('.navbar-nav .nav-link');
//     let scrollActual = window.pageYOffset + 100;

//     secciones.forEach((sec, idx) => {
//         if(scrollActual >= sec.offsetTop && scrollActual < sec.offsetTop + sec.offsetHeight){
//         enlaces.forEach(link => link.classList.remove('active'));
//         if(enlaces[idx]) enlaces[idx].classList.add('active');
//         }
//     });
// });

// ---------- SCROLL SUAVE + COMPENSAR BARRA LATERAL ----------
function scrollASeccion(enlace) {
    enlace.addEventListener('click', e => e.preventDefault());
    const objetivo = document.querySelector(enlace.getAttribute('href'));
    if (objetivo) {
        const alturaBarra = 200; // mismo ancho que la barra lateral
        const posicion = objetivo.offsetTop - 20; // pequeño margen superior
        window.scrollTo({ top: posicion, behavior: 'smooth' });
    }
    // Cerrar barra en móvil
    if (window.innerWidth <= 768) {
        document.getElementById('barraLateral').classList.remove('activa');
    }
}

// ---------- HABILIDADES HOVER ----------
function resaltarHabilidad(elemento){
    elemento.style.color = 'var(--color-secundario)';
    elemento.style.borderLeftColor = 'var(--color-primario)';
}
function restaurarHabilidad(elemento){
    elemento.style.color = '';
    elemento.style.borderLeftColor = '';
}

// ---------- PROYECTOS DINÁMICOS ----------
const proyectos = [
    {
        titulo: 'Página de Recetas Macabras',
        desc: 'HTML, CSS, JS vanilla. Diseño gótico.',
        repo: 'https://github.com/TuUsuario/recetas-macabras'
    },
    {
        titulo: 'App de Tareas Espectrales',
        desc: 'CRUD con LocalStorage.',
        repo: 'https://github.com/TuUsuario/tareas-espectrales'
    },
    {
        titulo: 'API del Clima Oscuro',
        desc: 'Consume API externa. Bootstrap.',
        repo: 'https://github.com/TuUsuario/clima-oscuro'
    }
];

const grilla = document.getElementById('grillaProyectos');
proyectos.forEach(p => {
    grilla.innerHTML += `
        <div class="col-md-4">
        <div class="card tarjeta-oscura h-100">
            <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.titulo}</h5>
            <p class="card-text">${p.desc}</p>
            <a href="${p.repo}" target="_blank" class="btn btn-sm btn-outline-light mt-auto">Ver repo</a>
            </div>
        </div>
        </div>`;
});

// ---------- FORMULARIO ----------
function validarFormulario(form){
  // Ejemplo simple: cambiar borde si está vacío
    const inputs = form.querySelectorAll('input,textarea');
    inputs.forEach(inp => {
        inp.addEventListener('input', () => {
        inp.classList.toggle('is-invalid', !inp.value);
        inp.classList.toggle('is-valid', !!inp.value);
        });
    });
}

// ---------- REMOVER ELEMENTO DEMO ----------
/* Puedes añadir un botón con onclick="removerEste(this)" */
function removerEste(boton){
    boton.parentElement.remove();
}