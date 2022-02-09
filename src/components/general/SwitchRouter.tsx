import React from 'react'
import { NativeRouter, Route, Routes } from 'react-router-native'
import { Home } from './Home'

export const SwitchRouter: React.FC = () => {

    return (
        <NativeRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </NativeRouter>
    )
}
