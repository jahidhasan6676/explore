
import './App.css'
import AreaChart from './components/areaChart/AreaChart'
import LineChart from './components/lineChart/LineChart'
// import DaisyNav from './components/daisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/phones/Phones'
import PieChart from './components/pieChart/PieChart'
import PriceOption from './components/priceOption/PriceOption'
function App() {


  return (
    <>
    <Navbar></Navbar>
     {/* <DaisyNav></DaisyNav> */}
     
      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <Phones></Phones>
      <PieChart></PieChart>
      <AreaChart></AreaChart>
     
      
    </>
  )
}

export default App
