import React from 'react'
import '../Page/Inicio.css'
import '../mediaQuery/MediaQuery.css'
import '../mediaQuery/MediaQueryM.css'
import imgPubli from '../assets/img/images/backg_ini3.jpg'
import imgEjem from '../assets/img/images/partes-motor_1.webp'
import { useTranslation} from "react-i18next"


const Inicio = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className='box__inicio' id='box__ini'>
      <div className='box__img'>
        <div className='box__container-ini'>
          <div className='box__message'>
            <div className='box__publicidad'>
              <h1>Bienvenidos</h1>
              <h1>{t('inicio.hello-world')}</h1>
              <button onClick={() => i18n.changeLanguage("es")}>ES</button>
              <button onClick={() => i18n.changeLanguage("en")}>EN</button>
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
      </div>
      <div id='ver-mas'>
      </div>
      <div className='box__container-principal'>
        <div className='box__container-card'>
          <h3>{t('inicio.motors')}</h3>
          <div className='box__section-card'>
            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
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
