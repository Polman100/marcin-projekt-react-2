import './App.css';
import BottomLine from './Components/BottomLine';
import TopLine from './Components/TopLine';

import {qs, create, appendToElement} from './Components/HelperFunctions';
import DOMContentLoadedListner from './Components/DOMContentLoadedListner';

function App() {

  document.addEventListener("DOMContentLoaded", DOMContentLoadedListner())
  return (
    <div className="container">
      <TopLine />
      <BottomLine />
    </div>
  );
}

export default App;
