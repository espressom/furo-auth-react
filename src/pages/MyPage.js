import React from "react";
import { Button } from "../components/Button";
import { useFuro } from "furo-react";

function MyPage(props) {
  const { logout } = useFuro();
  return (
    <div>
      <div>Admin Page</div>
      <Button onClick={logout}>Log out</Button>
    </div>
  );
}

export default MyPage;
