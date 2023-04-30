import { useState } from 'react'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import style from './CodeBlock.module.scss'

const CodeBlock = ({language = 'html', children}) => {
  const [isCopy, setIsCopy] = useState(false)

  const codeCopy = code => {
    // navigator.clipboard.writeText(code);
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = code;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    
    setIsCopy(true)
    setTimeout(() => setIsCopy(false), 1000);
  }

  return (
    <pre className={style.code} >
      {/* <SyntaxHighlighter language={language} rapLines={true} className={styles.code} wrapLongLines={true} title="Click to Copy!">
        {children}
      </SyntaxHighlighter> */}
      <code className={style.code__content}>{children}</code>
      <div className={style.code__copy}>
        <button 
          className={`${style.code__copy__btn} ${isCopy ? style.code__copied: ''}`}
          onClick={() => codeCopy(children)}>
          {
            isCopy
            ?  <i className="xiroicon xi-checked"></i>
            : <i className="xiroicon xi-copy"></i>
          }
          </button>
      </div>
    </pre>
  )
}

export default CodeBlock

