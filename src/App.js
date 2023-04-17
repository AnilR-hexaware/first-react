import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import User from "./components/user/User";
import Role from "./components/Role";
import Container from "./components/reusables/Container";
import Adduser from "./components/user/Adduser";
import Edituser from "./components/user/Edituser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <Container>
              <Home />
            </Container>
          }
        />
        <Route
          path="/user"
          element={
            <Container>
              <User />
            </Container>
          }
        />
        <Route
          path="/adduser"
          element={
            <Container>
              <Adduser />
            </Container>
          }
        />
        <Route
          path="/role"
          element={
            <Container>
              <Role />
            </Container>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <Container>
              <Edituser />
            </Container>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
