import { STORAGE } from './config'

export const GetItems = () => {
  const data = localStorage.getItem(STORAGE)
  if (data) return JSON.parse(data)
  else return []
}

export const CheckItem = ({ item }) => {
  const data = GetItems()
  if (data)
    return data.filter(
      i => i.toLocaleLowerCase().search(item.toLocaleLowerCase()) !== -1
    )
  else return undefined
}

export const SaveItem = ({ item }) => {
  if (CheckItem({ item: item }).length === 0) {
    localStorage.setItem(
      STORAGE,
      JSON.stringify([...GetItems(), item.toLocaleLowerCase()])
    )
  }
  return true
}
