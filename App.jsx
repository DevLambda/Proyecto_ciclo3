import './App.css';

function App() {
  return (
    <div classNameName="App">
      <header>
        <ul className="Header">
            <li id="logo">DevLambda</li>
            <li className="Modulos">Gestión de ventas</li>
            <li className="Modulos">Gestión de productos</li>
            <li className="Modulos">Gestión de usuarios</li>
            <button type="submit" className="botonSalir">Salir</button>
        </ul>
      </header>
    
    <main>
        <h1>Ventas Realizadas</h1>
        <span id="textocorto">Consulta el histórico de ventas, actualiza el estado de estas y/o edita la información que requieras. Lo único que no podrás editar es el ID de venta.</span>
        
        <ul className="fitros">
            <li className="nombreFiltros">ID Venta</li>
            <div className="buscar">
                <li>
                    <input  type="text" name="idventa" id="search_input"/>
                    <i className="bi bi-search"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </li>
            </div>
            <li className="nombreFiltros">ID Cliente</li>
            <div className="buscar">
                <li>
                    <input  type="text" name="idventa"/>
                    <i className="bi bi-search"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </li>
            </div>
            <li className="nombreFiltros">Nombre Cliente</li>
            <div className="buscar">
                <li>                   
                    <input  type="text" name="idventa"/>
                    <i className="bi bi-search iconoBuscar"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </li>
            </div>
        </ul>


        <div className="tablaVentas">
            <div className="tablaVentasCampos">
                <ul>
                    <li>
                        <div className="campos">
                            <div className="idVenta">
                                <span>ID VENTA</span>
                            </div>
                            <div className="fechaVenta">
                                <span>FECHA VENTA</span>
                            </div>
                            <div className="fechaPago">
                                <span>FECHA PAGO</span>
                            </div>
                            <div className="estadoVenta">
                                <span>ESTADO VENTA</span>
                            </div>
                            <div className="idCliente">
                                <span>ID CLIENTE</span>
                            </div>
                            <div className="cliente">
                                <span>NOMBRE CLIENTE</span>
                            </div>
                            <div className="valorTotal">
                                <span>VALOR TOTAL</span>
                            </div>
                            <div className="vendedor">
                                <span>ID VENDEDOR</span>
                            </div>
                            <div className="editar">
                                <span></span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="tablaVentasRegistros">
                <ul>
                    <li>
                        <div className="campos">
                            <div className="idVenta">
                                <span>V001</span>
                            </div>
                            <div className="fechaVenta">
                                 <span>26/09/2021</span>
                            </div>
                            <div className="fechaPago">
                                <span>27/09/2021</span>
                            </div>
                            <div className="estadoVenta">
                                <span className="entregada">ENTREGADA</span>
                            </div>
                            <div className="idCliente">
                                <span>C001</span>
                            </div>
                            <div className="cliente">
                                <span>LAURA MARCELA ROJAS DIAZ</span>
                            </div>
                            <div className="valorTotal">
                                <span>$100.000</span>
                            </div>
                            <div className="vendedor">
                                <span>1013681</span>
                            </div>
                            <div className="editar">
                              <button class="editButton"><span class="material-icons md-18">edit</span></button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="campos">
                            <div className="idVenta">
                                <span>V002</span>
                            </div>
                            <div className="fechaVenta">
                                 <span>26/09/2021</span>
                            </div>
                            <div className="fechaPago">
                                <span>27/09/2021</span>
                            </div>
                            <div className="estadoVenta">
                                <span className="cancelada">CANCELADA</span>
                            </div>
                            <div className="idCliente">
                                <span>C001</span>
                            </div>
                            <div className="cliente">
                                <span>LAURA MARCELA ROJAS DIAZ</span>
                            </div>
                            <div className="valorTotal">
                                <span>$100.000</span>
                            </div>
                            <div className="vendedor">
                                <span>1013681</span>
                            </div>
                            <div className="editar">
                              <button class="editButton"><span class="material-icons md-18">edit</span></button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </main>
    <footer>    
        <div class="footer">Equipo DevLambda / Grupo 8 / Ciclo 3 / UdeA / MisionTic 2022</div>   
    </footer> 
    </div>
  );
}

export default App;
