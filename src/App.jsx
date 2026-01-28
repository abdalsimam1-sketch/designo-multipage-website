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
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/web-design" element={<WebDesign></WebDesign>}></Route>
        <Route path="/app-design" element={<AppDesign></AppDesign>}></Route>
        <Route
          path="/graphic-design"
          element={<GraphicDesign></GraphicDesign>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/locations" element={<Locations></Locations>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
