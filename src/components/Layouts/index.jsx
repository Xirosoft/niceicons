import React, { useEffect, useState, Children, useMemo } from 'react'
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CTA from "@/components/CTA";

import favicon from './favicon.png'

import style from './layout.module.scss'

const Layout = (props) => {
  return (
    <>
    <Head>
      <title>{props.pageTitle ? props.pageTitle: 'Xiro Icon'}</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="MrSvjOpmKwfQ2a_aSjtvzGgBLqtuK1dtAFA-MIw24GA" />
      <link rel="icon" href={favicon.src} />
    </Head>

    <Header />

    { props.children }
    
    <Sidebar />
    <CTA />
    <Footer/>  
    </>
  )
}

function generateOutline(children) {
  let headingLevel = 0;
  const headings = [];

  function traverseChildren(children) {
    return React.Children.map(children, child => {
      if (!child || !child.props) {
        return null;
      }

      const { children: headingText } = child.props;
      if (child.type === 'h1' || child.type === 'h2' || child.type === 'h3' || child.type === 'h4') {
        headingLevel = Number(child.type[1]);
        const headingId = `${child.type}-${headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        const heading = React.createElement(child.type, { id: headingId, key: headingText }, [
          <a key={`${headingId}-link`} href={`#${headingId}`}>
            {headingText}
          </a>,
        ]);
        headings.push({ level: headingLevel, heading });
        return heading;
      }

      const subheadings = traverseChildren(child.props.children);
      if (subheadings.length > 0) {
        headingLevel += 1;
        const headingId = subheadings[0].props.id;
        const heading = React.createElement(`h${headingLevel}`, { key: headingId }, subheadings);
        headings.push({ level: headingLevel, heading });
        headingLevel -= 1;
        return heading;
      }

      return child;
    });
  }

  traverseChildren(children);

  return headings;
}


const DocsLayout = props => {
  // const outline = useMemo(() => generateOutline(props.children), [props.children]);
  const [headings, setHeadings] = useState([]);
  
  useEffect(() => {
    const headings = React.Children.toArray(props.children).filter((child) =>
      /^h[2-4]$/.test(child.type)
    ).map((child, index) => ({
      id: `heading-${index}`,
      hash: `#heading-${index}`,
      level: parseInt(child.type.slice(1)),
      content: child.props.children,
    }));
    setHeadings(headings);
  }, [props.children]);

  useEffect(() => {
    // Add IDs to the headings in the DOM
    headings.forEach(({ id }) => {
      const heading = document.getElementById(id);
      if (heading) {
        heading.setAttribute('id', id);
      }
    });
  }, [headings]);

  return (
    <div className={style.docs__wrapper}>
      <div className={style.docs__inner}>
        {props.children}
      </div>

      <div className={style.docs__outline}>
        <ul>
          {headings.map(({ id, hash, content }) => (
            <li key={id}>
              <a href={hash}>{content}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { DocsLayout } 

export default Layout;