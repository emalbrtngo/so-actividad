# 🧪 Plan de Pruebas y Documentación del Sistema (QA/Tester)

Este repositorio contiene la entrega de la **Actividad de Git (Clase 08)** para la materia Sistemas Operativos. A continuación, se detalla la documentación del proyecto, los componentes verificados y el plan de pruebas ejecutado para garantizar la estabilidad de la aplicación.

---

## 📋 Información General del Proyecto
* **Materia:** Sistemas Operativos
* **Clase:** 08 - Control de Versiones
* **Estado:** Realizado de forma individual simulando flujos de trabajo en equipo (Multi-rol: Developer, QA, Administrator).

---

## 🛠️ Componentes del Sistema

El proyecto consta de una interfaz web básica dividida en tres módulos principales:
1.  **Estructura (`index.html`):** Contiene la semántica base del sitio (Header, Main, Footer), un campo de captura de datos (`input`) y un disparador de eventos (`button`).
2.  **Diseño (`css/estilos.css`):** Capa visual con enfoque *Dark Mode* para los bloques contenedores y estilos interactivos (*hover*) en botones y elementos del footer.
3.  **Lógica (`script/script.js`):** Controlador en JavaScript encargado de la manipulación del DOM y gestión del evento de saludo.

---

## 🚀 Guía de Ejecución Local

Para desplegar y verificar el proyecto en un entorno local, siga estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/emalbrtngo/so-actividad.git](https://github.com/emalbrtngo/so-actividad.git)
    ```
2.  **Acceder al directorio:**
    ```bash
    cd so-actividad
    ```
3.  **Ejecutar la interfaz:**
    Abrir el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge o Brave).

---

## 🧪 Plan de Pruebas (Test Cases)

Se realizaron pruebas funcionales de caja negra (Black-Box Testing) sobre el entorno web para asegurar el correcto comportamiento de la lógica y los estilos:

### Caso de Prueba 01: Verificación de Diseño y UI
* **Objetivo:** Validar que los estilos CSS se apliquen correctamente.
* **Resultado esperado:** El encabezado y pie de página deben mostrarse con fondo oscuro (`#222`). El botón de "Saludar" debe cambiar su tonalidad a una más clara (`#444`) al posicionar el cursor sobre él (*hover effect*).
* **Estado:** **PASSED** ✅

### Caso de Prueba 02: Flujo Feliz - Inyección de Nombre y Saludo
* **Objetivo:** Validar que el sistema procese un nombre válido.
* **Pasos:** 1. Escribir un nombre en el campo de texto (Ej: `Emanuel`).
    2. Hacer clic en el botón "Saludar".
* **Resultado esperado:** Se debe desplegar una alerta nativa del navegador con el texto exacto: `Hola Emanuel, bienvenido/a. Gracias por la visita`.
* **Estado:** **PASSED** ✅

### Caso de Prueba 03: Validación de Campo Vacío (Edge Case)
* **Objetivo:** Verificar el comportamiento del sistema cuando el usuario no ingresa datos.
* **Pasos:**
    1. Dejar el campo de texto completamente vacío.
    2. Hacer clic en el botón "Saludar".
* **Resultado esperado:** El sistema procesa la cadena vacía y muestra el mensaje: `Hola , bienvenido/a. Gracias por la visita`. *(Nota de QA: Se sugiere para futuras versiones agregar una validación que impida enviar el formulario si el campo está vacío).*
* **Estado:** **PASSED (Comportamiento actual)** ⚠️

---

## 📌 Conclusión del Aseguramiento de Calidad
Tras la revisión de las ramas de desarrollo (`estilos` y `main`), el código cumple satisfactoriamente con los requerimientos de diseño e interactividad estipulados para la actividad de control de versiones. El repositorio se encuentra estable y listo para su correspondiente cierre y evaluación.