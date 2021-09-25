import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';

import Game from './game/main'

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

