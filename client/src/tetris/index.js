import React from "react";
import ReactDom from "react-dom";
import './index.css';
import GamePage from "../pages/GamePage";
import * as serviceWorker from './serviceWorker';

ReactDom.render(<GamePage/>, document.getElementById('root'));

serviceWorker.unregister();
