
async function fetchUsername(id) {
    try {
        const response = await fetch(`/get-username?id=${id}`);
        if (response.ok) {
            const data = await response.json();
            return data.username;
        } else {
            console.error("Error al obtener el nombre de usuario");
        }
    } catch (error) {
        console.error("Error en la solicitud para obtener el nombre de usuario:", error);
    }
    return null;
}




class SettingProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        await this.render();
        this.addEventListeners();
    }

    addEventListeners() {
        const homeLink = this.shadowRoot.querySelector('#home-link');
        if (homeLink) {
            homeLink.addEventListener('click', () => {
                window.location.href = '/pages/home/home.html';
            });
        }

        const imageCards = this.shadowRoot.querySelectorAll('.photo-icon');
        imageCards.forEach(card => {
            card.addEventListener('click', () => {
                const imagePath = card.getAttribute('data-path');
                if (imagePath) {
                    window.location.href = imagePath;
                }
            });
        });

        const accountLink = this.shadowRoot.querySelector('#account-link');
        if (accountLink) {
            accountLink.addEventListener('click', () => {
                window.location.href = '/pages/account/account.html';
            });
        }

        const logoutButton = this.shadowRoot.querySelector('.gradient-button');
        if (logoutButton) {
            logoutButton.addEventListener('click', this.handleLogout.bind(this));
        }
    }

    async handleLogout() {
        try {
            const response = await fetch('/logout', { method: 'POST' });
            if (response.ok) {
                window.location.href = '/pages/login/login.html';
            } else {
                console.error('Error logging out:', await response.text());
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    }

    async render() {
        this.shadowRoot.innerHTML = `
            <head>
                <link rel="stylesheet" type="text/css" href="./setting.css">
            </head>
            <img id="home-link" src="../../imgs/left arrow.png">
            <h1>Settings</h1>

            <h2>Account</h2>
            <div class="container">
                <div class="photo">
                    <img src="../../../imgs/icons/userIcon.png" class="photo">
                </div>
                <div class="info">
                    <h3 class="username">Loading...</h3>
                    <p>Personal info</p>
                </div>
            </div>

            <h2>Settings</h2>
            <div class="container">
                <div class="photo-icon" data-path="/pages/gymstatus/gymstatus.html">
                    <img src="../../imgs/tp.png" class="photo-icon">
                </div>
                <div class="info-2">
                    <h3>Training preferences</h3>
                    <p>Personalize your worko...</p>
                </div>
            </div>

            <div class="container">
                <div class="photo-icon" data-path="/pages/goal/goal.html">
                    <img src="../../imgs/fg.png" class="photo-icon">
                </div>
                <div class="info-2">
                    <h3>Fitness Goal</h3>
                    <p>Set and update your...</p>
                </div>
            </div>

            <div class="container">
                <div class="photo-icon" data-path="/pages/setting/notificaciones.html">
                    <img src="../../imgs/notification.png" class="photo-icon">
                </div>
                <div class="info-2">
                    <h3>Notifications</h3>
                    <p>Configure your notif...</p>
                </div>
            </div>

            <div class="container">
                <div class="photo-icon" data-path="/pages/setting/lenguaje.html">
                    <img src="../../imgs/leng.png" class="photo-icon">
                </div>
                <div class="info-2">
                    <h3>Lenguaje</h3>
                    <p>Change your leng...</p>
                </div>
            </div>

            <button class="gradient-button">Log out</button>
        `;

        // Obtén el id del usuario desde el localStorage
        const id = localStorage.getItem('id');
        if (!id) {
            console.error("No se encontró el id del usuario en el localStorage");
            this.shadowRoot.querySelector('.username').textContent = 'Usuario desconocido';
        } else {
            // Obtén el nombre del usuario usando la función fetchUsername
            const username = await fetchUsername(id);
            if (username) {
                this.shadowRoot.querySelector('.username').textContent = username;
            } else {
                this.shadowRoot.querySelector('.username').textContent = 'Usuario desconocido';
            }
        }
    }
}

customElements.define("setting-profile", SettingProfile);
