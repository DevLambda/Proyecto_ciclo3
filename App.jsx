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
        <h1>Datos Venta</h1>


        <div className="infoVenta">
          <div className="infoVenta_campos">
            <span>ID VENTA</span>
            <strong> ID VENTA </strong>
          </div>
          <div className="infoVenta_campos">
            <span>FECHA VENTA</span>
            <i>FECHA VENTA </i>
          </div>
          <div className="infoVenta_campos">
            <span>FECHA PAGO</span>
            <i>FECHA PAGO</i>
          </div>
          <div className="infoVenta_campos">
            <span>ESTADO VENTA</span>
            <i><select className="form-select form-select-sm" aria-label=".form-select-sm example">
              <option value="1">ENTREGADA</option>
              <option value="2">CANCELADA</option>
              <option value="3">EN PROCESO</option></select></i>
          </div>

          <div className="infoVenta_campos">
            <span>VALOR TOTAL</span>
            <i>VALOR TOTAL </i>
          </div>
        </div>


        <div className="infoCliente">
          <div className="idCliente_campos">
            <span>ID CLIENTE</span>
            <i>ID CLIENTE</i>
          </div>

          <div className="idCliente_campos">
            <span>NOMBRE CLIENTE</span>
            <i>NOMBRE CLIENTE</i>
          </div>

          <div className="idCliente_campos">
            <span>ID VENDEDOR</span>
            <i>ID VENDEDOR</i>
          </div>

          <div className="idCliente_campos">
            <span>PRODUCTO</span>
            <i>PRODUCTO</i>
          </div>

          <div className="idCliente_campos">
            <span>CANTIDAD</span>
            <i>CANTIDAD</i>
          </div>
        </div>

        <button className="Guardar">Guardar</button>
      </main>
    </div>
  );
}

export default App;
