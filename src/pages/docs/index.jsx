import Link from 'next/link' 
import Layout, { DocsLayout } from '@/components/Layouts'
import Hero from '@/components/Hero'
import CodeBlock from '@/components/CodeBlock'


import hero from '@/components/Hero/hero.module.scss'

export default function Docs(props) {
  return (
    <Layout type='page' pageTitle= 'Xiro Icon - Docs' >
      <Hero containerClass='container'>
        <h1 className={hero.head}>Docs</h1>
      </Hero>

      <div className="page-content container">
        <DocsLayout>
          <h2>Web</h2>
          <p>
            To use the icon package in your website, just add our <strong>CDN</strong>
          </p>
          <CodeBlock>{`<link rel="styleheet" href="http://localhost/icon/xiroicon.min.css" />`}</CodeBlock>
          and uses your favorit icon
          <CodeBlock>{`<i class="xiroicon xi-add"></i>`}</CodeBlock>
          <br />
          
          <h2>Photoshop / Illustrator / Figma (Others)</h2>
          <p>First, <Link href="/icon/xiroicon.zip">Download</Link> and install the font in your system. <br/>
            just copy the following icon by click <strong>Copy Icon</strong> button in sidebar.
          </p>
          <br />        
        </DocsLayout>
      </div>
      
    </Layout>
  )
}
