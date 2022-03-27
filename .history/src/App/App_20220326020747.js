import React from "react";
import AppRouter from "../";
import AuthContextProvider from "../contexts/AuthContext";

function App(props) {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
