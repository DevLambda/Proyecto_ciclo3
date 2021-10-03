import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
    <div class="divheader">
            <div><h1 class = "h1logo">DevLambda</h1></div>
            <div class="divheader">
                <ul> <h5 class="h4logo">Registrar venta</h5></ul>
                <ul> <h5 class="h4logo">Estado venta</h5> </ul>
                <ul><h5 class="h4logo">Gestión de vendedores</h5></ul>
                <ul><h5 class="h4logo">Gestión de usuarios</h5></ul>
                <button type="submit" id="botonSalir">Salir</button>
            </div>
    </div>

    <div class="divsection">
     <div id="div1"> <h1>Gestión de <br /> usuarios</h1> </div>
     <div id="div2"> <h4>Seleccione la tarea a realizar</h4>
    </div>
    
    <div class="div3">
        <button  class="botonUsuario">Editar usuarios</button>
        <button  class="botonUsuario">Crear nuevo usuario</button>  
    </div>

     
    </div>
        <div class="divfooter">Equípo Devlambda/Gruppo8/Ciclo3/UdeA/MisionTic 2022
    </div>
</div>
    </div>
  );
}

export default App;
