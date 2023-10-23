import React, { Component } from "react";
import {Outlet, Navigate} from 'react-router-dom';

/*Pconst privateRoute = function({component: Component, ...rest}){ return (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
        ? this.component
        : <Navigate replace to={{pathname: '/login'}} />
    )} />
)}*/

const privateRoute = () => {
    return localStorage.getItem('user')? <Outlet/> : <Navigate replace to={{pathname: '/login'}} />
}


export default privateRoute;