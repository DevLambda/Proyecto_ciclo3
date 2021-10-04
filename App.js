import './styles/App.css';

function App() {
  return (
    <div className="App">
        <header>
            <ul className="navbar">
                <span className="logo">DevLambda</span>
                <li className="botonNavbar">Gestionar ventas</li>
                <li className="botonNavbar">Gestionar productos</li>
                <li className="botonNavbar">Gestionar usuarios</li>
                <button type="submit" class="botonSalir">Salir</button>
            </ul>
        </header>
        <main>
            <section>
                <div className="entradaTextos">
                    <div className="titulo">Agregar nuevo producto</div>
                    <div className="descripcion">Ingresa los datos del nuevo producto.</div>
                </div>
            </section>
                <div className="container">
                <form action="/action_page.php">
                    <div ClassName="labelform">
                    <label for="fname">ID producto</label>
                    <input type="text" id="fname" nameName="firstname" placeholder="000001..."/>
                
                    <label for="lname">Descripción del producto</label>
                    <input type="text" id="lname" nameName="Descripción" placeholder="Zapatos, camisas..."/>

                    <label for="lname">Valor producto</label>
                    <input type="text" id="lname" nameName="Descripción" placeholder="Ingresa el valor en pesos..."/>
                
                    <label for="estado">Selecciona el estado</label>
                    <select id="estado" nameName="estado">
                        <option value="Disponible">Disponible</option>
                        <option value="No disponible">No disponible</option>
                    </select>
                    <input type="submit" value="Agregar nuevo producto"></input>
                    </div>
                </form>
                </div>
            <section>    
            </section>
        </main>
        <footer>    
            <div class="footer">Equípo DevLambda / Grupo 8 / Ciclo 3 / UdeA / MisionTic 2022</div>   
        </footer> 
    </div>
  );
}
export default App;
