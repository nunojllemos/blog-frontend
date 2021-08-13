import Link from 'next/link'
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa'

import Logo from '../shared/logo'
import style from './index.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
        <div className="container">
          <div className={style.wrapper}>

          <section className={style.leftSide}>
            <Logo />
            <nav>
              <Link href="#">
                <a>Estratégia Digital</a>
              </Link>
              <Link href="#">
                <a>Ecommerce</a>
              </Link>
              <Link href="#">
                <a>Branding</a>
              </Link>
              <Link href="#">
                <a>Web & Apps</a>
              </Link>
            </nav>
          </section>

          <section className={style.rightSide}>
            <div>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </section>
          </div>

        </div>
      </header>
  )
}

