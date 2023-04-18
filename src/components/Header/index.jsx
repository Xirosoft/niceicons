import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import Search from '@/components/Search' 

import style from "./header.module.scss"

const Header = props => {
  const { ref, inView, entry } = useInView()
  return (
    <header className={style.header}>
      <nav className={style.nav} ref={ref}>
        <div className={`${style.nav__inner} ${!inView ? style.nav__inner__sticky: ''}`}>
          <Link className={style.nav__brand} href="/"><img src="/logo.png" width={150} height={35} alt='logo' /></Link>
          <div className={style.nav__search}>
            <Search />
          </div>
          <div className={style.nav__meta}>
            <Link className={style.nav__meta__btn} href="#"><i className="xiroicon xi-activity"></i></Link>
            <Link className={style.nav__meta__btn} href="https://github.com/xirosoft/xiroicon" target='_blank'><i className="xiroicon xi-chainlink-link"></i></Link>
            <Link className={style.nav__meta__btn} href="/icon/xiroicon.zip"><i className="xiroicon xi-arrow-down"></i></Link>
          </div>
        </div>
      </nav>
    </header>
  )
}


export default Header