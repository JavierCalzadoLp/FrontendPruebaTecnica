import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/**
 * Este fichero es nuestro punto de entrada de la aplicación React. Aquí realizamos la renderización inicial del componente
 * principal de la aplicación ('App') en el DOM.
 * 1. Se importan las bibliotecas necesarias.
 * 2. Se utiliza ReactDOM.createRoot para crear un nuevo árbol de renderizado en la raíz del elemento con el id "root" del documento HTML. 
 * Luego, se utiliza el metodo render para renderizar el componente 'App' dentro de este árbol de renderizado.
 * 3. El componente 'App' está envuelto en un componente <React.StrictMode>. Esto activa el modo estricto de React, 
 * que realiza comprobaciones adicionales y proporciona advertencias en el desarrollo para ayudar a detectar problemas potenciales en la aplicación.
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
