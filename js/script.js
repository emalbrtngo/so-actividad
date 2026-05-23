const inputNombre = document.querySelector('input');
const botonSaludar = document.querySelector('button');

botonSaludar.addEventListener('click', () => {

    const nombre = inputNombre.value;

    alert(`Hola ${nombre}, bienvenido/a. Gracias por la visita`);

});