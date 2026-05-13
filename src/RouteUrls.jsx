import React from 'react';
import { BrowserRouter , Routes , Route } from "react-router";
import Login from './Pages/Login';

const RouteUrls = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default RouteUrls;