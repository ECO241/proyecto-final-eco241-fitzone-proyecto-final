export default class UserIcon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.addEventListener("click", this.handleClick.bind(this));
    }
  
    connectedCallback() {
        this.render();
    }

    handleClick() {
        // Cambiar ruta.
        window.location.href = "ruta_de_la_pagina";
    }
  
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex; 
                    justify-content: flex-start; 
                    margin-left: 15px;
                    margin-top: 50px;
                    cursor: pointer;
                    z-index:5;
                    transition: transform 0.3s ease-in-out;
                }
                
                :host(:hover) {
                    transform: scale(1.1);
                }

                img {
                    width: 63px;
                    height: 63px;
                }
            </style>

            <img src="../../../imgs/icons/userIcon.png" alt="UserIcon">
        `;
    }
}

customElements.define("user-icon", UserIcon);