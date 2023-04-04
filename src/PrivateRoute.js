import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useFuro } from "furo-react";

/*
로그인 여부를 확인하는 컴포넌트로, 로그인이 필요한 페이지를 감싸는데 사용됩니다.
*/
// function RequireAuth({ children }) {
//   const { isLoading, isAuthenticated, loginWithRedirect } = useFuro();

//   useEffect(() => {
//     if (isLoading || isAuthenticated) return <>Loading...</>;
//     loginWithRedirect();
//   }, [isLoading, isAuthenticated, loginWithRedirect]);

//   return isAuthenticated ? children : <></>;
// }

function PrivateRoute({ component: Component, ...rest }) {
  const { isLoading, isAuthenticated, loginWithRedirect } = useFuro();

  useEffect(() => {
    console.log("isLoading :::", isLoading);
    console.log("isAuthenticated :::", isAuthenticated);
    if (!isLoading && !isAuthenticated) {
      // loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <>Loading...</>
      }
    />
  );
}

export default PrivateRoute;
