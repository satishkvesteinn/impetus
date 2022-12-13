import Home from "./pages/Home";
import HomeTwo from "./pages/HomeTwo";
import './pages/home.scss'
import Popup from "./components/popup/Popup";
import { useSelector } from "react-redux";


function App() {
  const changes = useSelector((state) => state.changes.value)
  return (
    <>
      {
        changes ? <Home /> : <HomeTwo />
      }
      <Popup />
    </>
  );
}

export default App;
