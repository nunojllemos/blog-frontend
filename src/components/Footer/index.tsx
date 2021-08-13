import Link from 'next/link'
import {FaYoutube, FaLinkedin,FaTwitter,FaInstagram,FaFacebookF} from 'react-icons/fa'
import Logo from '../shared/logo'
import style from './index.module.css'

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">

<section className={style.footerTop}>
  <Logo fill="#fff" />

<nav>

<div className={style.categories}>
  <p className={style.navHeader}>Categorias</p>
  <p>Estratégia Digital</p>
  <p>Ecommerce</p>
  <p>Branding</p>
  <p>Web & Apps</p>
  <p>In-house</p>
</div>

<div className={style.contacts}>
<p className={style.navHeader}>Contacto</p>
  <p>info@primariu.pt</p>
  <p>+351 253 094 811</p>
  <address>Rua do Colégio Militar Nº 235 <br />
      4835-039 Guimarães <br />
      Portugal
  </address>
</div>
</nav>


<div className={style.socialContainer}>

<p className={style.navHeader}>Social</p>
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

<section className={style.footerBottom}>
  <Link href="#">
    <a>Política de Privacidade</a>
  </Link>
  <p>BLOG @PRIMARIU - FULL DIGITAL AGENCY ©2020. Todos os direitos reservados.</p>
  <p>Developed by <a  href="#">PRIMARIU</a></p>
</section>

      </div>
    </footer>
  )
}
