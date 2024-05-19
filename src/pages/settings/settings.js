function createElement(type, props = {}, ...children) {
    const element = document.createElement(type);
  
    
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on")) {
        
        element.addEventListener(key.slice(2).toLowerCase(), props[key]);
      } else {
        element[key] = props[key];
      }
    });
  
    
    children.forEach((child) => {
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
  
    return element;
  }
  
  // Función para retroceder en el historial del navegador
  function goBack() {
    window.history.back();
  }
  
  // Función para abrir la configuración personal
  function openPersonalInfo() {
    
  }
  
  // Función para abrir la configuración de perfil
  function openProfileSettings() {
    
  }
  
  // Función para abrir la configuración de preferencias
  function openPreferences() {
    
  }
  
  // Función para abrir la configuración de seguridad
  function openSecuritySettings() {
    
  }
  
  // Función para cambiar el idioma
  function changeLanguage(event) {
    const selectedLanguage = event.target.value;
    
  }
  
  // Función para cerrar sesión
  function logout() {
    
  }
  
  
  function buildSettingsPage() {
    // Botón de retroceso
    const backButton = createElement("button", { className: "back-button", onclick: goBack });
    backButton.appendChild(createElement("i", { className: "fas fa-arrow-left" }));
  
    
    const pageTitle = createElement("h1", { className: "page-title" }, "Settings");

    const accountTitle = createElement("h2", { className: "account-title" }, "account");
    // Tarjeta de información de la cuenta
    const accountCard = createElement(
        "div",
        { className: "account-card" },
        createElement("img", { src: "/src/img/varios/perfil.png", alt: "Profile Picture", style: "margin-right: 10px;" }),
        createElement(
          "div",
          { className: "user-info", style: "display: flex; flex-direction: column;" },
          createElement("h2", {}, "John Doe"),
          createElement("button", { className: "personal-info-button", onclick: openPersonalInfo, style: "margin-top: 5px;" }, "Personal Info ", createElement("i", { className: "fas fa-chevron-right" }))
        )
      );

    const settingsTitle = createElement("h2", { className: "settings-title" }, "Settings");
  
    
    const settingsList = createElement(
      "ul",
      { className: "settings-list" },
      createElement("li", {}, createElement("button", { onclick: openProfileSettings }, createElement("i", { className: "fas fa-user" }), createElement("h3", {}, "Profile"), createElement("p", {}, "Edit your profile details"), createElement("i", { className: "fas fa-chevron-right" }))),
      createElement("li", {}, createElement("button", { onclick: openPreferences }, createElement("i", { className: "fas fa-cog" }), createElement("h3", {}, "Preferences"), createElement("p", {}, "Customize your app settings"), createElement("i", { className: "fas fa-chevron-right" }))),
      createElement("li", {}, createElement("button", { onclick: openSecuritySettings }, createElement("i", { className: "fas fa-lock" }), createElement("h3", {}, "Security"), createElement("p", {}, "Manage your security settings"), createElement("i", { className: "fas fa-chevron-right" }))),
      createElement("li", {}, createElement("button", {}, createElement("i", { className: "fas fa-language" }), createElement("h3", {}, "Language"), createElement("select", { onchange: changeLanguage }, createElement("option", { value: "en" }, "English"), createElement("option", { value: "es" }, "Español"), createElement("option", { value: "fr" }, "Français")))),
    );
  
    
    const logoutButton = createElement("button", { className: "logout-button", onclick: logout }, "Log Out");
  
    
    document.body.appendChild(backButton);
    document.body.appendChild(pageTitle);
    document.body.appendChild(accountTitle);
    document.body.appendChild(accountCard);
    document.body.appendChild(settingsTitle);
    document.body.appendChild(settingsList);
    document.body.appendChild(logoutButton);
  }
  
  
  document.addEventListener("DOMContentLoaded", buildSettingsPage);
  