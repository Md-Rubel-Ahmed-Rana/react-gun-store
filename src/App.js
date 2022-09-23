
import { useState } from "react";
import Guns from "./guns/Guns";
import Navbar from "./navbar/Navbar";

function App() {
  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Navbar count={count}/>
      <Guns increase={increase} />
    </div>
  );
}

export default App;
