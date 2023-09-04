import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import SignIn from "../signIn";
import ControlPanel from "../control-panel";

const Home = () => {
  const { user } = useAuth();
  return <div>{user ? <ControlPanel /> : <SignIn />}</div>;
};

export default Home;
