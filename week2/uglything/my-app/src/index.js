import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ToDoContextProvider} from './UserContext'

ReactDOM.render(
  <ToDoContextProvider>
    <App />
  </ToDoContextProvider>,
  document.getElementById('root')
);