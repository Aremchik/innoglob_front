import { useRoutes } from "react-router-dom";
import { appRoutesDefinition } from "./views/content/router/app.router";

function App() {
  const AppRoutes = useRoutes(appRoutesDefinition);
  return AppRoutes;
}

export default App;
