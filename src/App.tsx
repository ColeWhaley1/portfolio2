import Header from "./components/header/Header"
import Navigation from "./components/nav/Navigation"

function App() {

  return (
    <div className="h-full">

      <div className="relative h-full">
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2">
          <Navigation />
        </div>
      </div>

      <div>
        <Header />
      </div>
    </div>
  )
}

export default App
