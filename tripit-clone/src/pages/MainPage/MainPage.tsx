import MainLayout from "../../components/Layout/MainLayout"
import TripsTab from "../../components/Main/Trip/TripsTab"

const MainPage = () => {
  return (
    <MainLayout>
    <div className="relative">
    <TripsTab />
      </div>
    </MainLayout>
  )
}

export default MainPage;