import BarNavigation from "../../components/bar/bar.js";

// Función para crear elementos HTML con propiedades y clases
function createElement(type, props = {}, ...children) {
  const element = document.createElement(type);

  // Asignar propiedades y clases
  Object.keys(props).forEach((key) => {
    if (key.startsWith("on")) {
      element.addEventListener(key.slice(2).toLowerCase(), props[key]);
    } else {
      element[key] = props[key];
    }
  });

  // Agregar hijos
  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
}

// Crear la sección "machine-types"
function createMachineTypes() {
  return createElement(
    "section",
    { id: "machine-types" },
    createElement("h2", {}, "Types of Machines"),
    createElement(
      "ul",
      { className: "machine-types" },
      createElement("li", {},
        createElement(
          "div",
          { className: "card-button-1" },
          createElement("img", { src:"../../imgs/machine-types/Cardio.png", alt: "Cardio", className: "card-img" })
        )
      ),
      createElement(
        "div",
        { className: "button2-3-4" },
        createElement("li", {},
          createElement(
            "div",
            { className: "card-button-2" },
            createElement("img", { src: "../../imgs/machine-types/strength-machine.png", alt: "Strength", className: "card-img" })
          )
        ),
        createElement(
          "div",
          { className: "button3-4" },
          createElement("li", {},
            createElement(
              "div",
              { className: "card-button-3" },
              createElement("img", { src: "../../imgs/machine-types/specific-body-machine.png", alt: "Flexibility", className: "card-img" })
            )
          ),
          createElement("li", {},
            createElement(
              "div",
              { className: "card-button-4" },
              createElement("img", { src: "../../imgs/machine-types/Functional-machine.png", alt: "Functional", className: "card-img" })
            )
          )
        )
      )
    )
  );
}

// Construir la página
function buildPage() {
  const header = createElement(
    "header",
    {},
    createElement("h1", {}, "Gym Status"),
    createElement("p", { className: "description" }, "Stay informed about machine availability and get recommendations for your routine.")
  );

  const searchContainer = createElement(
    "div",
    { className: "search-container" },
    createElement("i", { className: "fas fa-search" }),
    createElement("input", { type: "text", placeholder: "Search machines...", id: "search-bar" })
  );

  const routineMachines = createElement(
    "section",
    { id: "routine-machines" },
    createElement("h2", {}, "Machines for Your Routine"),
    createElement(
      "ul",
      { className: "card-list" },
      createMachineCard("../../imgs/machines/Elliptical machine.png", "Elliptical", "Great for cardio and endurance training.", 3, "Second floor"),
      createMachineCard("../../imgs/machines/Cable machines.png", "Stationary Bike", "Perfect for high-intensity interval training.", 2, "Third floor")
    )
  );

  const machineTypes = createMachineTypes(); // Implementar la sección "machine-types"

  const barNavigation = new BarNavigation(); // Crear una instancia del componente BarNavigation
  document.body.appendChild(header);
  document.body.appendChild(searchContainer);
  document.body.appendChild(routineMachines);
  document.body.appendChild(machineTypes);
  document.body.appendChild(barNavigation); // Agregar el componente BarNavigation al final del cuerpo del documento
}

// Crear una tarjeta para máquinas
function createMachineCard(imageSrc, title, description, available, location) {
  return createElement(
    "li",
    { className: "card" },
    createElement("div", { className: "card-left" }, createElement("img", { src: imageSrc, className: "card-image" })),
    createElement(
      "div",
      { className: "card-right" },
      createElement("h3", { className: "card-title" }, title),
      createElement("p", { className: "card-description" }, description),
      createElement(
        "div",
        { className: "card-details" },
        createElement("p", { className: "available-machines" }, `${available} Available`),
        createElement("p", { className: "location" }, createElement("i", { className: "fas fa-location-dot" }), location)
      )
    )
  );
}

// Ejecutar al cargar el contenido
document.addEventListener("DOMContentLoaded", buildPage);
