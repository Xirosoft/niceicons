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
        <h1 className={hero.head}>Using Xiroicon to visualize the better interfaces</h1>
        <p className={hero.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat, adipisci molestias</p>
        <div className={hero.btnset}>
          <Link href="/icon/xiroicon.zip" className={hero.btn}>Download</Link>
          <Link href="/docs" className={hero.btn}>Get Started</Link>
        </div>
      </Hero>
      <Icons />
    </Layout>
  )
}
