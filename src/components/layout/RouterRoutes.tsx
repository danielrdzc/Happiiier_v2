import React from 'react'
import {Routes, Route} from 'react-router'
import { Login } from '../../views/login'

export const RouterRoutes = () => {
    return (
        <Routes>
            <Route path="/" Component={Login}></Route>
            <Route path="/login" Component={Login}></Route>
        </Routes>
    )
}