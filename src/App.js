import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import News from "./components/News/News";
import User from "./components/Redux/User";
import Add from "./components/FilmsPresentation/Add";
import Protected from "./components/Protected";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Update from "./components/Update";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Navigation
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>

        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <Protected>
              <Add />
            </Protected>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* <Route path='/edit' element={<Protected><Edit/></Protected>}></Route> */}
      </Routes>
      {/* <footer> */}
      <Footer />
      {/* </footer> */}
    </div>
  );
}

export default App;
