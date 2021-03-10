import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Global, css } from '@emotion/react';

import App from './App';
import store from './redux/store';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');
  body {
    margin: 0;
    padding: 0;
    background-image: url("background.jpg");
    background-repeat: repeat;
    background-size: 1920px 1080px;
    font-family: 'RocknRoll One', sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
