import BarNavigation from "../../components/bar/bar.js";

class RoutineScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.routines = [
            {
                title: 'Full-Body Circuit',
                description: 'This routine targets all major muscle groups in...',
                time: '45-60 minutes',
                level: 'Intermediate'
            },
        ];
        this.icons = [
            { src: '../../imgs/home.png', alt: 'Home Icon' },
            { src: '../../imgs/search.png', alt: 'Search Icon' },
            { src: '../../imgs/qr.png', alt: 'QR Icon' },
            { src: '../../imgs/trophy.png', alt: 'Trophy Icon' },
            { src: '../../imgs/userIconBar.png', alt: 'User Icon' }
        ];
    }

    connectedCallback() {
        this.render();

        // Añadir el event listener después de renderizar
        const bigImg = this.shadowRoot.getElementById('bigImg');
        if (bigImg) {
            bigImg.addEventListener('click', () => {
                window.location.href = '/pages/detail/detail.html'; // Redirigir a la página específica
            });
        }
    }

    createElement(tag, attributes = {}, children = []) {
        const element = document.createElement(tag);
        Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
        children.forEach(child => element.appendChild(child));
        return element;
    }

    render() {
        const styleLink = this.createElement('link', { rel: 'stylesheet', type: 'text/css', href: './routine.css' });
        const header = this.createElement('div', { class: 'header-1' }, [
            this.createElement('h1', {}, [document.createTextNode('Routines')]),
            this.createElement('img', { src: '../../imgs/bell.png', class: 'icon' })
        ]);

        const searchBar = this.createElement('div', { class: 'search-bar' }, [
            this.createElement('img', { src: '../../imgs/search.png', class: 'icon' }),
            this.createElement('input', { type: 'text', class: 'text', placeholder: 'Search...' })
        ]);

        const routinesHeader = this.createElement('h2', {}, [document.createTextNode('Routines for you')]);

        const imageContainer = this.createElement('div', { class: 'image-container' }, [
            this.createElement('img', { src: '../../imgs/component.png', class: 'big-img', id: 'bigImg' }),
            this.createElement('img', { src: '../../imgs/comp3.png', class: 'big-img' }),
            this.createElement('img', { src: '../../imgs/component.png', class: 'big-img' })
        ]);

        const bottomCard = this.createElement('div', { class: 'bottom-card' }, [
            this.createElement('h4', {}, [document.createTextNode('Popular routines')]),
            ...this.routines.map(routine => this.createRoutineCard(routine))
        ]);

        const iconContainer = this.createElement('div', { class: 'container' },
            this.icons.map(icon => this.createElement('img', { src: icon.src, class: 'icon-2', alt: icon.alt }))
        );

        const barNavigation = new BarNavigation(); // Agregar la barra de navegación

        this.shadowRoot.innerHTML = '';
        this.shadowRoot.append(styleLink, header, searchBar, routinesHeader, imageContainer, bottomCard, iconContainer, barNavigation);
    }

    createRoutineCard(routine) {
        return this.createElement('div', { class: 'routine-card' }, [
            this.createElement('div', { class: 'info' }, [
                this.createElement('h4', {}, [document.createTextNode(routine.title)]),
                this.createElement('p', {}, [document.createTextNode(routine.description)]),
                this.createElement('button', { class: 'time' }, [document.createTextNode(routine.time)]),
                this.createElement('button', { class: 'level' }, [document.createTextNode(routine.level)])
            ])
        ]);
    }
}

customElements.define("routine-screen", RoutineScreen);
