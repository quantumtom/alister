import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button';
import Menu from './Menu';
import * as serviceWorker from './serviceWorker';
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";

// Put the thing into the DOM!
ReactDOM.render(React.createElement(AppHeader), document.getElementById('appHeader'));

ReactDOM.render(React.createElement(AppMain), document.getElementById('appMain'));

ReactDOM.render(React.createElement(Menu), document.getElementById('menu'));

ReactDOM.render(<Button name="Save" />, document.getElementById('button'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
