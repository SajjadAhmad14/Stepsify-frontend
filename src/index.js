import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './font/Helvetica-Neue-Bold_22498.ttf';
import './font/HelveticaNeue-Light.otf';
import Routes from './components/Routes';
import store from './components/store/configStore';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
    ,
  </Provider>,
  document.getElementById('root'),
);
