import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import { selectedTheme } from "./redux/features/changeThemes/themeSlice";
import { allMachines } from "./redux/features/machines/machinesSlice";
import axios from "axios";
import moment from "moment";
import "./App.css";
import Login from "./redux/features/auth/login";
import { checkUser } from "./redux/features/auth/loginSlice";

function App() {
  const theme = useSelector(selectedTheme);
  const user = useSelector(checkUser);
  const dispatch = useDispatch();

  const [backgroundColorBody, setBackgroundColorBody] = useState("");

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://machinestream.herokuapp.com/api/v1/machines"
      );
      dispatch(allMachines(response.data.data));
    } catch (error) {
      console.error(error);
    }
  }

  function getBackgroundColorBody() {
    if (theme === "bright") {
      setBackgroundColorBody("white");
    } else {
      setBackgroundColorBody("#171717");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    getBackgroundColorBody();
  }, [theme]);

  return (
    <div className="App" style={{ background: backgroundColorBody }}>
      {user ? (
        <>
          <Header />
          <Home />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
