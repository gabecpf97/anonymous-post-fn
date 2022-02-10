import React from 'react'
import { NativeRouter, Route, Routes } from 'react-router-native'
import { SignUp } from '../account/SignUp'
import { Home } from './Home'

export const SwitchRouter: React.FC = () => {

    return (
        <NativeRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </NativeRouter>
    )
}
