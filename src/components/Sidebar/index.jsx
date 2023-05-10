import { useRef, useState } from "react";
import Link from 'next/link'
import useStore from "@/data/store";
import CodeBlock from "@/components/CodeBlock";
import Tabs, { Tab } from "@/components/Tabs";

import style from "./sidebar.module.scss";

const Sidebar = () => {
  const componentRef = useRef(null)
  const [isCopy, setIsCopy] = useState('')
  const { iconSidebar, setIconSidebar } = useStore()
  const icons = useStore(state => state.icons)

  const sidebarCloseHandler = (e) => {
    if (iconSidebar.open && componentRef.current && !componentRef.current.contains(e.target)) {
      setIconSidebar({ open: false, icon: 'add'})
    }
  };

  const iconData = icons.find(icon => icon.name === iconSidebar.icon);
  const hex = iconData.codepoint.toString(16).toUpperCase()
  const glyph = String.fromCodePoint(iconData.codepoint)
  const unicode = String.fromCharCode(parseInt(iconData.codepoint, 16))
  
  const copyIcon = (icon = glyph, copy= 'glyph') => {
    // navigator.clipboard.writeText(icon);
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = icon;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    if(copy === 'glyph') {
      setIsCopy('glyph')
    } else if (copy === 'svg') {
      setIsCopy('svg')
    } else if(copy === 'download') {
      setIsCopy('download')
    } else {
      setIsCopy('')
    }
    setTimeout(() => setIsCopy(''), 1000);
  }

  const websiteUrl = 'https://xirosoft.github.io/xiroicon'
  let { protocol, hostname } = new URL(websiteUrl)
  // const url = `${protocol}//${hostname}`
  const url = websiteUrl

  return (
    <div
      className={`${style.sidebar} ${iconSidebar.open && style.sidebar__open}`}
      onClick={(e) => sidebarCloseHandler(e)}
    >
      <div className={style.sidebar__inner} ref={componentRef}>
        <div className={style.sidebar__header}>
          <div className={style.sidebar__header__icon}>
            <i className={`xiroicon xi-${iconData.name}`}></i>
          </div>
          <div className={style.sidebar__header__title}>{iconData.name.replace(/-/g, ' ')}</div>
          <button
            type="button"
            className={style.sidebar__header__closeBtn}
            onClick={() => setIconSidebar({ open: false, icon: 'add' })}
          >
            <i className="xiroicon xi-close"></i>
          </button>
        </div>
        <div className={style.sidebar__body}>
          <Tabs>
            <Tab label='HTML'>
              <CodeBlock>{`<i class="xiroicon xi-${iconData.name}"></i>`}</CodeBlock>
              <CodeBlock>{ `<span class="xiroicon">\n\t${iconData.name}\n</span>`}</CodeBlock>
            </Tab>
            <Tab label='CSS Pseudo'>
              <CodeBlock language='css'>{`::after {\n\tcontent: '${iconData.name}';\n\tfont-family: 'xiroicon';\n}`}</CodeBlock>
              <CodeBlock language='css'>{`::after {\n\tcontent: '\\${hex}';\n\tfont-family: 'xiroicon';\n}`}</CodeBlock>
            </Tab>
          </Tabs>

          <Tabs>
            <Tab label='Codepoint'>
              <CodeBlock language='html'>{hex}</CodeBlock>
            </Tab>
            <Tab label='HTML Entity'>
              <CodeBlock language='html'>&#x{hex};</CodeBlock>
            </Tab>
          </Tabs>


          <div className='form-group'>
            <h4 className="form-title">How to use CDN?</h4>
            <Tabs>
              <Tab label='<link>'>
                <CodeBlock language='html'>{`<link rel="stylesheet" href="${url}/icon/xiroicon.min.css" >`}</CodeBlock>
              </Tab>
              <Tab label='@import'>
                <CodeBlock language='css'>{`@import url('${url}/icon/xiroicon.min.css');`}</CodeBlock>
              </Tab>
            </Tabs>
          </div>
          
          <div className='form-group'>
            <p>
              <Link href="/docs">Read Our <strong>Docs</strong></Link>
            </p>
          </div>


        </div>
        <div className={style.sidebar__footer}>
          <button type="button" onClick={() => copyIcon( null, 'download')} className={`${style.sidebar__footer__btn} ${isCopy === 'download' ? style.code__copied : ''}`} disabled>Download SVG</button>
          <button type="button" onClick={() => copyIcon(null, 'svg')} className={`${style.sidebar__footer__btn} ${isCopy === 'svg' ? style.code__copied : ''}`} disabled>Copy SVG</button>
          <button type="button" onClick={() => copyIcon(glyph, 'glyph')} className={`${style.sidebar__footer__btn} ${isCopy === 'glyph' ? style.code__copied : ''}`}>Copy Icon</button>
        </div>
      </div>
    </div>
  );
};


export default Sidebar;
