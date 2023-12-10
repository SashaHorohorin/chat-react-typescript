import { createRoot } from 'react-dom/client'
import App from './App'
import Store from './store/store'
import { createContext } from 'react'

const store = new Store()
export const Context = createContext({
  store,
})

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <Context.Provider value={{ store }}>
    <App />
  </Context.Provider>
)
