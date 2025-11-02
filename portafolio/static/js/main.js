// ---------- AÑO DINÁMICO ----------
document.getElementById('yearActual').textContent = new Date().getFullYear();

// ---------- SCROLL SUAVE + COMPENSAR BARRA LATERAL ----------
document.querySelectorAll('.miniatura-nav').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const objetivo = document.querySelector(this.getAttribute('href'));
        if (objetivo) {
            const posicion = objetivo.offsetTop - 20;
            window.scrollTo({ top: posicion, behavior: 'smooth' });
        }
        if (window.innerWidth <= 768) {
            document.getElementById('barraLateral').classList.remove('activa');
        }
    });
});

// ---------- HABILIDADES HOVER ----------
document.querySelectorAll('.lista-habilidades li').forEach(habilidad => {
    habilidad.addEventListener('mouseover', function() {
        this.style.color = 'var(--color-secundario)';
        this.style.borderLeftColor = 'var(--color-primario)';
    });
    habilidad.addEventListener('mouseout', function() {
        this.style.color = '';
        this.style.borderLeftColor = '';
    });
});

// ---------- PROYECTOS DINÁMICOS ----------
const grilla = document.getElementById('grillaProyectos');
proyectos.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    const card = document.createElement('div');
    card.className = 'card tarjeta-oscura h-100';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body d-flex flex-column';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = p.titulo;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = p.desc;

    const repoLink = document.createElement('a');
    repoLink.href = p.repo;
    repoLink.target = '_blank';
    repoLink.className = 'btn btn-sm btn-outline-light mt-auto';
    repoLink.textContent = 'Ver repo';

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(repoLink);
    card.appendChild(cardBody);
    col.appendChild(card);
    grilla.appendChild(col);
});

// ---------- FORMULARIO ----------
const formulario = document.getElementById('formularioContacto');
formulario.addEventListener('input', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        e.target.classList.toggle('is-invalid', !e.target.value);
        e.target.classList.toggle('is-valid', !!e.target.value);
    }
});
