import { useContext } from 'react'
import './style.css'
import { observer } from 'mobx-react-lite'
import { Context } from '.'

const App = () => {
  const { store } = useContext(Context)
  return (
    <>
      <h1>{store.hello}</h1>
    </>
  )
}

export default observer(App)
