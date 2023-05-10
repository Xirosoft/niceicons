import Link from 'next/link'
import Layout, { DocsLayout } from '@/components/Layouts'
import Hero from '@/components/Hero'

import hero from '@/components/Hero/hero.module.scss'

export default function About(props) {
  return (
    <Layout type='page' pageTitle= 'Xiro Icon - About Us' >
      <Hero containerClass='container'>
        <h1 className={hero.head}>About Us</h1>
      </Hero>

      <div className="page-content container">
        <DocsLayout>
          <h1>About <strong>Xiroicon</strong></h1>
          <p>
            <Link href="https://xirosoft.com" target="_blank">Xirosoft</Link> is a team of passionate software developers and designers dedicated to building innovative tools for the design community. Our flagship product, <strong>Xiroicon</strong>, is an open source icon package manager that provides a comprehensive icon library and an easy-to-use platform for managing icon sets.
          </p>
          <p>
            At <Link href="https://xirosoft.com" target="_blank">Xirosoft</Link>, we believe that great design should be accessible to everyone, and we're proud to contribute to the design community by offering <strong>Xiroicon</strong> as a free and open source tool. Our team is committed to empowering designers to do their best work by providing high-quality software solutions that enhance their workflow and creativity.
          </p>
          <p>
            We're passionate about what we do, and we strive to create a supportive and collaborative environment where our team can thrive. As the managers of <strong>Xiroicon</strong>, we're dedicated to constantly improving the platform and developing new products that make the design process more efficient and enjoyable.
          </p>
          <p>
            Our team is committed to transparency, open communication, and fostering a culture of learning and growth. We believe that by working together with the design community, we can build a better future for design and make it more accessible to everyone.
          </p>
          <p>
            Thank you for choosing <strong>Xiroicon</strong> as your design partner. We're excited to continue building innovative tools and solutions that make design more accessible and enjoyable for everyone.
          </p>
        </DocsLayout>
      </div>
      
    </Layout>
  )
}
