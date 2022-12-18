import "assets/scss/app.scss";

// Handling Routing
import { RouterProvider } from "react-router-dom";
import { router } from "./routesHandler";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
