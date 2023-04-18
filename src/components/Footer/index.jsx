import Link from 'next/link'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          {/* <Widget title="About Xiroicon">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, esse! Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
          </Widget> */}
          <Widget 
            title="Important Links"
            link = {[
              {title: 'About Us', url: '/about'},
              {title: 'What\'s New', url: 'https://xirosoft.com'}
            ]}
          />
          <Widget 
            title="Other Projects"
            link = {[
              {title: 'Themeies', url: 'https://themeies.com'},
              {title: 'Xiroblock', url: 'https://xirosoft.com'},
              {title: 'Xirosoft', url: 'https://xirosoft.com'},
              {title: 'Initial Solutions', url: 'https://initialsolutions.com'}
            ]}
          />
        </div>
        <div className={styles.footer__copyright}>
          <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved By <Link href="https://xirosoft.com" target="_blank">Xirosoft</Link></p>
        </div>
      </div>
    </footer>
  )
}


const Widget = ({title, link, children}) => {
  return (
    <div className={styles.widget}>
      <h4 className={styles.widget__title}>{title}</h4>
      <ul className={styles.widget__list}>
        {
          link && link.map((el,i) => <li key={i}><Link href={el.url}>{el.title}</Link></li>)
        }
      </ul>
      { children }
    </div>
  )
}


export default Footer