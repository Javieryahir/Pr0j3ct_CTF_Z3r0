import { HashRouter, Route, HashRouter as Routes } from "react-router-dom";
import routes from "./Routes";


function App() {
  return (
    <HashRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </HashRouter>


  );
}

export default App;