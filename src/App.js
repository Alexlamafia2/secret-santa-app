import React, { useState } from "react";

import Footer from "./components/Participants/Footer";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginHandler(email, password) {
    setIsLoggedIn(true);
  }

  function logoutHandler() {
    setIsLoggedIn(false);
  }

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default App;
