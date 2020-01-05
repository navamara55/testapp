import { Hello } from './hello';
import './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import App from './App';

ReactDOM.render(<App />, document.querySelector("#root"))
console.log('Message fromss', Hello('dhdhdhravi'));