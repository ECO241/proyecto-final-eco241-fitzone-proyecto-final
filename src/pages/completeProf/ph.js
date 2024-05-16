class ProfileConfig extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.profileData = {
          name: '',
          birthDate: '',
          gender: '',
          height: '',
          weight: ''
      };
  }

  connectedCallback() {
      this.render();
      this.attachEventListeners();
  }

  attachEventListeners() {
      this.shadowRoot.querySelector('form').addEventListener('submit', this.handleSubmit.bind(this));
      this.shadowRoot.querySelectorAll('input, select').forEach(input => {
          input.addEventListener('input', this.handleInputChange.bind(this));
      });
  }

  handleInputChange(event) {
      const { name, value } = event.target;
      this.profileData[name] = value;
  }

  handleSubmit(event) {
      event.preventDefault();
      if (this.validateForm()) {
          console.log('Profile data submitted:', this.profileData);
      } else {
          console.log('Form is not valid');
      }
  }

  validateForm() {
      const { name, birthDate, gender, height, weight } = this.profileData;
      return name && birthDate && gender && height && weight;
  }

  createElement(tag, attributes = {}, children = []) {
      const element = document.createElement(tag);
      Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
      children.forEach(child => element.appendChild(child));
      return element;
  }

  render() {
      const link = this.createElement('link', { rel: 'stylesheet', type: 'text/css', href: './ph.css' });
      const imgBack = this.createElement('img', {
          src: '../../imgs/left arrow.png',
          onclick: "window.location.href='../physicalactivity/physicalactivity.html';"
      });

      const title = this.createElement('h1', {}, [document.createTextNode('Complete Your Profile')]);
      const description = this.createElement('p', {}, [document.createTextNode('Complete your profile to enjoy a personalized experience')]);

      const userImageContainer = this.createElement('div', { class: 'circle-container' }, [
          this.createElement('img', { src: '../../imgs/user.png', alt: 'User Image', class: 'user-image' })
      ]);

      const form = this.createElement('form', {}, [
          this.createElement('div', { class: 'input-container' }, [
              this.createElement('input', { type: 'text', id: 'nombre', name: 'name', placeholder: 'Full name', required: 'required' })
          ]),
          this.createElement('div', { class: 'input-container' }, [
              this.createElement('input', { type: 'date', id: 'cumpleanos', name: 'birthDate', placeholder: 'Date of birth', required: 'required', class: 'custom-input' })
          ]),
          this.createElement('div', { class: 'input-container' }, [
              this.createElement('select', { id: 'genero', name: 'gender', required: 'required' }, [
                  this.createElement('option', { value: '', disabled: 'disabled', selected: 'selected' }, [document.createTextNode('Gender')]),
                  this.createElement('option', { value: 'masculino' }, [document.createTextNode('Male')]),
                  this.createElement('option', { value: 'femenino' }, [document.createTextNode('Female')]),
                  this.createElement('option', { value: 'other' }, [document.createTextNode('Other')])
              ])
          ]),
          this.createElement('div', { class: 'input-container2' }, [
              this.createElement('div', { class: 'input-group' }, [
                  this.createElement('input', { type: 'number', id: 'altura', name: 'height', placeholder: 'Height', required: 'required' })
              ]),
              this.createElement('div', { class: 'input-group' }, [
                  this.createElement('input', { type: 'number', id: 'peso', name: 'weight', placeholder: 'Weight', required: 'required' })
              ])
          ]),
          this.createElement('center', {}, [
              this.createElement('button', { type: 'submit', class: 'gradient-button' }, [document.createTextNode("Let's get started!")])
          ])
      ]);

      const container = this.createElement('center', {}, [
          description,
          userImageContainer,
          form
      ]);

      this.shadowRoot.innerHTML = '';
      this.shadowRoot.append(link, imgBack, title, container);
  }
}

customElements.define("profile-configuration", ProfileConfig);
