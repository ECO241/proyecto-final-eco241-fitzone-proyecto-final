export default class BarNavigation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .container {
                    background: linear-gradient(#ffc700, #ff8b37);
                    padding: 10px;
                    border-radius: 10px;
                    width: 345px;
                    height: 40px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    position: fixed;
                    z-index: 1000;
                    bottom: 100px;
                    left: 50%;
                    transform: translateX(-50%);
                }

                .icon {
                    margin-right: 15px;
                    margin-left: 15px;
                    width: 35px;
                    height: 35px;
                    cursor: pointer;
                }
            </style>

            <div class="container">
                <img src="../../imgs/icons/home.png" class="icon" id="homeIcon">
                <img src="../../imgs/icons/search.png" class="icon" id="searchIcon">
                <img src="../../imgs/icons/qr.png" class="icon" id="qrIcon">
                <img src="../../imgs/icons/trophy.png" class="icon" id="trophyIcon">
                <img src="../../imgs/icons/userIconBar.png" class="icon" id="userIconBar">
            </div>
        `;

        // Agregar eventos de clic a cada icono para redireccionar a las páginas correspondientes
        const homeIcon = this.shadowRoot.getElementById('homeIcon');
        homeIcon.addEventListener('click', () => {
            window.location.href = '/pages/home/home.html';
        });

        const searchIcon = this.shadowRoot.getElementById('searchIcon');
        searchIcon.addEventListener('click', () => {
            window.location.href = '/pages/gymstatus/gymstatus.html';
        });

        const qrIcon = this.shadowRoot.getElementById('qrIcon');
        qrIcon.addEventListener('click', () => {
            window.location.href = '/pages/readqr/readqr.html';
        });

        const trophyIcon = this.shadowRoot.getElementById('trophyIcon');
        trophyIcon.addEventListener('click', () => {
            window.location.href = '/pages/routine/routine.html';
        });

        const userIconBar = this.shadowRoot.getElementById('userIconBar');
        userIconBar.addEventListener('click', () => {
            window.location.href = '/pages/profile/profile.html';
        });
    }
}

customElements.define("bar-component", BarNavigation);
