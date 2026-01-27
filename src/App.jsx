import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { WebDesign } from "./pages/WebDesign";
import { AppDesign } from "./pages/AppDesign";
import { GraphicDesign } from "./pages/GraphicDesign";
import { About } from "./pages/About";
import { Locations } from "./pages/Locations";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route to="/" element={<Home></Home>}></Route>
        <Route to="/web-design" element={<WebDesign></WebDesign>}></Route>
        <Route to="/app-design" element={<AppDesign></AppDesign>}></Route>
        <Route
          to="/graphic-design"
          element={<GraphicDesign></GraphicDesign>}
        ></Route>
        <Route to="/about" element={<About></About>}></Route>
        <Route to="/locations" element={<Locations></Locations>}></Route>
        <Route to="/contact" element={<Contact></Contact>}></Route>
        <Route to="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
