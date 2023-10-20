import { Suspense } from "react"
import Loading from "./components/Loading/index";
import useRouteElements from "./routes/index.js";
function App() {
  const routeElements = useRouteElements();
  return (
    <div className="App">
      <Suspense fallback={Loading}>{routeElements}</Suspense> 
     
    </div>

  );
}

export default App;
