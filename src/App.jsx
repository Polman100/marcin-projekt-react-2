import './App.css';
import BottomLine from './Components/BottomLine';
import TopLine from './Components/TopLine';
// import currencyArray from './data/currencyArray';


function App() {
  // console.log(currencyArray)
  return (
    <div className="container">
      <TopLine />
      <BottomLine />
    </div>
  );
}

export default App;
