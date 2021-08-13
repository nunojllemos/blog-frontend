import style from './index.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../shared/logo'
import {Header} from '../Header'
import {Footer} from '../Footer'

interface PageLayoutProps{
  
}

export const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      
      {children}
      
      <Footer />
    </>
  )
}