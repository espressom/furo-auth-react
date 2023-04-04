import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import PrivateRoute from "./PrivateRoute";
import { FuroProvider } from "furo-react";

function App(props) {
  return (
    <FuroProvider
      domain="https://auth.furo.one"
      /* Furo 콘솔에서 가져온 프로젝트의 client id 입니다. */
      clientId="c9dab65232d24afe9be1eaa8a5702234"
      redirectUri={window.location.origin + "/private"}
    >
      <Router>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/mypage" component={MyPage} />
      </Router>
    </FuroProvider>
  );
}

export default App;
