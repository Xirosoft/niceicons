import { create } from 'zustand'
import jsonData from './codepoints.json'
import fileTree from './file-tree.json'

const useStore = create((set) => {
  const iconObject = Object.entries(jsonData).map(([name, codepoint]) => ({name, codepoint}));
  const iconCatObject = Object.entries(fileTree).map(([title, icons]) => ({title, icons}));
  return ({
    icons: iconObject,
    iconCat: iconCatObject,
    iconSidebar: {open: false, icon: 'add'},
    setIconSidebar: props => set(() => ({iconSidebar: {open: props.open, icon: props.icon }})),
    searchTerm: '',
    setSearchTerm: props => set(() => ({searchTerm: props.value.toLowerCase()}))
  })
})

export default useStore