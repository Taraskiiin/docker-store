import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import Router from "./Router/Router";

import "./styles/reset.scss";
import "./styles/styles.scss";

const defaultState = [
  {
    id: 1,
    name: "article 1",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 25,
  },
  {
    id: 2,
    name: "article 2",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 35,
  },
  {
    id: 3,
    name: "article 3",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 45,
  },
];

localStorage.setItem("items", JSON.stringify(defaultState));

const App: React.FC = () => {
  return (
    <Provider store={store()}>
      <Router />
    </Provider>
  );
};

export default App;
