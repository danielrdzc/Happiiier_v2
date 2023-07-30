import React from 'react'
import {Routes, Route} from 'react-router'
import { Login } from '../../views/login'
import { Home } from '../../views/home'

export const RouterRoutes = () => {
    return (
        <Routes>
            <Route path="/" Component={Login}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/home" Component={Home}></Route>
        </Routes>
    )
}