import './App.css';

function App() {
  return (
    <div className="App">
         <header>
        <ul class="navbar">
            <span class="logo">DevLambda</span>
            <li class="botonNavbar">Gestionar ventas</li>
            <li class="botonNavbar">Gestionar productos</li>
            <li class="botonNavbar">Gestionar usuarios</li>
            <button type="submit" class="botonSalir">Salir</button>
        </ul>
    </header>
    <main>
        <section>
            <div class="entradaTextos">
                <div class="titulo">Gestionar productos</div>
                <div class="descripcion">Aquí encuentras los productos, los actualizas o agregas nuevos.</div>
            </div>
        </section>
        <section>    
            <ul class="toolsProducts">
                <li>
                    <div class="label">Ingresa el ID del producto:</div>
                    <div>
                        <input class="buscar" placeholder=""/>
                        <button class="botonBuscar" type="submit">Buscar Producto</button>
                    </div>
                </li>
                <button class="botonAgregar1">Agregar nuevo Producto</button>
            </ul>
            <div class="productsTable">
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
                            <td><label class="badgeAvailable">Disponible</label></td>
                            <td><button class="editButton"><span class="material-icons md-18">edit</span>
                            </button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Maletín</td>
                            <td>$90.000</td>
                            <td><label class="badgeNotAvailable">No disponible</label></td>
                            <td>
                                <button class="editButton"><span class="material-icons">edit</span></button>
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
        <div class="footer">Equípo DevLambda / Grupo 8 / Ciclo 3 / UdeA / MisionTic 2022</div>   
    </footer>  
    </div>
  );
}

export default App;
