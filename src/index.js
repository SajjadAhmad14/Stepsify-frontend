import React from 'react';
import ReactDOM from 'react-dom';
import './font/Helvetica-Neue-Bold_22498.ttf';
import './font/HelveticaNeue-Light.otf';
import Routes from './components/Routes';
import store from './components/store/configStore';
import { Provider }  from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);
