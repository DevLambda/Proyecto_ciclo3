import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Productos = () => {
  return (
    <div>
        <Header/>
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
        <Footer/>
    </div>
  );
}
export default Productos;
