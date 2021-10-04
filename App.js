import './App.css';

function App() {
  return (
    <div className="App">
         <header>
        <ul class="navbar">
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
                <div className="titulo">Gestionar productos</div>
                <div className="descripcion">Aquí encuentras los productos, los actualizas o agregas nuevos.</div>
            </div>
        </section>
        <section>    
            <ul className="toolsProducts">
                <li>
                    <div className="label">Ingresa el ID del producto:</div>
                    <div>
                        <input className="buscar" placeholder=""/>
                        <button className="botonBuscar" type="submit">Buscar Producto</button>
                    </div>
                </li>
                <button className="botonAgregar1">Agregar nuevo Producto</button>
            </ul>
            <div className="productsTable">
                <table summary="Productos registrados">
                    <caption></caption>
                        <thead>
                        <tr>
                            <th scope="col">ID Producto</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Actividad</th>
                        </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Zapatos</td>
                            <td>$120.000</td>
                            <td><label className="badgeAvailable">Disponible</label></td>
                            <td><button className="editButton"><span classname="material-icons md-18">edit</span>
                            </button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Maletín</td>
                            <td>$90.000</td>
                            <td><label className="badgeNotAvailable">No disponible</label></td>
                            <td>
                                <button className="editButton"><span className="material-icons">edit</span></button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        </section>
    </main>
    <footer>    
        <div className="footer">Equípo DevLambda / Grupo 8 / Ciclo 3 / UdeA / MisionTic 2022</div>   
    </footer>  
    </div>
  );
}

export default App;
