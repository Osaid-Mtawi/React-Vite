import Footer from "./components/Footer/Footer"
import HolidaysAll from "./components/Holidays/HolidaysAll"
import Naav from "./components/Navv/Naav"
import All from "./components/Recent/All"
import Head from "./components/Search/Head"
import StaysAll from "./components/Stays/StaysAll"
import SubscribeAll from "./components/Subscribe/SubscribeAll"
import TripAll from "./components/Trip/TripAll"

function App() {

  return (
    <div>
          <Naav/>
          <Head/>
          <All/>
          <TripAll/>
          <HolidaysAll/>
          <StaysAll/>
          <SubscribeAll/>
          <Footer/>
    </div>

  )
}

export default App
