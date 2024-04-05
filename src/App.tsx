import { Timer } from "./Timer"
import { Footer } from "./layout/footer/Footer"
import { Header } from "./layout/header/Header"
import { Main } from "./layout/main/Main"

function App() {
  return (
    <div className="App">
      <Timer />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
