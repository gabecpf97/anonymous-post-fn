import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from '../account/SignUp'
import { Home } from './Home'
import { Nav } from './Nav'

export const SwitchRouter: React.FC = () => {

    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}
