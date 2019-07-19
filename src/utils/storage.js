const STORAGE_KEY = 'keys'

export const storeActivity = ({ key }) => {
  const keys = getKeys()
  if (!keys.includes(key)) {
    store([...keys, key])
  }
}

export const removeActivity = activity => {
  store(getKeys().filter(key => key !== activity.key))
}

const store = data => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export const getKeys = () => {
  return localStorage.getItem(STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(STORAGE_KEY))
    : []
}

export const clearActivities = () => {
  store([])
}
