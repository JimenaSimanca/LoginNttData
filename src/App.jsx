import './App.css'
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import Dashboard from "./Routes/Dashboard";
import { routes } from "./routes.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <reactRouterDom.Routes>
        <reactRouterDom.Route path={routes.home} element={<Home />} />
        <reactRouterDom.Route path={routes.login} element={<Login />} />
        <reactRouterDom.Route path={routes.detail} element={<Detail />} />
        <reactRouterDom.Route path={routes.dashboard} element={<Dashboard />} />
      </reactRouterDom.Routes>
      <Footer />
    </div>
  );
}

export default App;

