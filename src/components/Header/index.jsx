import { useEffect } from 'react'
import useStore from "@/data/store";
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import Search from '@/components/Search' 

import logo from './logo.png'

import style from "./header.module.scss"

const Header = props => {
  const { darkMood, setDarkMood } = useStore()

  useEffect(() => {
    document.body.setAttribute('theme', 'light')
    /* if(darkMood === undefined) {
      if (typeof window !== 'undefined') {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setDarkMood(true);
          document.body.setAttribute('theme', 'dark')
        } else {
          setDarkMood(false);
          document.body.setAttribute('theme', 'light')
        }
      }
    } */
  }, []);
  
  const themeToggler = () => {
    setDarkMood(!darkMood)
    document.body.setAttribute('theme', darkMood ? 'dark': 'light')
  }

  const { ref, inView, entry } = useInView()
  return (
    <header className={style.header}>
      <nav className={style.nav} ref={ref}>
        <div className={`${style.nav__inner} ${!inView ? style.nav__inner__sticky: ''}`}>
          <Link className={style.nav__brand} href="/"><img src={logo.src} width={150} height={35} alt='logo' /></Link>
          <div className={style.nav__search}>
            <Search />
          </div>
          <div className={style.nav__meta}>
            <button className={style.nav__meta__btn} onClick={() => themeToggler()} >
            {
              darkMood ? <i className="xiroicon xi-sun-1"></i> : <i className="xiroicon xi-moon"></i>
            }
            </button>
            <Link className={style.nav__meta__btn} href="https://github.com/xirosoft/xiroicon" target='_blank'><i className="xiroicon xi-github"></i></Link>
            {/* <Link className={style.nav__meta__btn} href="/icon/xiroicon.zip"><i className="xiroicon xi-arrow-down"></i></Link> */}
            <Link className={style.nav__meta__btn} href="https://github.com/Xirosoft/xiroicon/archive/refs/tags/v0.1.0.zip"><i className="xiroicon xi-arrow-down"></i></Link>
          </div>
        </div>
      </nav>
    </header>
  )
}


export default Header