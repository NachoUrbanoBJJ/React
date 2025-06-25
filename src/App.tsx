// @ts-ignore
import NavBar from './components/NavBar'
// @ts-ignore
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer greeting="¡Bienvenidos a Sara!" />
      </main>
    </>
  )
}

export default App
