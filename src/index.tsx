import React from "react";

import ReactDOM from 'react-dom/client';

import App from "./App";


const root=ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <h1>This is my TypeScript</h1>
    <App/>
  </React.StrictMode>
);

export default root;