import "./App.css"
import Section from "./components/section"
import elementop from "./data/elementos"

function App() {
  const lista = elementop.map((e) => {
    return <Section element={e}/>
  })
  
  return (
    <div className="App">
        {lista}
    </div>
  )
}

export default App
