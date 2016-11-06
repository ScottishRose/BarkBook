import React from 'react';
import ReactDOM from 'react-dom';
import withRouter from 'react-router';

// import App from './components/app.jsx'
import Routes from './config/routes.jsx';

ReactDOM.render(<Routes />, document.querySelector('#root'));

// ReactDOM.render(<App message="BarkstaCam" />, document.querySelector('#root'));
