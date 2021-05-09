import React from 'react';
import {RootLayout} from "./redux/components";
import {BrowserRouter} from "react-router-dom";

import {ToastContainer} from 'react-toastify';

const App = () => (
    <BrowserRouter>
      <RootLayout/>
      <ToastContainer/>
    </BrowserRouter>
)

export default App;