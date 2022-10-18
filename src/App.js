import "./App.css";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-2/3">
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
