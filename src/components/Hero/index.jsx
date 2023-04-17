import style from './hero.module.scss'

const Hero = props => {
  return (
    <div className={style.hero}>
      <div className={props.containerClass ? props.containerClass :'container-sm'} style={props.style}>
        <div className={style.hero__content}>
          {props.children}
          {/* {
            props.subHead && 
              <h4 className={style.subhead} dangerouslySetInnerHTML={{ __html: props.subHead }}></h4>
          }
          <h2 className={style.head}>{props.head}</h2>
          {
            props.desc && 
              <p className={style.desc}>{props.desc}</p>
              
          } */}
        </div>
        
        {/* <div className="hero__img"></div> */}
      </div>
    </div>
  )
}
export default Hero
