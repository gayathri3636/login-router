import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import Login from './components/login/login';
import * as serviceWorker from './serviceWorker';
import Router from './routes/route';

ReactDOM.render(<App />, document.getElementById('root'));