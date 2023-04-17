import useStore  from "@/data/store"
import styles from './icon.module.scss'

const Icon = props => {
  const {iconSidebar, setIconSidebar} = useStore()

  const iconSidebarHandler = (open = true, icon) => {
    open 
      ? setIconSidebar({open: true, icon})
      : setIconSidebar({open: false, icon})
  }
  
  return (
    <button className={styles.icon} onClick={() => iconSidebarHandler(true, props.icon)}>
      <i className={`xiroicon xi-${props.icon}`} style={{marginTop: 4}}></i>
      {/* <span className="bee_icon">{props.name}</span> */}
      <span className={styles.icon__title}>{props.icon}</span>
    </button>
  )
}

export default Icon