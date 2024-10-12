import Navbar from "../../components/Main/Navbar"
import TripsTab from "../../components/Main/TripsTab"

const MainPage = () => {
  return (
    <div className="relative">
        <Navbar/>
        <div className="pt-16"> 
        <TripsTab />
      </div>
    </div>
  )
}

export default MainPage