import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './SocketContext';
import App from './App';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
