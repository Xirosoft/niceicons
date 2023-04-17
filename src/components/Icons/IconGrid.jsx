// import useStore  from "@/data/store"
import Icon from "./Icon"
import styles from './iconGrid.module.scss'

const IconGrid = ({category}) => {
  // const searchTerm = useStore(state => state.searchTerm)
  // let filteredArr = category.icons.filter(item => item.includes(searchTerm))

  return (
    <div className={styles.grid}>
      <h4 className={styles.title}>{`${category.title} (${category.icons.length})`}</h4>
      {
        category.icons.map((icon, index) => <Icon icon={icon} key={index} />)
      }
    </div>
  )
}


export default IconGrid