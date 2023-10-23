import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from "./screens/home";
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';
import NotesIndexScreen from './screens/notes/index';
import UserEditScreen from './screens/users/edit';
import PrivateRouter from './components/auth/private_router';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={HomeScreen}/>
                <Route exact path='/register' Component={RegisterScreen} />
                <Route exact path='/login' Component={LoginScreen} />
                <Route exact path='/notes' Component={PrivateRouter}>
                    <Route exact path='/notes' Component={NotesIndexScreen}/>
                </Route>
                <Route exact path='/users/edit' Component={PrivateRouter}>
                    <Route exact path='/users/edit' Component={UserEditScreen}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;