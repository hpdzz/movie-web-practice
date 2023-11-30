import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./components/ThemeContext";
import { BrowserRouter } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import userReducer from "./components/Redux/UserSlice";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { AuthContextProvider } from "./components/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
