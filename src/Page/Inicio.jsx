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
              <h1>{t('Bienvenidos')}</h1>
              <p>
                {t('Conoce lo mejor en repuestos')}
                <br />{t('lubricantes, motores y mas')}...
              </p>
              <div className='box__ver-Mas'>
                <a href='#ver-mas'>{t('VER MAS')}</a>
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
          <h3>{t('motors')}</h3>
          <div className='box__section-card'>
            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>
          </div>
        </div>

        <div className='box__container-card'>
          <h3>{t('Repuestos')}</h3>
          <div className='box__section-card'>
            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>
          </div>
        </div>

        <div className='box__container-card'>
          <h3>{t('Accesorios')}</h3>
          <div className='box__section-card'>
            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>
          </div>
        </div>

        <div className='box__container-card'>
          <h3>{t('Lubricantes')}</h3>
          <div className='box__section-card'>
            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>

            <div className='box__card'>
              <picture>
                <img src={imgEjem} alt="" />
              </picture>
              <h4>{t('nombre')}</h4>
              <p>{t('PRECIO')}</p>
              <button>{t('Ver mas')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio
