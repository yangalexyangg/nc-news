import "./App.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Articles from "./components/Articles";
import Header from "./components/Header";
import NavBar from "./components/Nav-Bar";
import SingleArticle from "./components/Single-Article";
import Users from "./components/Users";
import { UserContext } from "./contexts/User-Context";
import UserBar from "./components/User-Bar";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("Not logged in");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Header />
          <UserBar />
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<Articles className="articles-layout" />}
            ></Route>
            <Route path="/topics/:topic_slug" element={<Articles />}></Route>
            <Route
              path="/articles/:article_id"
              element={<SingleArticle />}
            ></Route>
            <Route path="/users" element={<Users />}></Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
