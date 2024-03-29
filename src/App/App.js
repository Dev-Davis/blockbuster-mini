import React from "react";
import AppRouter from "../Components/AppRouter/AppRouter.jsx";
import AuthContextProvider from "../contexts/AuthContext";

function App(props) {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
