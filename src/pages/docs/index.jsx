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
          <h2>Usages</h2>
          <h3>Basic Usage</h3>
          <p>Just click the icons you want from <Link href="https://xirosoft.github.io/xiroicon" target="_blank">https://xirosoft.github.io/xiroicon</Link>, and then you can download the icons in SVG or PNG format.
          <br/>Designers can click the <kbd>Copy SVG</kbd> button and then press <kbd>⌘+V</kbd> or <kbd>Ctrl+V</kbd> to paste the vector graphic into your design tool directly, easy and simple.</p>

          <blockquote>
          We recommend that designers download or copy icons from our website when needed instead of managing all of them in a local folder. The website's search engine allows you to quickly locate the icon you are looking for and the icons on the website are being continuously updated.
          <br/>
          <br/>
          The <kbd>Copy Icon</kbd> now supports Sketch, Figma, Adobe XD, Adobe Illustrator, Affinity Designer, Affinity Photo, etc.
          </blockquote>
          <br/>
          <br/>
          <h3>Webfont Usage</h3>
          <blockquote>
          <strong>Note:</strong> You can import Xiroicon cdn or download it manually.
          </blockquote>
          <br/>
          <br/>
          <h3>CDN</h3>
          <p>Copy the following code and add it to the &lt;head&gt; tag of your html document.</p>

          <CodeBlock>{`<link rel="styleheet" href="https://xirosoft.github.io/xiroicon/icon/xiroicon.min.css" />`}</CodeBlock>
          <br/>
          <br/>
          <h3>Download Manually</h3>
          <p>Download <Link href="https://xirosoft.github.io/xiroicon/icon/xiroicon.min.css">xiroicon.css</Link> file, add it to the &lt;head&gt; tag of your html document.</p>
          <br/>
          <br/>
          <h3>Use</h3>
          <p>Add icon with class name, class name rule: xiroicon xi-{`{name}`}</p>
          <CodeBlock>{`<i class="xiroicon xi-add"></i>\n<i class="xiroicon xi-arrow-left">`}</CodeBlock>

          <br/>
          <br/>
          <h4>Photoshop / Illustrator / Figma (Others)</h4>
          <p>First, <Link href="https://github.com/Xirosoft/xiroicon/archive/refs/tags/v0.1.0.zip">Download</Link> and install the font in your system. <br/>
            just copy the following icon by click <strong>Copy Icon</strong> button in sidebar.
          </p>
          <br />        
        </DocsLayout>
      </div>
      
    </Layout>
  )
}
