import React from 'react'
import '../Page/Inicio.css'
import imgPubli from '../assets/img/images/backg2.jpg'
import imgEjem from '../assets/img/images/partes-motor_1.webp'
import list from '../data/data'
import Card from '../Components/card'

const Inicio = ({handleClick}) => {




  return (
    <div className='box__inicio' id='box__ini'>
      <div className='box__img'>
        <img src={imgPubli} alt="" />
      </div>

      <div className='box__message'>
        <div className='box__publicidad'>
          <h1>Bienvenidos</h1>
          <p>
            Conoce lo mejor en repuestos
            <br />lubricantes, motores y mas...
          </p>
          <h3>Envios a todo el Peru</h3>
          <div className='box__verMas'>
            <button>VER MAS</button>
          </div>
        </div>
        <div className='box__video'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tNaYJX9k2oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

      <div className='content-galery'>
        <section className='section-galery'>
          {
            list.map((item)=>(
              <Card key={item.id} item={item} handleClick={handleClick}/>
            ))
          }
        </section>
      </div>

      <div className='box__container-principal'>
        <div className='box__container-card'>
          <h3>Motores</h3>
          <div className='box__section-card'>
            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>
          </div>
        </div>

        <div className='box__container-card'>
          <h3>Repuestos</h3>
          <div className='box__section-card'>
            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>
          </div>
        </div>

        <div className='box__container-card'>
          <h3>Accesorios</h3>
          <div className='box__section-card'>
            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>
          </div>
        </div>

        <div className='box__container-card'>
          <h3>Lubricantes</h3>
          <div className='box__section-card'>
            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>NOMBRE: </h4>
              <p>PRECIO: </p>
              <button>Ver mas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio
