import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <header>
        <ul className="Header">
            <li id ="logo">DevLambda</li>
            <li className="">Administración de ventas</li>
            <li className="">Gestión de vendedores</li>
            <li className="">Gestión de usuarios</li>
            <button type="submit" className="botonSalir">Salir</button>
        </ul>
      </header>

      <section id="container">
              <div className="title_page">
                  <h1><i className="far fa-file-alt"></i> Registro de venta</h1>
                  <span id="textocorto"> Ingrese los datos de la venta</span>
              </div>
              <div className="datos_cliente">
                  <div className="action_cliente">
                      <h4>Datos del cliente</h4>
                      <a href="#" className="btn_new btn_new_cliente"><i className="fas fa-plus"></i>Nuevo Cliente</a>
                  </div>
                  <form name ="form_new_cliente_venta" id= "form_new_cliente_venta" class="datos">
                      <input type="hidden" name="action" value="addCliente"/>
                      <input type="hidden" id="idCliente "name="idCliente" value="" required/>
                      <div className="wd50">
                          <label>Cedula</label>
                          <input type="text" name="ced_cliente" id="ced_cliente"  required/>
                      </div>
                      <div className="wd50">
                          <label>Nombre</label>
                          <input type="text" name="nom_cliente" id="nom_cliente" disabled required/>
                      </div>
                      <div className="wd50">
                          <label>Teléfono</label>
                          <input type="text" name="tel_cliente" id="tel_cliente" disabled required/>
                      </div>
                      <div className="wd50">
                          <label>Dirección</label>
                          <input type="text" name="dir_cliente" id="dir_cliente" disabled required/>
                      </div>
                      <div id="div_registro_cliente" className= "wd100">
                          <button type="submit" className="btn_save"><i className="far fa-save fa-lg"></i>Guardar</button>
                      </div>
                  </form>
              </div>
              <div className="datos_venta">
                  <h4>Datos del  Vendedor</h4>
                  <div className="datos">
                      <div className="wd50">
                          <label>ID Vendedor</label>
                          <input type="text" name="idVendedor" id="idVendedor"  required/>
                      </div>
                      <div className="wd50">
                          <label>Nombre</label>
                          <input type="text" name="nom_cliente" id="nom_cliente" disabled required/>
                      </div>
                      <div className="wd50">
                          <label>Fecha de facturación</label>
                          <input type="date" name="fecha_fact" id="fecha_fact"  required/>
                      </div>
                      <div className="wd50">
                          <label>fechaPago</label>
                          <input type="date" name="fecha_pago" id="fecha_pago"  required/>
                      </div>
                      <div className="wd100">
                          <label>Acciones</label>
                          <a href="#" className="btn_ok" id="btn_anular_venta"><i className="fas fa-ban"></i>Anular</a>
                          <a href="#" className="btn_new" id="btn_facturar_venta"><i className="fas fa-edit"></i>Procesar</a>
                      </div>
                  </div>
              </div>
              <table border="1"className="tbl_venta">
                  <thead>
                      <tr>
                          <th width="100px">Código</th>
                          <th width="150px">Descripción</th> 
                          <th width="150px">Existencia</th>
                          <th width="100px">Cantidad</th>
                          <th class="150px">Precio</th>
                          <th class="150px"> Acción</th>
                      </tr>
                      
                      <tr>
                          <td><input type="text" name="txt_cod_producto" id="txt_cod_producto"/></td>
                          <td id="txt_descripcion">-</td>
                          <td id="txt_existencia">-</td>
                          <td><input type="text" name="txt_cant_producto" id="txt_cod_producto" value="0" min="1" disabled/></td>
                          <td id="txt_precio" className="textright">0.00</td>
                          <td><a href="#" className="link_add" id="add_product_venta"><i className="fas fa-plus"></i></a></td>
                      </tr>
                      <tr>
                          <th>Código</th>
                          <th colspan="2">Descripción</th>
                          <th>Cantidad</th>
                          <th className="textright">Precio Unitario</th>
                          <th className="textright">Precio Total</th>
                          <th>Acción</th>
                      </tr>
                  </thead>
                  <tbody id="detalle_venta">
                      <tr>
                          <td>1001</td>
                          <td colspan="2">Tennis</td>
                          <td className="textcenter">1</td>
                          <td className="textright">100.00</td>
                          <td className="textright">100.00</td>
                          <td className=""><a className="link_delate" href="#" onclick= "event.preventDefault(); del_product_detalle(1);"><i className="far fa-trash-alt"></i>Eliminar</a></td>
                      </tr>
                      <tr>
                          <td>1002</td>
                          <td colspan="2">Camisas</td>
                          <td className="textcenter">1</td>
                          <td className="textright">150.00</td>
                          <td className="textright">100.00</td>
                          <td className=""><a className="link_delate" href="#" onclick= "event.preventDefault(); del_product_detalle(1);"><i className="far fa-trash-alt"></i></a>
                          </td>
                      </tr>
                  </tbody>
                  <tfoot>
                      <tr>
                          <td colspan="5" className="textright">Total </td>
                          <td className="textright">1000.00</td>
                      </tr>
                  </tfoot>
              </table>
        </section>
      <script src="js/funciones.js"></script>        
    </div>
  );
}

export default App;
