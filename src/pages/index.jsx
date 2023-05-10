import Link from 'next/link' 
import Layout from '@/components/Layouts'
import Icons from '@/components/Icons'
import Hero from '@/components/Hero'

import hero from '@/components/Hero/hero.module.scss'

export default function Home(props) {
  return (
    <Layout>
      <Hero>
        {/* <h4 className={hero.subhead}>Trasted by <strong>2000+</strong> People.</h4> */}
        <h1 className={hero.head}>Enhancing Interface Design with Xiroicon</h1>
        <p className={hero.desc}>Xiroicon icons: high-quality, customizable, and time-saving for seamless interface design.</p>
        <div className={hero.btnset}>
          <Link href="https://github.com/Xirosoft/xiroicon/archive/refs/tags/v0.1.0.zip" className={hero.btn}>Download</Link>
          <Link href="/docs" className={hero.btn}>Get Started</Link>
        </div>
      </Hero>
      <Icons />
    </Layout>
  )
}
