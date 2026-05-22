import HeroArea from "./components/HeroArea"
import JobSection from "./components/JobArea/JobSection"
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <>
    <Navbar/>
      <div className="w-full container-main mx-auto"> 
          <main className="container-main">
            <HeroArea/>
            <JobSection/>
          </main>
        </div>
    </>       
    
  )
}

export default App