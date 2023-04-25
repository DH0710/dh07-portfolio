import "./App.css"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/Contact"

const App = () => {
  return (
  <div>
      <Header/>
      <Home/>
      <About/>
      <Portfolio/>
     <Contact/>
    </div>
  )
};

export default App
