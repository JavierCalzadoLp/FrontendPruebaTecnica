// Importamos las dependencias necesarias
import React, { useState, useEffect } from 'react'; // Importamos React y sus hooks useState y useEffect
import './App.css'; // Importamos los estilos CSS para la aplicación
import Header from './componentes/header/header.tsx'; // Importamos el componente Header
import Footer from "./componentes/footer/footer.tsx"; // Importamos el componente Footer

// Definimos la interfaz para los usuarios
interface User { // Definimos una interfaz para describir la estructura de los usuarios
    picture: {
        large: string;
    };
    name: {
        first: string;
        last: string;
    };
    email: string;
    location: {
        country: string;
    };
}

// Definimos el componente de la aplicación
const App: React.FC = () => {  // Definimos un componente funcional llamado App
    // Definimos el estado para almacenar la lista de usuarios
    const [users, setUsers] = useState<User[]>([]); // Utilizamos el hook useState para crear un estado para los usuarios

    // Función para obtener los usuarios desde la API
    const buscarUsuarios = async () => { // Definimos una función asincrónica para obtener usuarios de una API
        try {
            const respuesta = await fetch('https://randomuser.me/api/?results=100'); // Realizamos una solicitud a la API para que nos devuelva 100 usuarios
            const datos = await respuesta.json(); // Convertimos la respuesta en formato JSON
            setUsers(datos.results); // Actualizamos el estado de los usuarios con los datos obtenidos
        } catch (error) {
            console.error('Error al buscar usuarios:', error); // Manejamos errores en caso de que ocurran
        }
    };

    // Efecto para cargar los usuarios cuando el componente se monta
    useEffect(() => { // Utilizamos el hook useEffect para realizar efectos secundarios en componentes
        buscarUsuarios(); // Llamamos a la función buscarUsuarios() cuando el componente se monta
    }, []); // La lista de dependencias está vacía, por lo que este efecto se ejecuta solo una vez al montar el componente y así evitamos que ocurra un loop infinito

    // Función para eliminar un usuario por índice
    const eliminarUsuario = (index: number) => { // Definimos una función para eliminar un usuario del estado por su índice
        const updatedUsers = [...users]; // Creamos una copia del array de usuarios. Así aseguramos que estamos trabajando con una copia y no modificamos directamente el estado original.
        updatedUsers.splice(index, 1); // Eliminamos el usuario en la posición indicada
        setUsers(updatedUsers); // Actualizamos el estado de los usuarios con la nueva lista sin el usuario eliminado
    };

    // Renderizamos la tabla de usuarios
    return ( // Devolvemos la estructura JSX del componente
    <div className="app">
        <Header /> {/* Renderizamos el componente Header */}
        <h1>Lista de Usuarios</h1>
            <table>
                <thead>
                <tr>
                    <th>ID Usuario</th>
                    <th>Imagen</th>
                    <th>Nombre Completo</th>
                    <th>Email</th>
                    <th>País</th>
                    <th>Acción</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => ( // Mapeamos los usuarios para mostrar cada uno en una fila de la tabla
                    <tr key={index}> {/* Clave única para cada fila */}
                        <td>{index + 1}</td> {/* Mostramos el ID del usuario (índice + 1) */}
                        <td><img src={user.picture.large} alt="User" /></td> {/* Mostramos la imagen del usuario */}
                        <td>{user.name.first} {user.name.last}</td> {/* Mostramos el nombre completo del usuario */}
                        <td>{user.email}</td> {/* Mostramos el email del usuario */}
                        <td>{user.location.country}</td> {/* Mostramos el país del usuario */}
                        <td><button onClick={() => eliminarUsuario(index)}>Eliminar</button></td> {/* Botón para eliminar el usuario, llama a la función eliminarUsuario mandando el index como parámetro */}
                    </tr>
                ))}
                </tbody>
            </table>
        <Footer /> {/* Renderizamos el componente Footer */}
        </div>
    );
};

// Exportamos el componente App como el valor predeterminado del archivo
export default App 
