import { AboutMe } from "./components/AboutMe"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"
import { NavBarPer } from "./components/NavBarPer"
import { Projects } from "./components/Projects"

function App() {

  return (
    <>
      <NavBarPer></NavBarPer>
      <Home></Home>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
