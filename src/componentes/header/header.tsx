import './header.css'; // Importa el archivo CSS para estilos del encabezado

const Header = () => { // Define el componente Header
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="https://www.jaltest.com/es/telematics/">Jaltest Telematics</a></li>
                    <li><a href="https://www.jaltest.com/es/diagnosis/">Jaltest Diagnostics</a></li>
                    <li><a href="https://www.jaltest.com/es/jaltest-university/">Jaltest University</a></li>
                    <li><a href="https://www.jaltest.com/es/tools/">Jaltest Tools</a></li>
                    <li><a href="https://www.jaltest.com/es/jaltest-isobus/">Jaltest Isobus</a></li>
                    <li><a href="https://www.jaltest.com/es/oem-solutions/">OEM Solutions</a></li>
                    <li><a href="https://www.jaltest.com/es/soluciones-defensa/">Soluciones para defensa</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header; // Exporta el componente Header para su uso en otros archivos
