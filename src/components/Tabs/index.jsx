import { useState } from 'react'
import style from './tabs.module.scss'

const Tabs = props => {
  const [activeTab,  setActiveTab] = useState(props.children[0].props.label)
  let buttons = [], content
  const changeTab = tab => setActiveTab(tab);

  return (
    <div>
      {
        props.children.map(child => {
          buttons.push(child.props.label)
          if (child.props.label === activeTab) content = child.props.children
        })
      }
        
      <TabButtons 
        buttonTyp='radio' 
        activeTab={activeTab} 
        buttons={buttons} 
        changeTab={(tab) => changeTab(tab)}
      />
      <div className="tab-content">{content}</div>
      
    </div>
  );
}



export const TabButtons = ({buttons, changeTab, activeTab}) =>{
  return(
    <div className={style.btn__wrapper}>
      {
        buttons.map((button, index) => 
          <button 
            className={`${style.btn} ${button === activeTab ? style.btn__active : ''}`} 
            onClick={()=>changeTab(button)}
            key={index}
          >{button}</button>)
      }
    </div>
  )
}


export const Tab = props => {
  return (
    <>
      {props.children}
    </>
  )
}


export default Tabs