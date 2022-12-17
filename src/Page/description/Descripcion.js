import React, { useEffect, useState } from 'react'
import "./descripcion.css"
import img1 from '../../assets/img/images/auto-deportivo.jpg'
import accesorios from '../../data/accesorios'
const Descripcion = (item) => {
    
    const [data, setData] = useState({});
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => { 
                resolve(accesorios); 
            
        }, 3000);
    });

    getData.then(res => setData(res));
}, [])
    const {name, mainCategory, secondaryCategory, price} = item;

    return(
        <div className="container" data={data}>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
        <div  >
          <div >
            <div >
              <img
              className="card-img-top1"
                src={img1}  alt="..." />
            </div>
            <div >
              <div  className="container_producto">
                <h5 >Producto de Muestra</h5>
                <p className="parrafo_valor" >
               $9.99
                </p>
                <p  className="parrafo_texto">
               
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Autem quo quam voluptatum voluptas assumenda corporis quos
                    voluptates sed ab maxime, placeat exercitationem consectetur
                    distinctio doloribus reiciendis quaerat neque? Cumque,
                    pariatur.
                  
                </p>
                <h4>{data.name}</h4>
          <p>{data.mainCategory}</p>
          <p>{data.secondaryCategory}</p>
          <p>S/ {data.price}</p>
                <br/>
                <button className="button_11" >Añadir Carrito</button>
              </div>
            </div>
          </div>
        </div>
    </div>
        
    )
}
export default Descripcion