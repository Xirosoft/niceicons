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
          
          <p>
          Discover a new way to streamline your design process with Xiroicon, the open source icon package manager from Xirosoft. Simply visit <Link href="https://xirosoft.github.io/xiroicon" target="_blank">https://xirosoft.github.io/xiroicon</Link> select the icons you need, and download them in <strong>SVG</strong> or <strong>PNG</strong> format. <br/>
          
          Need to use a vector graphic in your design? With the <kbd>Copy SVG</kbd> button, you can easily paste the graphic directly into your design tool using <kbd>⌘+V</kbd> or <kbd>Ctrl+V</kbd> difference it can make for your design process.
          </p>


          <blockquote>
          Simplify your design process with Xiroicon, the open source icon package manager that offers a better way to manage your icon sets. Our website provides a comprehensive library of continuously updated icons that are easy to search and download. We recommend downloading or copying icons from our website instead of storing them locally. With the <kbd>Copy Icon</kbd>  feature, you can seamlessly paste icons into popular design tools like <strong>Sketch, Figma, Adobe XD</strong>, and more. 
          <br/><br/>
          Streamline your design workflow with Xiroicon and take your work to the next level. Try it out today!
          </blockquote>
          <br/>
          <br/>
          <h3>Webfont Usage</h3>
          <blockquote>
          <strong>Note:</strong> You can import Xiroicon cdn or <Link href="https://github.com/Xirosoft/xiroicon/archive/refs/tags/v0.1.0.zip">download</Link>  it manually.
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
          <h4>Conclusion</h4>
          <p>
          <Link href="https://xirosoft.com" target="_blank">Xirosoft</Link> is the perfect solution for designers and developers looking for a simple, streamlined way to manage their icon sets. Our open source icon package manager offers a comprehensive library of continuously updated icons that are easy to search and download, making it easy to find the perfect icon for your project. With the Copy Icon feature, you can easily paste icons into popular design tools like Sketch, Figma, Adobe XD, and more. <strong>Xiroicon</strong> is designed to simplify your design process and help you achieve your creative vision with ease. So why wait? Try <strong>Xiroicon</strong> today and see how it can transform your design workflow.
          </p>
          <br />        
        </DocsLayout>
      </div>
      
    </Layout>
  )
}
