import React from 'react'
import '../Page/Inicio.css'
import imgPubli from '../assets/img/images/backg_ini3.jpg'
import imgEjem from '../assets/img/images/partes-motor_1.webp'

const Inicio = () => {
  return (
    <div className='box__inicio' id='box__ini'>
      <div className='box__img'>
        <img src={imgPubli} alt="" />
      </div>

      <div className='box__container-ini'>
        <div className='box__message'>
          <div className='box__publicidad'>
            <h1>Bienvenidos</h1>
            <p>
              Conoce lo mejor en repuestos
              <br />lubricantes, motores y mas...
            </p>
            <div className='box__ver-Mas'>
              <a href='#ver-mas'>VER MAS</a>
            </div>
          </div>

          <div className='box__video'>
            <iframe className='video-Y' src="https://www.youtube.com/embed/tNaYJX9k2oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          
        </div>
      </div>

      <div className='box__container-principal' id='ver-mas'>
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
