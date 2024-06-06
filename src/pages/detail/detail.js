// Función para crear elementos HTML con propiedades
function createElement(type, props = {}, ...children) {
    const element = document.createElement(type);

    // Asignar propiedades al elemento
    Object.keys(props).forEach((key) => {
        if (key.startsWith("on")) {
            element.addEventListener(key.slice(2).toLowerCase(), props[key]);
        } else {
            element[key] = props[key];
        }
    });

    // Añadir hijos
    children.forEach((child) => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });

    return element;
}

// Crear la página de detalle
function buildDetailPage() {
    // Sección de imagen de encabezado
    const headerImage = createElement(
        'div',
        { className: 'header-image' },
        createElement('img', {
            src: '../../imgs/background-image/Fondo Detail.png',
            alt: 'Header Image'
        })
    );

    // Sección de información
    const infoSection = createElement(
        'div',
        { className: 'info-section' },
        // Flecha para devolverse
        createElement(
            'button',
            {
                className: 'back-button',
                onClick: () => window.history.back()
            },
            createElement('i', { className: 'fas fa-arrow-left' })
        ),
        // Título y etiquetas
        createElement('h1', { className: 'page-title' }, 'Cardio and Endurance Routine'),
        createElement(
            'div',
            { className: 'tags' },
            createElement('span', { className: 'tag-time' }, 'Around 45 minutes to 1 hour'),
            createElement('span', { className: 'tag-intensity' }, 'High intensity')
        ),
        // Divisor
        createElement('hr', { className: 'divider' }),
        // Descripción
        createElement(
            'p',
            { className: 'description' },
            'This routine focuses on improving cardiovascular health and endurance. It includes a variety of cardio exercises to get your heart rate up and improve stamina.'
        )
    );

    // Sección de lista de pasos
    const infoCard = createElement(
        'div',
        { className: 'info-card' },
        createElement('h2', {}, 'Routine'),
        createElement(
            'ol',
            { className: 'steps-list' },
            createElement('li', {}, '15 minutes on the treadmill.'),
            createElement('li', {}, '10 minutes on the stationary bike.'),
            createElement('li', {}, '10 minutes on the elliptical machine.'),
            createElement('li', {}, '3 sets of 12 reps on the leg press machine.'),
            createElement('li', {}, '3 sets of 10 reps on the rowing machine.')
        )
    );

    // Sección de botones al final
    const buttonSection = createElement(
        'div',
        { className: 'button-section' },
        createElement('button', { className: 'action-button-save custom-save-button' }, 'Save Routine'),
        createElement('button', { className: 'action-button-start custom-start-button' }, 'Start Routine')
    );

    // Añadir elementos al cuerpo del documento
    document.body.appendChild(headerImage);
    document.body.appendChild(infoSection);
    document.body.appendChild(infoCard);
    document.body.appendChild(buttonSection);
}

// Ejecutar la función cuando el contenido esté listo
document.addEventListener("DOMContentLoaded", buildDetailPage);
