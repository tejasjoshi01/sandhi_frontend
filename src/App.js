import { BrowserRouter } from "react-router-dom";
import BaseRouter from "./containers/Routes.js";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <BaseRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;


