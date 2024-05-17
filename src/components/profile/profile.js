class UserInfoForm extends HTMLElement {
    constructor() {
      super();
  
      // Crear el shadow DOM
      this.attachShadow({ mode: "open" });
  
      // Crear los elementos del formulario
      const form = document.createElement("form");
      const weightLabel = document.createElement("label");
      const weightInput = document.createElement("input");
      const heightLabel = document.createElement("label");
      const heightInput = document.createElement("input");
      const ageLabel = document.createElement("label");
      const ageInput = document.createElement("input");
  
      // Configurar atributos y contenido de los elementos
      form.setAttribute("id", "user-info-form");
      weightLabel.textContent = "Weight (kg):";
      weightInput.setAttribute("type", "number");
      weightInput.setAttribute("id", "weight");
      weightInput.setAttribute("name", "weight");
      weightInput.setAttribute("required", "");
      heightLabel.textContent = "Height (cm):";
      heightInput.setAttribute("type", "number");
      heightInput.setAttribute("id", "height");
      heightInput.setAttribute("name", "height");
      heightInput.setAttribute("required", "");
      ageLabel.textContent = "Age:";
      ageInput.setAttribute("type", "number");
      ageInput.setAttribute("id", "age");
      ageInput.setAttribute("name", "age");
      ageInput.setAttribute("required", "");
  
      // Agregar elementos al formulario
      form.appendChild(weightLabel);
      form.appendChild(weightInput);
      form.appendChild(heightLabel);
      form.appendChild(heightInput);
      form.appendChild(ageLabel);
      form.appendChild(ageInput);
  
      // Estilo para el formulario
      const style = document.createElement("style");
      style.textContent = `
        form {
          max-width: 300px;
          margin: 0 auto;
        }
        label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }
        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box;
          margin-bottom: 10px;
        }
      `;
  
      // Agregar elementos al shadow DOM
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(form);
    }
  }
  
  customElements.define("user-info-form", UserInfoForm);
  