import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button';
import Menu from './Menu';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Button name="Save" />, document.getElementById('button'));

// Put the thing into the DOM!
ReactDOM.render(React.createElement(Menu), document.getElementById('menu'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
