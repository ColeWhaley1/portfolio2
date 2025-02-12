import Grid from "./backgrounds/grid"
import MyInfo from "./components/myinfo/MyInfo"
import Navigation from "./components/nav/Navigation"

function App() {

  return (
    <Grid>
      <div className="h-full">

        <div className="relative h-full">
          <div className="fixed left-8 top-1/2 transform -translate-y-1/2">
            <Navigation />
          </div>
        </div>

        <div>
          <MyInfo />
        </div>
      </div>
      
    </Grid>
  )
}

export default App
