import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import {Provider} from "react-redux";
import {history, store} from "./store";

export default function App() {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter history={history}>
                    <Routes>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="*">Ups</Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}