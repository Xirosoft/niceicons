import useStore  from "@/data/store"
import IconGrid from "@/components/Icons/IconGrid"

export const Icons = () => {
  const iconCat = useStore(state => state.iconCat)
  const searchTerm = useStore(state => state.searchTerm)
  
  const searchIcon = (term = searchTerm) => {
    let tmpArr = iconCat.map(obj => obj.icons).flatMap(icon => icon)
    let newArr = tmpArr.filter(item => item.includes(term))
    return {title: 'search result', icons: newArr}
  }

  return (
    <div className="container">
      {!searchTerm ? 
        iconCat.map((iconsWithCategory, key) => (
          <section key={key}>
            <IconGrid category={iconsWithCategory} />
          </section>
        ))
      : <section>
          <IconGrid category={searchIcon()} />
        </section>}
    </div>
  )
}

export default Icons