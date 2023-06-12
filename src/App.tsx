import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Contact/About";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
