import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BoardPage from "./pages/boardPage";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import UserProfilePage from "./pages/userProfilePage";
import ChatRoom from "./pages/chatRoom";

function App() {

  const token = localStorage.getItem('token')

  return (
      <div className="app__body">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/boards/:id">
              <BoardPage />
            </Route>
            <Route exact path="/chats/:id">
              <ChatRoom />
            </Route>
            <Route exact path="/user">
              {!token ? <LoginPage /> : <UserProfilePage />}
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
