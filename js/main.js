document.addEventListener('DOMContentLoaded', function() {

    const Comprar = document.getElementById('Comprar');
    if (Comprar) {
        Comprar.onclick = function() {
            window.open('https://store.rockstargames.com/es-419/game/buy-gta-v?utm_source=chatgpt.com', '_blank');
        };
    }

    const ComprarNav = document.getElementById('Comprar-Nav');
    if (ComprarNav) {
        ComprarNav.onclick = function() {
            window.open('https://store.rockstargames.com/es-419/game/buy-gta-v?utm_source=chatgpt.com', '_blank');
        };
    }

    const formulario = document.querySelector('.formulario form');
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    }

    const modal = document.getElementById('modal-info');
    const modalCuerpo = document.getElementById('modal-cuerpo');
    const btnCerrar = document.getElementById('btn-cerrar');

    const datosPersonajes = {
        'personaje-Franklin': {
            titulo: "FRANKLIN CLINTON",
            subtitulo: "El Conductor de Élite de South Los Santos",
            imagen: "img/005.jpg",
            desc: "Joven, ambicioso y extremadamente hábil tras el volante. Criado en los barrios bajos de Strawberry, Franklin busca dejar atrás los pequeños robos callejeros para adentrarse en el crimen de alto nivel junto a Michael De Santa. Destaca por su capacidad táctica para mantener el control bajo presión extrema en las persecuciones más peligrosas.",
            extra: "Vehículo distintivo: Bravado Buffalo S | Habilidad especial: Conducción en cámara lenta con respuesta mejorada en curvas y maniobras de alta velocidad."
        },
        'personaje-Michael': {
            titulo: "MICHAEL DE SANTA",
            subtitulo: "El Mente Maestra Retirado",
            imagen: "img/006.jpg",
            desc: "Un ex-atracador de bancos de leyenda que logró cerrar un trato ficticio con el FIB para vivir en el retiro de lujo en Rockford Hills. Sin embargo, una vida familiar caótica y deudas inesperadas lo empujan de nuevo al submundo criminal. Es un tirador magistral y el arquitecto detrás de los atracos más grandes de la ciudad.",
            extra: "Especialista en planificación estratégica, armas de fuegopesadas y técnica de combate táctico | Habilidad especial: Disparo en cámara lenta."
        },
        'personaje-Trevor': {
            titulo: "TREVOR PHILIPS",
            subtitulo: "La Fuerza Indomable e Impredecible",
            imagen: "img/007.png",
            desc: "Antiguo piloto militar retirado deshonrosamente y ex-socio de Michael. Vive en un parque de remolques en Sandy Shores administrando Trevor Philips Enterprises. Su personalidad violenta, destructiva e impredecible lo convierte en una amenaza constante, pero su lealtad a sus verdaderos amigos y su capacidad destructiva son inigualables.",
            extra: "Especialista en pilotaje aéreo, explosivos y combate cuerpo a cuerpo | Habilidad especial: Muro de Furia (reduce el daño recibido e inflige el doble de daño)."
        }
    };

    const datosBotones = {
        'btn-mundo-abierto': {
            titulo: "MUNDO ABIERTO ENORME Y VIVO",
            subtitulo: "Los Santos & Blaine County",
            imagen: "img/001.jpg",
            desc: "Sumérgete en un ecosistema colosal que abarca desde los rascacielos del centro financiero hasta las vastas cordilleras y desiertos de Blaine County. Descubre una fauna diversa, ecosistemas marinos detallados, eventos aleatorios en las carreteras y un tráfico dinámico con inteligencia artificial de última generación."
        },
        'btn-accion': {
            titulo: "ACCIÓN DE ALTO VOLTAJE",
            subtitulo: "Sistema de Búsqueda y Atracos",
            imagen: "img/002.jpg",
            desc: "Enfréntate al departamento de policía de Los Santos y a las fuerzas del FIB en intensas persecuciones de 5 estrellas. Planifica y ejecuta atracos a mano armada seleccionando personal de apoyo, rutas de escape estratégicas y tácticas de infiltración letales o sigilosas."
        },
        'btn-posibilidades': {
            titulo: "POSIBILIDADES Y ENTRETENIMIENTO INFINITO",
            subtitulo: "Vida Urbana y Economía en Tiempo Real",
            imagen: "img/003.jpg",
            desc: "Domina el mercado bursátil compra/venta de acciones mediante BAWSAQ y LCN, adquiere bienes raíces comerciales para generar ingresos pasivos, personaliza cientos de vehículos en Los Santos Customs, practica golf, tenis, paracaidismo o disfruta de la vida nocturna de la ciudad."
        },
        'btn-juega-manera': {
            titulo: "CAMBIO DE PERSONAJE Y LIBERTAD ABSOLUTA",
            subtitulo: "Mecánica Interconectada de Tres Protagonistas",
            imagen: "img/004.avif",
            desc: "Experimenta la narrativa revolucionaria de Rockstar Games intercambiando entre Franklin, Michael y Trevor en tiempo real. Observa cómo vive cada personaje sus rutinas diarias cuando no los estás controlando y coordina sus habilidades únicas durante las misiones conjuntas."
        },
        'btn-legado': {
            titulo: "TECNOLOGÍA DE SIGUIENTE GENERACIÓN",
            subtitulo: "Rendimiento Gráfico y Sonoro Optimizado",
            imagen: "img/008.jpg",
            desc: "Disfruta de mejoras visuales avanzadas con resoluciones de hasta 4K, 60 fotogramas por segundo, trazado de rayos (Ray Tracing), sombras y reflejos mejorados, audio 3D inmersivo y tiempos de carga ultrarrápidos gracias al almacenamiento de estado sólido."
        }
    };

    for (let id in datosPersonajes) {
        let elemento = document.getElementById(id);
        if (elemento) {
            elemento.onclick = function() {
                let info = datosPersonajes[id];
                modalCuerpo.innerHTML = 
                    '<span class="etiqueta">Expediente Criminal</span>' +
                    '<img class="img-modal" src="' + info.imagen + '" alt="' + info.titulo + '">' +
                    '<h2>' + info.titulo + '</h2>' +
                    '<h4>' + info.subtitulo + '</h4>' +
                    '<p>' + info.desc + '</p>' +
                    '<p style="color: #ccff00; font-weight: bold; margin-top: 10px; font-size: 12px;">' + info.extra + '</p>';
                modal.classList.add('activa');
            };
        }
    }

    for (let id in datosBotones) {
        let elemento = document.getElementById(id);
        if (elemento) {
            elemento.onclick = function() {
                let info = datosBotones[id];
                let contenidoHtml = 
                    '<span class="etiqueta">Información Extra</span>' +
                    '<img class="img-modal" src="' + info.imagen + '" alt="' + info.titulo + '">' +
                    '<h2>' + info.titulo + '</h2>' +
                    '<h4>' + info.subtitulo + '</h4>' +
                    '<p>' + info.desc + '</p>';
                modalCuerpo.innerHTML = contenidoHtml;
                modal.classList.add('activa');
            };
        }
    }

    if (btnCerrar) {
        btnCerrar.onclick = function() {
            modal.classList.remove('activa');
        };
    }

    window.onclick = function(evento) {
        if (evento.target === modal) {
            modal.classList.remove('activa');
        }
    };

});