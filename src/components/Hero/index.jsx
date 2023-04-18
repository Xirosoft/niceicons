import style from './hero.module.scss'

const Hero = props => {
  return (
    <div className={style.hero}>
      <div className={props.containerClass ? props.containerClass :'container-sm'} style={props.style}>
        <div className={style.hero__content}>
          {props.children}
        </div>
      </div>
    </div>
  )
}
export default Hero
