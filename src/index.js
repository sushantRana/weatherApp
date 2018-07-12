import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './containers/App/App';
import Root from './Root';

render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
)
