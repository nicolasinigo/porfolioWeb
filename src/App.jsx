import "./App.css";
import Home from "./Home";
import { useContextOscuro } from "./context/contextModoOscuro";

function App() {
  const { context } = useContextOscuro();

  return (
      <div className={context}>
        <Home></Home>
      </div>
  );
}

export default App;
