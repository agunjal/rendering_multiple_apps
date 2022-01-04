import React from "react";
import { render } from "react-dom";
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";

render(<App1 />, document.getElementById("world"));
render(<App2 />, document.getElementById("mom"));
render(<App3 />, document.getElementById("kitty"));
