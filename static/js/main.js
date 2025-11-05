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

        // ---------- REFERENCIAS ----------
        function toggleCard(card) {
            card.classList.toggle('flipped');
        }

        // ---------- FORMULARIO ----------
        function handleSubmit(event) {
            event.preventDefault();
            
            const form = event.target;
            const formData = new FormData(form);
            
            // Aquí puedes agregar tu lógica de envío de formulario
            // Por ejemplo, usar EmailJS, Formspree, o tu propio backend
            
            // Simulación de envío
            setTimeout(() => {
                document.getElementById('successMessage').classList.add('show');
                form.reset();
                
                setTimeout(() => {
                    document.getElementById('successMessage').classList.remove('show');
                }, 3000);
            }, 500);
        }

        // ---------- PORTAFOLIO DYNAMIC PROJECT ----------
        let projectAdded = false;
        const projectsGrid = document.getElementById('projectsGrid');
        const addProjectBtn = document.getElementById('addProjectBtn');
        const limitMessage = document.getElementById('limitMessage');

        addProjectBtn.addEventListener('click', () => {
            if (projectAdded) {
                return; // Already added
            }
            
            projectAdded = true;
            addProjectBtn.style.display = 'none';
            limitMessage.textContent = 'Solo se permite un proyecto. Haz clic en la X para eliminarlo.';
            
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="card-image">
                    <img src="resource/img/asis.png" alt="Proyecto Asist IoT">
                    <div class="project-tags">
                        <span class="tag">HTML</span>
                        <span class="tag">CSS</span>
                        <span class="tag">JavaScript</span>
                    </div>
                    <button id="removeProjectBtn" onclick="removeProject()">×</button>
                    <div class="project-overlay">
                        <div class="card-content">
                            <div class="project-header">
                                <h3 class="project-title">Asist IoT</h3>
                            </div>
                            <p class="project-description">
                                Plataforma IoT para monitoreo de salud en tiempo real. Integración con sensores inteligentes.
                            </p>
                            <div class="card-footer">
                                <a href="https://github.com/Yetzi18/Interfaz_Cabina_User" target="_blank" class="btn-repo">
                                    <span class="btn-icon">📂</span> Ver repositorio
                                </a>
                                <a href="https://asistiot.netlify.app/" target="_blank" class="btn-demo">
                                    <span class="btn-icon">🚀</span> Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });

        function removeProject() {
            projectAdded = false;
            projectsGrid.innerHTML = '';
            addProjectBtn.style.display = 'block';
            limitMessage.textContent = '';
        }