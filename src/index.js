import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Timer from = {8} to = {15} />, document.getElementById('root'));
registerServiceWorker();
